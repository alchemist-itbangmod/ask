import React from 'react'
import { compose, withState, withHandlers, lifecycle } from 'recompose'
import { QuestionCard, Trash, Div } from '../styles/Global'

import instance from '../libs/axios'
import requireAuth from '../libs/requireAuth'
import withNavbar from '../libs/withNavbar'
import socket from '../libs/socket'
import swal from 'sweetalert2'

const OrgMonitor = props => (
  <Div>
    <div className="container">
      <div className="row">
        <div className="col-12 text-center h2 text-white">
          Room name
        </div>
        <div className="col-7">
          <div className="card row">
            <div className="col-12 row">
              <div className="col-11 h3">
                Question
              </div>
              <button
                className="col-1 fa fa-refresh btn btn-info"
                onClick={props.fetchQuestions}
              />
            </div>
          </div>
          <div className="card">
            <div className="list-group list-group-flush">
              {
                props.questions.map((q, index) => (
                  <div
                    className="row"
                    key={q._id}
                  >
                    <QuestionCard
                      onClick={props.onSelect}
                      active={props.selectedQuestions.find(sq => sq === q) !== undefined}
                      className="list-group-item col-11"
                      id={q._id}
                    >
                      { q.question }
                    </QuestionCard>
                    <Trash
                      className="fa fa-trash fa-2x btn btn-danger col-1"
                      onClick={props.onUpdateIsDelete}
                      id={q._id}
                     />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className="col-5">
          <div className="card">
            <div className="row">
              <div className="col-4">
                Selected question
              </div>
              <div className="col-1">
                <span className="badge badge-default">{props.selectedQuestions.length}</span>
              </div>
            </div>
          </div>
          {
            props.selectedQuestions.map(q => (
              <div key={q._id} className="card col-12">
                {q.question}
              </div>
            ))
          }
          <div className="col-12 text-center">
            <button
              className="btn btn-success btn-lg"
              onClick={props.onAnswerQuestion}
            >
              SEND
            </button>
          </div>
        </div>
      </div>
    </div>
  </Div>
)

const MonitorCompose = compose(
  requireAuth(),
  withNavbar(),
  withState('questions', 'setQuestions', []),
  withState('roomId', 'setRoomId', ''),
  withState('selectedQuestions', 'setSelected', []),
  lifecycle({
    async componentWillMount() {
      let id = this.props.match.params.id
      let questions = await instance.get(`/rooms/${id}/questions`)
        .then(resp => resp.data.data.allQuestion)
        // console.log(questions)
      questions = questions.filter(q => !q.isDelete && !q.isAnswer)
      this.props.setQuestions(questions)
    },
    async componentDidMount() {
      socket.on('monitor', (data) => {
        console.log(data)
      })
    }
  }),
  withHandlers({
    onSelect: props => (e) => {
      let id = e.target.id
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
      questions = questions.filter(q => !q.isDelete && !q.isAnswer)
      props.setQuestions(questions)
    },
    onUpdateIsDelete: props => async (e) => {
      let qId = e.target.id
      let q = props.questions.find(q => q._id === qId)
      swal({
        title: 'Are you sure to delete',
        text: `Are you sure to delete this question that '${q.question}'`,
        showCancelButton: true,
        reverseButtons: true,
        confirmButtonText: 'Confirm',
        confirmButtonColor: '#FF4312',
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
            confirmButtonColor: '#FF4312'
          })
          let id = props.match.params.id
          let questions = await instance.get(`/rooms/${id}/questions`)
            .then(resp => resp.data.data.allQuestion)
          questions = questions.filter(q => !q.isDelete && !q.isAnswer)
          props.setQuestions(questions)
        } else {
          swal({
            title: 'Failed',
            text: `Sorry, cannot delete question. please try again.`,
            type: 'warning',
            confirmButtonText: 'OK',
            confirmButtonColor: '#FF4312'
          })
        }
      })
    },
    onAnswerQuestion: props => (e) => {
      let selectQ = props.selectedQuestions
      swal({
        title: `Are you sure to answer the question${selectQ.length > 1 ? 's' : ''}`,
        text: `Are you sure to answer ${selectQ.length} question${selectQ.length > 1 ? 's' : ''}`,
        showCancelButton: true,
        reverseButtons: true,
        confirmButtonText: 'Confirm',
        confirmButtonColor: '#FF4312',
        customClass: 'Button',
        showLoaderOnConfirm: true,
        preConfirm: () => {
          return new Promise((resolve, reject) => {
            instance.put(`/questions/${selectQ[0]._id}/ans`, {
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
            confirmButtonColor: '#FF4312'
          })
          let id = props.match.params.id
          let questions = await instance.get(`/rooms/${id}/questions`)
            .then(resp => resp.data.data.allQuestion)
          questions = questions.filter(q => !q.isDelete && !q.isAnswer)
          props.setQuestions(questions)
          props.setSelected([])
        } else {
          swal({
            title: 'Failed',
            text: `Sorry, cannot answer question. please try again.`,
            type: 'warning',
            confirmButtonText: 'OK',
            confirmButtonColor: '#FF4312'
          })
        }
      })
    }
  })
)(OrgMonitor)

export default MonitorCompose
