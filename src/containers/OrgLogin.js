import React from 'react'

const OrgLogin = props => (
  <div>
    <div className="container">
      <h1 className="text-center">ORGANIZER</h1>
      <h2 className="text-center">LOGIN</h2>
      <div className="form-group">
        <label htmlFor="">Username:</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="">Password:</label>
        <input type="password" className="form-control" />
      </div>
      <button className="btn btn-secondary btn-block">
        LOGIN
      </button>
    </div>
  </div>
)

export default OrgLogin
