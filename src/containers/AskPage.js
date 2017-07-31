import React from 'react'
import { compose, withState, withHandlers, lifecycle } from 'recompose'
import requireAsker from '../libs/requireAsker'
import localforage from '../libs/localforage'
import instance from '../libs/axios'

import swal from 'sweetalert2'

import withNavbar from '../libs/withNavbar'
import { Container, Button } from '../styles/Global'

const AskPage = props => (
  <Container className="container">
    {/* <h2 className="text-center">
      {'Welcome to'}
    </h2>
    <h4 className="text-center">
      {`" ${props.roomName} "`}
    </h4> */}
    <div className="row justify-content-center">
      <div className="col-12 col-sm-8 col-md-6">
        <h2
          className='text-right text-white'
        >
          Question
        </h2>
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
              <Button
                type="submit"
                className="btn btn-secondary btn-block"
              >
                SEND
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <style>{`
      b{
        font-weight: bold;
      }  
    `}</style>
  </Container>
)

const PrimaryColor = '#1BB7BF'

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
          text: `Please enter question at lease 4 character.`,
          type: 'warning',
          confirmButtonText: 'OK',
          confirmButtonColor: PrimaryColor
        })
        return
      }
      let roomId = await localforage.getItem('roomId')
      let name = await localforage.getItem('name')

      swal({
        title: 'Sending question!',
        html: `Are you sure to sent this question:  <br /> <b> "${props.question}"</b>`,
        showCancelButton: true,
        reverseButtons: true,
        confirmButtonText: 'Confirm',
        confirmButtonColor: PrimaryColor,
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
          props.setQuestion('')
          swal({
            title: 'Success',
            html: `Your question <b>"${props.question}"</b> <br />has been sent!`,
            type: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: PrimaryColor
          })
        } else {
          swal({
            title: 'Closed',
            text: `Now. We can't to send the question.`,
            type: 'warning',
            confirmButtonText: 'OK',
            confirmButtonColor: PrimaryColor
          })
        }
      })
    }
  })
)(AskPage)

export default AskPageCompose
