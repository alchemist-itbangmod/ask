import React from 'react'

const AskPage = props => (
  <div>
    <div className="container">
      <h1 className="text-center">#ASK</h1>
      <h4 className="text-center">Welcome to `ABC ROOM`</h4>
      <div className="row">
        <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
          <div className="card">
            <div className="card-block">
              <p className="text-right">Hola! Kanisorn S.</p>
              <div className="form-group">
                <textarea id="" rows="5" className="form-control" />
              </div>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-secondary btn-block"
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
