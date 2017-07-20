import React from 'react'
import { compose, withHandlers } from 'recompose'
import localforage from '../../libs/localforage'

import {
  OrgNavbar,
  BrandName,
  LogoutButton
} from '../../styles/Navbar.js'

const Navbar = props => (
  <OrgNavbar className="navbar fixed-top navbar-toggleable-md navbar-light bg-faded">
    <BrandName className="navbar-brand" href="#">#ASK ORGANIZER</BrandName>
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
      props.history.push('/')
    }
  })
)(Navbar)

export default NavbarCompose
