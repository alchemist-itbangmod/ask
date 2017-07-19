import React from 'react'
import { compose, withState, withHandlers } from 'recompose'
import localforage from '../libs/localforage'
import instance from '../libs/axios'
import requireAuth from '../libs/requireAuth'

const OrgLogin = props => (
  <div>
    <div className="container">
      <h1 className="text-center">ORGANIZER</h1>
      <h2 className="text-center">LOGIN</h2>
      <form onSubmit={e => props.onLogin(e)}>
        <div className="form-group">
          <label htmlFor="">Username:</label>
          <input
            type="text"
            className="form-control"
            value={props.username}
            onChange={e => props.setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Password:</label>
          <input
            type="password"
            className="form-control"
            value={props.password}
            onChange={e => props.setPassword(e.target.value)}
          />
        </div>
        <button
          className="btn btn-secondary btn-block"
          type="submit"
        >
          LOGIN
        </button>
      </form>
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
