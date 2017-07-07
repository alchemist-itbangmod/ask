import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import FA from 'react-fontawesome'
import styled from 'styled-components'

class NavbarContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showNav: false
    }
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  toggleNavbar() {
    this.setState({ showNav: !this.state.showNav })
  }

  render() {
    return (<Navbar toggle={this.toggleNavbar} show={this.state.showNav} />)
  }
}

const HeadNav = styled.div`
  margin-top: 10px;
`

const Navbar = props =>
  <HeadNav>
    <div className="container">
      <div className="pull-right">
        <i className="fa fa-sign-out fa-2"></i>
      </div>
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
