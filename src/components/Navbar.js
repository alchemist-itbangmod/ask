import React from 'react'
import { NavLink as Link } from 'react-router-dom'

class NavbarContainer extends React.Componsent {
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
    return <Navbar toggle={this.toggleNavbar} show={this.state.showNav} />
  }
}

const Navbar = props =>
  <nav className="navbar fixed-top navbar-toggleable-md navbar-light bg-faded">
    <button
      className="navbar-toggler navbar-toggler-right"
      type="button"
      onClick={() => props.toggle()}
    >
      <span className="navbar-toggler-icon" />
    </button>
    <Link className="navbar-brand" to="/">
      ASK
    </Link>
    <div className={'collapse navbar-collapse ' + (props.show ? 'show' : '')}>
      <div className="navbar-nav">
        <Link className="nav-item nav-link" exact to="/">
          Home
        </Link>
        <Link className="nav-item nav-link" to="/join">
          Join
        </Link>
        <Link className="nav-item nav-link" to="/ask">
          Ask
        </Link>
      </div>
    </div>
  </nav>

export default NavbarContainer
