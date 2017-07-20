import React from 'react'
import { compose, withState, withHandlers, lifecycle } from 'recompose'
import localforage from '../libs/localforage'
import instance from '../libs/axios'
import requireAsker from '../libs/requireAsker'

import Navbar from '../components/Navbar/Navbar'

const JoinPage = props => (
  <div>
    <Navbar {...props} />
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
          <h4
            className="text-center"
            style={{
              color: 'white',
              marginTop: 50
            }}
          >
            {`Welcome to ${props.roomName}.`}
          </h4>
          <div className="card">
            <div className="card-block">
              <form onSubmit={e => props.joinRoom(e)}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control text-center"
                    placeholder="Enter asker name"
                    onChange={e => props.setName(e.target.value)}
                    value={props.name}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-secondary btn-block"
                >
                  JOIN ROOM
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const JoinPageCompose = compose(
  requireAsker(),
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
