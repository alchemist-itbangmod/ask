import React from 'react'
import styled from 'styled-components'
import swal from 'sweetalert2'
import Navbar from './Navbar'
import axios from 'axios'

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
      question: ''
    }
    this.sendQuestion = this.sendQuestion.bind(this)
    this.handleQuestion = this.handleQuestion.bind(this)
  }

  sendQuestion() {
    if (this.state.question.length < 4) {
      return
    }

    swal({
      title: 'Are you sure to sent',
      text: `Are yoo sure to sent this question that '${this.state.question}' to modurator`,
      showCancelButton: true,
      reverseButtons: true,
      confirmButtonText: 'Confirm',
      confirmButtonColor: '#FF4312',
      customClass: 'Button',
      showLoaderOnConfirm: true,
      preConfirm: () => {
        return new Promise((resolve, reject) => {
          axios.post(`http://localhost:3001/api/v1/questions/send`, {
            roomId: '5960a0a1e327597fe42be49d',
            name: 'KS',
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

  handleQuestion(q) {
    this.setState({
      question: q
    })
  }

  render() {
    const action = {
      sendQuestion: this.sendQuestion,
      handleQuestion: this.handleQuestion
    }
    return (<AskPage {...action} />)
  }
}

const AskPage = props => (
  <div>
    <Navbar />
    <div className="container">
      <div className="text-center">
        <Box className="form-group">
          <label htmlFor="exampleTextarea">"Hi! เขมนิจ"</label>
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

export default AskPageContainer
