import React from 'react'

const AskPage = props => (
  <div>
    <div className="container">
      <h1 className="text-center">#ASK</h1>
      <h4 className="text-center">Welcome to `ABC ROOM`</h4>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-block">
              <p className="text-right">Hola! Kanisorn S.</p>
              <div className="form-group">
                <textarea name="" id="" rows="5" className="form-control" />
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="" />
                  <p>I want to not show me on the question.</p>
                </label>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-secondary btn-block"
            role="button"
            style={{ marginTop: '15px' }}
          >
            JOIN ROOM
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default AskPage
