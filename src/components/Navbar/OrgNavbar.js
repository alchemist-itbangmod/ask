import React from 'react'
import { compose, withHandlers } from 'recompose'
import localforage from '../../libs/localforage'
import { NavLink as Link } from 'react-router-dom'

import {
  OrgNavbar,
  LogoutButton
} from '../../styles/Navbar.js'

const Navbar = props => (
  <OrgNavbar className="navbar fixed-top navbar-toggleable-md navbar-light bg-faded">
    <Link to='/organizer' className="navbar-brand" style={{ flex: 3 }}>#ASK ORGANIZER</Link>
    <LogoutButton
      className="btn btn-danger"
      onClick={() => props.logout()}
    >LOGOUT</LogoutButton>
  </OrgNavbar>
)

const NavbarCompose = compose(
  withHandlers({
    logout: props => () => {
      localforage.clear()
      props.history.push('/organizer')
    }
  })
)(Navbar)

export default NavbarCompose
