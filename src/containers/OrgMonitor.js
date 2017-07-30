import React from 'react'
import { compose, withState, withHandlers, lifecycle } from 'recompose'
import { QuestionCard, Div, Question } from '../styles/Global'
import swal from 'sweetalert2'
// import OrgSetting from './OrgSetting'
import OrgNavbar from '../components/Navbar/OrgNavbar'

import instance from '../libs/axios'
import requireAuth from '../libs/requireAuth'
import withNavbar from '../libs/withNavbar'
import socket from '../libs/socket'

const OrgMonitor = props => (
  <Div>
    <OrgNavbar {...props} />
    {/* <OrgSetting {...props} /> */}
    <div className="card">
      <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs justify-content-end">
          <li className="nav-item">
            <a
              className={'nav-link ' + (props.tab === 'ALL' ? 'active' : '')}
              onClick={() => props.setTab('ALL')}
            >
              {'ALL'}
            </a>
          </li>
          <li className="nav-item">
            <a
              className={'nav-link ' + (props.tab === 'CREATE_ROOM' ? 'active' : '')}
              onClick={() => props.setTab('CREATE_ROOM')}
            >
              {'CREATE ROOM'}
            </a>
          </li>
        </ul>
      </div>
      <div className="card-block">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center h2 ">
              Room name
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <div className="card">
                <div className="card-block">
                  <button
                    className="btn btn-info pull-right"
                    onClick={props.fetchQuestions}
                  >
                    <i className="fa fa-refresh" />
                    {` Refresh (${props.remain})`}
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
                    <div className="col-8">
                      <h2>{'Selected'}</h2>
                    </div>
                    <div className="col-2">
                      <button
                        className="btn btn-success"
                        onClick={props.onAnswerQuestion}
                      >
                        {'SEND'}<span className="badge badge-default">{props.selectedQuestions.length}</span>
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
      </div>
    </div>
  </Div>
)

const MonitorCompose = compose(
  requireAuth(),
  withNavbar(),
  withState('tab', 'setTab', 'ALL'),
  withState('questions', 'setQuestions', []),
  withState('remain', 'setRemain', 0),
  withState('roomId', 'setRoomId', ''),
  withState('selectedQuestions', 'setSelected', []),
  lifecycle({
    async componentWillMount() {
      let id = this.props.match.params.id
      let questions = await instance.get(`/rooms/${id}/questions`)
        .then(resp => resp.data.data.allQuestion)
        // console.log(questions)
      questions = questions.filter(q => !q.isDelete && !q.isAnswer).reverse()
      this.props.setQuestions(questions)
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
