import React from 'react'
import { compose, withState, withHandlers } from 'recompose'
import localforage from '../../libs/localforage'

const Navbar = props => (
  <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
    <button
      className="navbar-toggler navbar-toggler-right"
      type="button"
      onClick={() => props.setOpen(!props.open)}
    >
      <span className="navbar-toggler-icon" />
    </button>
    <a className="navbar-brand" href="#">#ASK</a>
    <div
      className={'collapse navbar-collapse ' + (props.open ? 'show' : '')}
    >
      <span className="navbar-text">
        Navbar text with an inline element
      </span>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </div>
  </nav>
)

const NavbarCompose = compose(
  withState('open', 'setOpen', false)
)(Navbar)

export default NavbarCompose
