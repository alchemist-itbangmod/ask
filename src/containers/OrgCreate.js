import React from 'react'
import { compose, withState, withHandlers, lifecycle } from 'recompose'
import instance from '../libs/axios'

import OrgNavbar from '../components/Navbar/OrgNavbar'
import BG from '../static/images/bg.png'

const OrgCreate = props => {
  <div>
    <OrgNavbar />
    <h1>Hello world</h1>
    <div className="container">
      <div className="row">
        <div className="card">
          <div className="card-block">
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">New room name</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter room name"
                />
              </div>
            </form>
            <button
              type="button"
              className="btn btn-success btn-block"
              >
              Sent
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default OrgCreate
