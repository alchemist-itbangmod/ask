import React from 'react'
import { NavLink as Link } from 'react-router-dom'

const NavOrganizer = props => (
  <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>

    <span className="navbar-brand">DEV Nav</span>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/organizer/login">login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/organizer/123/monitoring">monitoring</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/organizer/123/presentation">presentation</Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default NavOrganizer
