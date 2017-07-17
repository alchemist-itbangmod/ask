import React from 'react'
import styled from 'styled-components'
import swal from 'sweetalert2'
import localforage from 'localforage'

// HOC
import repuireAsker from '../libs/requireAsker'

import Navbar from './Navbar'
import axios from 'axios'

import socket from '../libs/withSocket'

// style.css component
const SentButton = styled.button`
  background-color: #FF4312;
  border: 0;
  border-radius: 22px;
  padding-top: 8px;
  padding-bottom: 8px; 
`

const Box = styled.div`
  margin-top: 150px;
  border-radius: 10px;
`

class AskPageContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: '',
      name: '',
      pin: '',
      roomId: ''
    }
    this.sendQuestion = this.sendQuestion.bind(this)
    this.handleQuestion = this.handleQuestion.bind(this)
    this.componentWillMount = this.componentWillMount.bind(this)
  }

  async sendQuestion() {
    if (this.state.question.length < 4) {
      return
    }

    let roomId = await localforage.getItem('roomId')
    let name = await localforage.getItem('name')

    swal({
      title: 'Are you sure to sent',
      text: `Are you sure to sent this question that '${this.state.question}' to modurator`,
      showCancelButton: true,
      reverseButtons: true,
      confirmButtonText: 'Confirm',
      confirmButtonColor: '#FF4312',
      customClass: 'Button',
      showLoaderOnConfirm: true,
      preConfirm: () => {
        return new Promise((resolve, reject) => {
          axios.post(`http://localhost:3001/api/v1/questions/send`, {
            roomId: this.state.roomId,
            name: this.state.name,
            roomId: this.state.roomId,
            name: this.state.name,
            question: this.state.question
          }).then(data => {
            resolve(data.data)
          })
        })
      }
    }).then((data) => {
      if (data.status) {
        swal({
          title: 'Sucess',
          text: `You question '${this.state.question}' has been sent!`,
          type: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#FF4312'
        })
      } else {
        swal({
          title: 'Closed',
          text: `Now. We can't to send the question.`,
          type: 'warning',
          confirmButtonText: 'OK',
          confirmButtonColor: '#FF4312'
        })
      }
    })
  }

  async handleQuestion(q) {
    this.setState({
      question: q
    })
    socket.emit('monitor', { status: this.state.question })
  }

  async componentWillMount() {
    let pin = await localforage.getItem(`pin`)
    let name = await localforage.getItem(`name`)
    let id = await fetch(`http://localhost:3001/api/v1/rooms/code/${pin}`)
      .then(data => data.json())
      .then(data => data.id)
    this.setState({ pin })
    this.setState({ name })
    this.setState({ roomId: id })
  }

  render() {
    const action = {
      sendQuestion: this.sendQuestion,
      handleQuestion: this.handleQuestion
    }
    if (this.props.name === '' || this.props.pin === '') {
      return <div />
    }
    return (<AskPage
      {...action}
      {...this.props}
      name={this.props.name}
    />)
  }
}

const AskPage = props => (
  <div>
    <Navbar {...props} />
    <div className="container">
      <div className="text-center">
        <Box className="form-group">
          <label htmlFor="exampleTextarea">"Hi! {props.name}"</label>
          <textarea
            className="form-control"
            placeholder="Question here"
            onChange={(e) => props.handleQuestion(e.target.value)}
            rows="5"
          />
        </Box>
        <SentButton
          type="button"
          className="btn btn-primary btn-sm btn-block"
          onClick={() => props.sendQuestion()}
        >Sent</SentButton>
      </div>
    </div>
  </div>
)

export default repuireAsker()(AskPageContainer)
