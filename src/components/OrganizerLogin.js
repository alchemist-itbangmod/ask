import React from 'react'
import { compose, withHandlers } from 'recompose'
// import io from '../libs/withSocket'

const OrganizerLogin = props =>
  <div>
    <h1>Login Form</h1>
    <button className="btn btn-primary" onClick={() => props.testSocket()}>
      Test Socket
    </button>
  </div>

const OrganizerLoginCompose = compose(
  withHandlers({
    testSocket: props => () => {
      console.log('Hi')
      // io.emit('hello-world', { data: 'hi' })
    }
  })
)(OrganizerLogin)

export default OrganizerLoginCompose
