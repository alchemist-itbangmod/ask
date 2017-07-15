import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import swal from 'sweetalert2'
import Nav from './NavdevOrganizer'
import NavOrganizer from './NavbarOrganizer'

import socket from '../libs/withSocket'

const ButtonTrash = styled.button`
  cursor: pointer;
  float: right;
  display: block;
`

const Card = styled.button`
  padding: 20px;
  margin: 10px 0;
  display: block;
`
const Div = styled.div`
  margin-top: 20px;
`

const ScrollBox = styled.ul`
  display: block;
  height: 80vh;
  overflow-y: scroll;
`

class OrganizeMonitorContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      roomId: '59633cfd6f46821835ae4c64',
      questions: [],
      selectedQuestionsId: [],
      tab: 'tab1'
    }
    this.toggleQuestion = this.toggleQuestion.bind(this)
    this.switchTab = this.switchTab.bind(this)
  }

  async componentWillMount() {
    let pin = this.props.match.params.id
    let roomId = await axios.get(`http://localhost:3001/api/v1/rooms/code/${pin}`)
      .then(resp => resp.data.roomId)
    this.setState({ roomId })
    let questions = await axios.get(`http://localhost:3001/api/v1/questions?roomId=${this.state.roomId}`)
      .then(resp => resp.data)
    console.log(questions)
    this.setState({
      questions
    })

    socket.on('monitor', data => {
      console.log(data)
    })
  }

  async toggleQuestion(qid) {
    let questionsId = this.state.selectedQuestionsId
    let index = (questionsId.findIndex(_qid => _qid === qid))
    if (index > -1) {
      let slot1 = questionsId.slice(0, index)
      let slot2 = questionsId.slice(index + 1)
      questionsId = slot1.concat(slot2)
    } else if (questionsId.length > 4) {
      return
    } else {
      questionsId.push(qid)
    }
    // console.log(questionsId)
    this.setState({ selectedQuestionsId: questionsId })
  }

  deleteQuestion(e) {
    console.log(e.target.id)
    let questionObj = this.state.questions[e.target.id]
    swal({
      title: 'Are you sure to delete',
      text: `Are you sure to delete this question that '${questionObj.question}' to modurator`,
      showCancelButton: true,
      reverseButtons: true,
      confirmButtonText: 'Confirm',
      confirmButtonColor: '#FF4312',
      customClass: 'Button',
      showLoaderOnConfirm: true
      // preConfirm: () => {
      //   return new Promise((resolve, reject) => {
      //     axios.post(`http://localhost:3001/api/v1/questions/updateIsDelete`, {
      //       roomId: roomId,
      //       questionId: questionId
      //     }).then(data => {
      //       resolve(data.data)
      //     })
      //   })
      // }
    })
    // .then((data) => {
    //   if (data.status) {
    //     swal({
    //       title: 'Sucess',
    //       text: `You question '${this.state.question}' has been sent!`,
    //       type: 'success',
    //       confirmButtonText: 'OK',
    //       confirmButtonColor: '#FF4312'
    //     })
    //   } else {
    //     swal({
    //       title: 'Closed',
    //       text: `Now. We can't to send the question.`,
    //       type: 'warning',
    //       confirmButtonText: 'OK',
    //       confirmButtonColor: '#FF4312'
    //     })
    //   }
    // })
  }

  switchTab(e) {
    console.log('switch')
    let tab = e.target.getAttribute('data-tab')
    if (['tab1', 'tab2', 'tab3'].indexOf(tab) > -1) {
      this.setState({ tab })
    }
  }

  render() {
    return (
      <OrganizeMonitor
        questions={this.state.questions}
        toggleQuestion={this.toggleQuestion}
        selectedItem={this.state.selectedQuestionsId}
        onDelete={this.deleteQuestion.bind(this)}
        tab={this.state.tab}
        toggleTab={this.switchTab}
      />
    )
  }
}

const Tab = styled.li`
  padding: 0;
  margin: 0
`

