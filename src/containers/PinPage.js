import React from 'react'
import { compose, withState, withHandlers } from 'recompose'
import instance from '../libs/axios'
import localforage from '../libs/localforage'
import requireAsker from '../libs/requireAsker'

import { Container, Button } from '../styles/Global'

const PinPage = props => (
  <Container className="container">
    <div className="row">
      <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
        <h1
          className="text-center"
          style={{
            color: 'white'
          }}
        >
          #ASK
        </h1>
        <div
          className="card"
          style={{
            marginTop: 20,
            backgroundColor: 'rgba(255,255,255)',
            borderRadius: 10
          }}
        >
          <div className="card-block">
            <form onSubmit={e => props.submitPin(e)}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control text-center"
                  value={props.pin}
                  placeholder='Enter room PIN'
                  onChange={e => props.handlePin(e.target.value)}
                  style={{
                    backgroundColor: 'rgba(211,211,211,0.8)',
                    borderRadius: 10
                  }}
                />
              </div>
              {
                props.error
                ? (<p className="text-center">{props.error}</p>)
                : ''
              }
              <Button
                className="btn btn-secondary btn-block"
              >
                ENTER ROOM
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </Container>
)

const PinPageCompose = compose(
  requireAsker(),
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
      let data = await instance.get(`/rooms/code/${props.pin}`)
        .then(resp => resp.data)
      if (data.status) {
        localforage.setItem('roomId', data.data.roomId)
        props.history.push('/join')
      } else {
        props.setError(`Code is incorrect.`)
      }
    }
  })
)(PinPage)

export default PinPageCompose
