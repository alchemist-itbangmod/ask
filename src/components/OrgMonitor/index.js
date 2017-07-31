import React from 'react'
import { compose, withState, withHandlers, lifecycle } from 'recompose'
import { QuestionCard, Question } from '../../styles/Global'
import swal from 'sweetalert2'

import instance from '../../libs/axios'
import socket from '../../libs/socket'

const PrimaryColor = '#1BB7BF'

const RoomMornitor = props => {
  if (props.room === null) {
    return <div />
  }

  return (
    <div>
      <div className="row">
        <div className="col-8">
          <div className="card">
            <div className="card-block">
              <button
                className="btn btn-info pull-right"
                onClick={props.fetchQuestions}
              >
                <i className="fa fa-refresh" />
                {` Refresh `}
                <span className="badge badge-default">{props.remain}</span>
              </button>
              <h2>Question</h2>
            </div>
            <ul className="list-group list-group-flush">
              {
                props.questions.map((q, index) => (
                  <QuestionCard
                    key={q._id}
                    onClick={() => props.onSelect(q._id)}
                    active={props.selectedQuestions.find(sq => sq === q) !== undefined}
                    className="list-group-item"
                  >
                    <Question className="lead">
                      { q.question }
                    </Question>
                    <button
                      className="btn btn-danger pull-right"
                      onClick={props.onUpdateIsDelete}
                      id={q._id}
                    >
                      <i className="fa fa-trash" />
                    </button>
                  </QuestionCard>
                ))
              }
            </ul>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card-block">
              <div className="row">
                <div className="col-7">
                  <h2>{'Selected'}</h2>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-success"
                    onClick={props.onAnswerQuestion}
                  >
                    {'SEND'} <span className="badge badge-default">{props.selectedQuestions.length}</span>
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  {
                    props.selectedQuestions.length > 0 && (
                      <div className="card">
                        <ul className="list-group list-group-flush">
                          {
                            props.selectedQuestions.map(q => (
                              <QuestionCard
                                key={q._id}
                                className="list-group-item"
                              >
                                <Question>
                                  { q.question }
                                </Question>
                              </QuestionCard>
                            ))
                          }
                        </ul>
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const RoomMornitorCompose = compose(
  withState('questions', 'setQuestions', []),
  withState('remain', 'setRemain', 0),
  withState('roomId', 'setRoomId', ''),
  withState('room', 'setRoom', null),
  withState('selectedQuestions', 'setSelected', []),
  lifecycle({
    async componentWillMount() {
      let id = this.props.match.params.id
      let room = await instance.get(`/rooms/${id}`)
        .then(resp => resp.data.data.room)
      let questions = await instance.get(`/rooms/${id}/questions`)
        .then(resp => resp.data.data.allQuestion)

      questions = questions.filter(q => !q.isDelete && !q.isAnswer).reverse()
      this.props.setQuestions(questions)
      this.props.setRoom(room)
    },
    async componentDidMount() {
      let roomId = this.props.match.params.id
      // Signup the `room`
      socket.on('connect', function() {
        socket.emit('room', roomId)
      })
      // Get data from 'monitor' in the `room`
      socket.on('monitor', (data) => {
        if (data.status === 200) {
          this.props.setRemain(this.props.remain + 1)
        }
      })
    }
  }),
  withHandlers({
    onSelect: props => (id) => {
      let questions = props.questions
      let select = questions.find(q => q._id === id)
      let selectedQuestions = props.selectedQuestions
      /*
       * monitor cannot select question more than 5
       */
      if (selectedQuestions.length <= 4 && selectedQuestions.find(q => q === select) === undefined) {
        selectedQuestions.push(select)
      } else {
        selectedQuestions = selectedQuestions.filter(q => q !== select)
      }
      props.setSelected(selectedQuestions)
    },
    fetchQuestions: props => async (e) => {
      let id = props.match.params.id
      let questions = await instance.get(`/rooms/${id}/questions`)
        .then(resp => resp.data.data.allQuestion)
      questions = questions.filter(q => !q.isDelete && !q.isAnswer).reverse()
      props.setSelected([])
      props.setRemain(0)
      props.setQuestions(questions)
    },
    onUpdateIsDelete: props => async (e) => {
      let qId = e.target.id
      let q = props.questions.find(q => q._id === qId)
      if (q !== undefined) {
        swal({
          title: 'Are you sure to delete',
          text: `Are you sure to delete this question that '${q.question}'`,
          showCancelButton: true,
          reverseButtons: true,
          confirmButtonText: 'Confirm',
          confirmButtonColor: PrimaryColor,
          customClass: 'Button',
          showLoaderOnConfirm: true,
          preConfirm: () => {
            return new Promise((resolve, reject) => {
              instance.put(`/questions/${q._id}/del`, {
                _id: q._id
              }).then(data => {
                resolve(data.data)
              })
            })
          }
        }).then(async (data) => {
          if (data.status) {
            props.setSelected([])
            swal({
              title: 'Sucess',
              text: `Your question has been delete!`,
              type: 'success',
              confirmButtonText: 'OK',
              confirmButtonColor: PrimaryColor
            })
            let id = props.match.params.id
            let questions = await instance.get(`/rooms/${id}/questions`)
              .then(resp => resp.data.data.allQuestion)
            questions = questions.filter(q => !q.isDelete && !q.isAnswer).reverse()
            props.setQuestions(questions)
          } else {
            swal({
              title: 'Failed',
              text: `Sorry, cannot delete question. please try again.`,
              type: 'warning',
              confirmButtonText: 'OK',
              confirmButtonColor: PrimaryColor
            })
          }
        })
      }
    },
    onAnswerQuestion: props => (e) => {
      let selectQ = props.selectedQuestions
      swal({
        title: `Are you sure to answer the question${selectQ.length > 1 ? 's' : ''}`,
        text: `Are you sure to answer ${selectQ.length} question${selectQ.length > 1 ? 's' : ''}`,
        showCancelButton: true,
        reverseButtons: true,
        confirmButtonText: 'Confirm',
        confirmButtonColor: PrimaryColor,
        customClass: 'Button',
        showLoaderOnConfirm: true,
        preConfirm: () => {
          return new Promise((resolve, reject) => {
            instance.put(`/questions/${selectQ[0]._id}/ans`, {
              roomId: props.match.params.id,
              questions: selectQ
            }).then(data => {
              resolve(data.data)
            })
          })
        }
      }).then(async (data) => {
        if (data.status) {
          swal({
            title: 'Sucess',
            text: `Question has been answered!`,
            type: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: PrimaryColor
          })
          let id = props.match.params.id
          let questions = await instance.get(`/rooms/${id}/questions`)
            .then(resp => resp.data.data.allQuestion)
          questions = questions.filter(q => !q.isDelete && !q.isAnswer).reverse()
          props.setQuestions(questions)
          props.setSelected([])
        } else {
          swal({
            title: 'Failed',
            text: `Sorry, cannot answer question. please try again.`,
            type: 'warning',
            confirmButtonText: 'OK',
            confirmButtonColor: PrimaryColor
          })
        }
      })
    }
  })
)(RoomMornitor)

export default RoomMornitorCompose
