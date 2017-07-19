import React from 'react'
import { compose, withState, withHandlers, lifecycle } from 'recompose'
import instance from '../libs/axios'

import OrgNavbar from '../components/Navbar/OrgNavbar'
import BG from '../static/images/bg.png'

const OrgCreate = props => {
  <div>
    <OrgNavbar />
    <h1>Hello world</h1>
    <div className="container">
      <div className="row">
        <div className="card">
          <div className="card-block">
            <div className="col-sm-10">
              <form>
                <div className="form-group">
                  <label for='exampleInputEmail1'>New room name</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter room name"
                  />
                </div>
              </form>
            </div>
            <div className="col-sm-2">
              <div className="btn-group" data-toggle="buttons">
                <label className="btn btn-primary active">
                  <input
                    type="radio"
                    name="options"
                    id="option1"
                    autoComplete='off'
                    checked
                  />
                  OPEN
                </label>
                <label className="btn btn-primary">
                  <input
                    type="radio"
                    name="options"
                    id="option2"
                    autoComplete='off'
                  />
                  CLOSE
                </label>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-success btn-block"
              >
              Sent
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
}

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
    onSending: props => (e) => {
      console.log(e.target.childNodes)
    },
    onSelect: props => (e) => {
      console.log(e.target.childNodes)
    }
  })
)(OrgCreate)

export default CreateConpose
