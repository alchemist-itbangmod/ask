import React from 'react'
import {
  NavLink as Link
} from 'react-router-dom'

const Navbar = props => (
  <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Link className="navbar-brand" to="/">ASK</Link>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-item nav-link" exact to="/">Home</Link>
        <Link className="nav-item nav-link" to="/join">Join</Link>
        <Link className="nav-item nav-link" to="/ask">Ask</Link>
      </div>
    </div>
  </nav>
)

export default Navbar
