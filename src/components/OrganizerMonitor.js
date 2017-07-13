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
      questions: []
    }
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

  render() {
    return (
      <OrganizeMonitor questions={this.state.questions} onDelete={this.deleteQuestion.bind(this)} />
    )
  }
}

const OrganizeMonitor = props => (
  <div>
    <Nav />
    <NavOrganizer />
    <Div className="container-fluid">
      <div className="row">
        <div className="left-side col-sm-8">
          <div className="card">
            <div className="card-header text-center">
              <h4>Question</h4>
            </div>
            <ScrollBox className="list-group list-group-flush">
              {
                props.questions.map((q, index) => (
                  <li className="list-group-item" key={q._id}>
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
                ))
              }
            </ScrollBox>
          </div>
        </div>
        <div className="right-side col-sm-4">
          <form action="" method="post">
            <div className="title text-center">
              <h4>Selected Question</h4>
              ( MAX 5 )
            </div>
            <div>
              {
                [1, 2, 3, 4, 5].map(e => (
                  <Card className="card col-12 btn" key={e}>
                    Question {e}
                  </Card>
                ))
              }
            </div>
            <div className="btn-group col-12">
              <button type="button" className="btn btn-warning col-6">CLEAR</button>
              <button type="button" className="btn btn-primary col-6">SEND</button>
            </div>
          </form>
        </div>
      </div>
    </Div>
  </div>
)

export default OrganizeMonitorContainer
