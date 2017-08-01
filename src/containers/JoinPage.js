import React from 'react'
import { compose, withState, withHandlers, lifecycle } from 'recompose'
import localforage from '../libs/localforage'
import instance from '../libs/axios'
import requireAsker from '../libs/requireAsker'

import withNavbar from '../libs/withNavbar'
import { Container, Button } from '../styles/Global'

const JoinPage = props => (
  <Container className="container">
    <div className="row">
      <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
        <h2
          className="text-center"
          style={{
            color: 'white'
          }}
        >
          {`Welcome to`}
        </h2>
        <h4
          className="text-center text-white"
        >
          {`"${props.roomName}"`}
        </h4>
        <div
          className="card"
          style={{
            marginTop: 20,
            borderRadius: 10
          }}
        >
          <div className="card-block">
            <form onSubmit={e => props.joinRoom(e)}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control text-center"
                  placeholder="Enter asker name"
                  onChange={e => props.setName(e.target.value)}
                  value={props.name}
                  style={{
                    backgroundColor: 'rgba(211,211,211,0.8)',
                    borderRadius: 10
                  }}
                />
              </div>
              <Button
                type="submit"
                className="btn btn-secondary btn-block"
              >
                JOIN ROOM
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </Container>
)

const JoinPageCompose = compose(
  requireAsker(),
  withNavbar(),
  withState('name', 'setName', ''),
  withState('roomName', 'setRoomName', ''),
  lifecycle({
    async componentWillMount() {
      let roomId = await localforage.getItem('roomId')
      let roomName = await instance.get(`/rooms/${roomId}`).then(data => data.data.data.room.title)
      console.log(roomName)
      this.props.setRoomName(roomName)
    }
  }),
  withHandlers({
    joinRoom: props => async (e) => {
      e.preventDefault()
      await localforage.setItem('name', props.name)
      props.history.push('/ask')
    }
  })
)(JoinPage)

export default JoinPageCompose
