import React from 'react'
import { compose, withState, withHandlers, lifecycle } from 'recompose'
import instance from '../libs/axios'

import OrgNavbar from '../components/Navbar/OrgNavbar'
import BG from '../static/images/bg.png'


const OrgCreate = props => (
  <div>
    <OrgNavbar />
    <div className="container">
      <div className="container">
        <div className="card">
          <div className="card-block">
            <form onSubmit={() => props.onSending}>
              <div className="row">
                <h1>Create Room</h1>
                <div className="col-10">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter room name"
                    />
                  </div>
                </div>
                <div className="col-2">
                  <div className="form group">
                    <div className="btn-group" role="group" aria-label="Basic example">
                      <button
                        type="button"
                        className={'btn btn-secondary ' + (props.isOpen ? 'active' : '')}
                        onClick={() => props.setRoomOpen(true)}
                      >
                        {'Open'}
                      </button>
                      <button
                        type="button"
                        className={'btn btn-secondary ' + (!props.isOpen ? 'active' : '')}
                        onClick={() => props.setRoomOpen(false)}
                      >
                        {'Close'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-success btn-block"
                >
                Sent
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const CreateConpose = compose(
  withState('roomName', 'setRoomName', ''),
  withState('isOpen', 'setRoomOpen', false),
  lifecycle({
    async componentsDidMount() {
      let newRooms = await instance('/rooms/create')
        .then(resp => resp.data)
      this.props.setRoomName(newRooms.data.title)
      let isOpen = await instance('/rooms/create')
        .then(resp => resp.data)
      this.props.setRoomOpen(isOpen.data.openSending)
    }
  }),
  withHandlers({
    onSending: props => async (e) => {
      console.log(e.target.childNodes)
    }
  })
)(OrgCreate)

export default CreateConpose
