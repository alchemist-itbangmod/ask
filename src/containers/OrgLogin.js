import React from 'react'
import { compose, withState, withHandlers } from 'recompose'
import localforage from '../libs/localforage'
import instance from '../libs/axios'
import requireAuth from '../libs/requireAuth'

import { Container, Button } from '../styles/Global'

const OrgLogin = props => (
  <div>
    <Container className="container">
      <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
        <h1
          className="text-center"
          style={{
            color: 'white'
          }}
        >
          #ASK
        </h1>
        <h4
          className="text-center"
          style={{
            color: 'white',
            marginBottom: '20px'
          }}
        >
          ORGANIZE LOGIN
        </h4>
        <form onSubmit={e => props.onLogin(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control text-center"
              value={props.username}
              placeholder="Username"
              onChange={e => props.setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control text-center"
              value={props.password}
              placeholder="Password"
              onChange={e => props.setPassword(e.target.value)}
            />
          </div>
          <Button
            className="btn btn-secondary btn-block"
            type="submit"
          >
            LOGIN
          </Button>
        </form>
      </div>
    </Container>
  </div>
)

const OrgLoginCompose = compose(
  requireAuth('WITHOUT'),
  withState('username', 'setUsername', ''),
  withState('password', 'setPassword', ''),
  withHandlers({
    onLogin: props => async (e) => {
      e.preventDefault()
      let token = await instance.post(`/auth/login`, {
        email: props.username,
        password: props.password
      }).then(resp => resp.data.User.token)
      await localforage.setItem('_token', token)
      props.history.push('/organizer/')
    }
  })
)(OrgLogin)

export default OrgLoginCompose
