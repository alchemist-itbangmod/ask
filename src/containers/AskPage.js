import React from 'react'
import { compose, withState, withHandlers, lifecycle } from 'recompose'
import requireAsker from '../libs/requireAsker'
import localforage from '../libs/localforage'
import instance from '../libs/axios'

import swal from 'sweetalert2'

import withNavbar from '../libs/withNavbar'
import { Container } from '../styles/Global'

const AskPage = props => (
  <Container className="container">
    <h2 className="text-center">
      {'Welcome to'}
    </h2>
    <h4 className="text-center">
      {`" ${props.roomName} "`}
    </h4>
    <div className="row">
      <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
        <form onSubmit={e => props.sendQuestion(e)}>
          <div className="card">
            <div className="card-block">
              <p className="text-right">Hola!: {props.name}.</p>
              <div className="form-group">
                <textarea
                  rows="5"
                  className="form-control"
                  onChange={e => props.setQuestion(e.target.value)}
                  value={props.question}
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-secondary btn-block"
            style={{ marginTop: '15px' }}
          >
            JOIN ROOM
          </button>
        </form>
      </div>
    </div>
  </Container>
)

const AskPageCompose = compose(
  requireAsker(),
  withNavbar(),
  withState('question', 'setQuestion', ''),
  withState('roomName', 'setRoomName', ''),
  withState('name', 'setName', ''),
  lifecycle({
    async componentWillMount() {
      let roomId = await localforage.getItem('roomId')
      let roomName = await instance.get(`/rooms/${roomId}`).then(data => data.data.data.room.title)
      let name = await localforage.getItem('name')
      this.props.setName(name)
      this.props.setRoomName(roomName)
    }
  }),
  withHandlers({
    sendQuestion: props => async (e) => {
      e.preventDefault()

      if (props.question.length <= 4) {
        swal({
          title: 'Warning!',
          text: `Please. Enter question for than 4 character.`,
          type: 'warning',
          confirmButtonText: 'OK',
          confirmButtonColor: '#FF4312'
        })
        return
      }
      let roomId = await localforage.getItem('roomId')
      let name = await localforage.getItem('name')

      swal({
        title: 'Are you sure to sent',
        text: `Are you sure to sent this question that '${props.question}' to modurator`,
        showCancelButton: true,
        reverseButtons: true,
        confirmButtonText: 'Confirm',
        confirmButtonColor: '#FF4312',
        customClass: 'Button',
        showLoaderOnConfirm: true,
        preConfirm: () => {
          return new Promise((resolve, reject) => {
            instance.post(`/questions`, {
              roomId: roomId,
              name: name,
              question: props.question
            }).then(data => {
              resolve(data.data)
            })
          })
        }
      }).then((data) => {
        if (data.status) {
          swal({
            title: 'Sucess',
            text: `You question '${props.question}' has been sent!`,
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
  })
)(AskPage)

export default AskPageCompose
