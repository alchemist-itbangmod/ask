import React from 'react'
import { compose, withState, withHandlers, lifecycle } from 'recompose'
import localforage from '../libs/localforage'
import instance from '../libs/axios'
import requireAuth from '../libs/requireAuth'

import { Button } from '../styles/Global'

const title = `#ASK 2.0 | Organize`

const OrgLogin = props => (
  <div>
    <div className="container">
      <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
        <h1 className="text-center" style={{ color: 'white', marginBottom: '20px' }}>
          #ASK
        </h1>
        <h5
          className="text-center"
          style={{
            color: 'white',
            marginBottom: '40px',
            fontWeight: '300'
          }}
        >
          ORGANIZE LOGIN
        </h5>
        <form onSubmit={e => props.onLogin(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control text-center"
              value={props.username}
              placeholder="Username"
              style={{ borderRadius: 10 }}
              onChange={e => props.setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control text-center"
              value={props.password}
              placeholder="Password"
              style={{ borderRadius: 10 }}
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
    </div>
  </div>
)

const OrgLoginCompose = compose(
  requireAuth('WITHOUT'),
  withState('username', 'setUsername', ''),
  withState('password', 'setPassword', ''),
  withHandlers({
    onLogin: props => async (e) => {
      e.preventDefault()
      let user = await instance.post(`/auth/login`, {
        email: props.username,
        password: props.password
      }).then(resp => {
        console.log(resp)
        return resp.data.user
      })
      await localforage.setItem('_token', user.token)
      props.history.push('/organizer/')
    }
  }),
  lifecycle({
    componentWillMount() {
      document.title = title
    }
  })
)(OrgLogin)

export default OrgLoginCompose
