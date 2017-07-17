import React from 'react'
// import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'

const Brand = styled.div`
  display: block;
  margin: auto;
`

const Navbar = styled.nav`
  background: transparent;
  border-bottom: 2px solid orange;
  height: 60px;
`

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
    return (<Nav toggle={this.toggleNavbar} show={this.state.showNav} />)
  }
}

const Nav = props => (
  <Navbar className="navbar navbar-toggleable-md navbar-light bg-faded text-center">
    <Brand className="navbar-brand text-center">
      <h5>"ROOM name"</h5>
    </Brand>
    <div className="navbar-toggler-right">
        Hello, <b>ครู-อาจารย์</b><br />
        Welcome to #ASK <button>Logout</button>
    </div>
  </Navbar>
)

export default NavbarContainer
