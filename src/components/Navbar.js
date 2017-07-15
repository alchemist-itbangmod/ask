import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'
import localforage from 'localforage'

class NavbarContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showNav: false
    }
    this.signOut = this.signOut.bind(this)
  }

  signOut() {
    localforage.clear()
    this.props.history.push('/')
  }

  render() {
    return <Navbar signOut={this.signOut} show={this.state.showNav} />
  }
}

const HeadNav = styled.div`
  margin-top: 10px;
`

const SignOutButton = styled.button`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 10px;
  background: transparent;
`

const Navbar = props =>
  <HeadNav>
    <div className="container">
      <SignOutButton
        className="pull-right"
        onClick={() => props.signOut()}
      >
        <i className="fa fa-sign-out fa-2"></i>
      </SignOutButton>
      <div className="text-center">
        <h5>
          Room name
        </h5>
      </div>
    </div>
  </HeadNav> 
  /*<nav className="navbar fixed-top navbar-toggleable-md navbar-light bg-faded">
    <div className="container-fluid">
      <div className="col-sm-10">
        <h5>Room name</h5>
      </div>
      <div className="col-sm-1">
        <i className="fa fa-sign-out"></i>
      </div>
    </div>
  </nav>*/

export default NavbarContainer
