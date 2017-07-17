import React from 'react'
import { compose, withState, withHandlers } from 'recompose'
import localforage from '../libs/localforage'

import Navbar from '../components/Navbar/Navbar'

const JoinPage = props => (
  <div>
    <Navbar />
    <div className="container">
      <h4 className="text-center">Welcome to `ABC ROOM`</h4>
      <div className="row">
        <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
          <form onSubmit={e => props.joinRoom(e)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control text-center"
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
)

const JoinPageCompose = compose(
  withState('name', 'setName', ''),
  withHandlers({
    joinRoom: props => async (e) => {
      e.preventDefault()
      await localforage.setItem('name', props.name)
      props.history.push('/ask')
    }
  })
)(JoinPage)

export default JoinPageCompose
