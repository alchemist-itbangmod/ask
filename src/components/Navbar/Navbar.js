import React from 'react'
import { compose, withHandlers } from 'recompose'
import localforage from '../../libs/localforage'
import { NavLink as Link } from 'react-router-dom'

import {
  UserNavbar,
  LogoutButton
} from '../../styles/Navbar.js'

const Navbar = props => (
  <UserNavbar className="navbar fixed-top navbar-toggleable-md navbar-light bg-faded">
    <Link style={{ flex: 3 }} className="navbar-brand" to="/">#ASK</Link>
    <LogoutButton
      className="btn btn-danger point"
      onClick={() => props.logout()}
      style={{
        borderRadius: 10
      }}
    >LOGOUT</LogoutButton>
  </UserNavbar>
)

const NavbarCompose = compose(
  withHandlers({
    logout: props => () => {
      localforage.clear()
      props.history.push('/')
    }
  })
)(Navbar)

export default NavbarCompose