const OrganizeMonitor = props => (
  <div>
    <nav className="bg-primary text-white">
      <div className="container">
        <div className="row">
          <div className="col-xs-3 btn navbar-brand">
            #ASK 2.0
          </div>
          <div className="btn bg-info col-xs-3" style={{ borderRadius: 0 }}>
            คำถามใหม่ <span style={{ background: '#aab2bd' }}className="badge badge-default">0</span>
          </div>
          <div className="col-3" style={{ padding: 5 }}>
            <button
              className="btn btn-success"
            >Load new question(s)
            </button>
          </div>
          <div className="text-right col-5">
            <div className="row">
              <div className="col-2" />
              <div className="col-6" style={{ marginTop: 10 }}>
                selected question <span className="badge badge-default">{ props.selectedItem.length }</span>
              </div>
              <div className="col-4" style={{ padding: 5 }}>
                <button
                  className="btn btn-success"
                >answer the Question
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div className="container" style={{ marginTop: 10 }}>
      <ul className="nav nav-tabs row" role="tablist">
        <Tab className="nav-item col-4">
          <a
            className={`nav-link h4 ${props.tab === 'tab1' ? 'active' : ''}`}
            onClick={(e) => props.toggleTab(e)}
            style={{ margin: 0 }}
            data-tab="tab1"
          >Question</a>
        </Tab>
        <Tab className="nav-item col-4">
          <a
            className={`nav-link h4 ${props.tab === 'tab2' ? 'active' : ''}`}
            data-tab="tab2"
            style={{ margin: 0 }}
            onClick={(e) => props.toggleTab(e)}
          >Answered question</a>
        </Tab>
        <Tab className="nav-item col-4">
          <a
            className={`nav-link h4 ${props.tab === 'tab3' ? 'active' : ''}`}
            data-tab="tab3"
            style={{ margin: 0 }}
            onClick={(e) => props.toggleTab(e)}
          >Deleted question</a>
        </Tab>
      </ul>
      <div className="tab-content">
        <div className={`tab-pane row ${props.tab === 'tab1' ? 'active' : ''}`} >
          <div classNAme="card" style={{ background: 'lightgray' }}>
            <ScrollBox className="list-group list-group-flush">
              {
                props.questions.map((q, index) =>
                  (q.isDelete || q.isAnswer)
                  ? ('') : (
                    <li
                      className={`list-group-item ${props.selectedItem.indexOf(q._id) > -1 ? 'selected' : ''}`}
                      onClick={() => props.toggleQuestion(q._id)} key={q._id}
                    >
                      <div className="col-10">
                        { q.question }
                      </div>
                      <div className="col-2">
                        <ButtonTrash className="card"
                          onClick={props.onDelete}>
                          <i
                            id={index}
                            className="fa fa-trash fa-2x"
                            aria-hidden="true"
                          />
                        </ButtonTrash>
                      </div>
                    </li>
                  )
                )
              }
            </ScrollBox>
          </div>
        </div>
        <div className={`tab-pane row ${props.tab === 'tab2' ? 'active' : ''}`} >
          <div classNAme="card" style={{ background: 'lightgray' }}>
            <ScrollBox className="list-group list-group-flush">
              {
                props.questions.map((q, index) =>
                  (q.isAnswer)
                   ? (
                    <li
                      className={`list-group-item`}
                    >
                      { q.question }
                    </li>
                  ) : ('')
                )
              }
            </ScrollBox>
          </div>
        </div>
        <div className={`tab-pane row ${props.tab === 'tab3' ? 'active' : ''}`} >
          <div classNAme="card" style={{ background: 'lightgray' }}>
            <ScrollBox className="list-group list-group-flush">
              {
                props.questions.map((q, index) =>
                  (q.isDelete)
                  ? (
                    <li
                      className={`list-group-item`}
                    >
                      { q.question }
                    </li>
                  ) : ('')
                )
              }
            </ScrollBox>
          </div>
        </div>
      </div>
    </div>
    <style>{`
      .selected{
        background: #1f77ff;
        color: white;
      }
    `}</style>
  </div>
)

export default OrganizeMonitorContainer
