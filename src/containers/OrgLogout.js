import React from 'react'
import { compose, lifecycle } from 'recompose'
import localforage from '../libs/localforage'

const Logout = props => (<div />)

const LogoutCompose = compose(
  lifecycle({
    async componentWillMount() {
      await localforage.clear()
      this.props.history.push('/organizer/')
    }
  })
)(Logout)

export default LogoutCompose
