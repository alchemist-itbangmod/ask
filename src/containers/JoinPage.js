import React from 'react'

import Input from '../components/Join/Input'

const JoinPage = props => (
  <div>
    <div className="container">
      <h1 className="text-center">#ASK</h1>
      <h4 className="text-center">Welcome to `ABC ROOM`</h4>
      <div className="row">
        <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
          <div className="form-group">
            <Input />
          </div>
          <button
            type="button"
            className="btn btn-secondary btn-block"
          >
            JOIN ROOM
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default JoinPage
