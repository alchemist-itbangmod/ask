import React from 'react'
import { compose, withState, withHandlers } from 'recompose'
import instance from '../libs/axios'
import localforage from '../libs/localforage'

const PinPage = props => (
  <div>
    <div className="container">
      <h1 className="text-center">#ASK</h1>
      <div className="row">
        <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
          <form onSubmit={e => props.submitPin(e)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control text-center"
                value={props.pin}
                onChange={e => props.handlePin(e.target.value)}
              />
            </div>
            {
              props.error
              ? (<p className="text-center">{props.error}</p>)
              : ''
            }
            <button
              type="submit"
              className="btn btn-secondary btn-block"
            >
              ENTER ROOM
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
)

const PinPageCompose = compose(
  withState('pin', 'setPin', ''),
  withState('error', 'setError', ''),
  withHandlers({
    handlePin: props => (pin) => {
      if (pin.length <= 4) {
        props.setPin(pin)
        props.setError(``)
      } else {
        props.setError(`Can't enter more than 4 character.`)
      }
    },
    submitPin: props => async (e) => {
      e.preventDefault()
      let data = await instance(`/rooms/code/${props.pin}`)
        .then(resp => resp.data)
      localforage.setItem('roomId', data.data.roomId)
      props.history.push('/join')
    }
  })
)(PinPage)

export default PinPageCompose
