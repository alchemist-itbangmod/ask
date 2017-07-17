import React from 'react'

import PinInput from '../components/Pin'

const PinPage = props => (
  <div>
    <div className="container">
      <h1 className="text-center">#ASK</h1>
      <div className="row">
        <div className="col-12">
          <div className="form-group">
            <PinInput />
          </div>
          <button
            type="button"
            className="btn btn-secondary btn-block"
            role="button"
          >
            ENTER ROOM
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default PinPage
