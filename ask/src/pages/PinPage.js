import React from 'react'

const PinPage = props => (
  <div className="container" style={{ paddingTop: 150 }}>
    <div className="row">
      <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
        <h1
          className="text-center"
          style={{
            color: 'black',
          }}
        >
          #ASK
        </h1>
        <div
          className="card"
          style={{
            marginTop: 20,
            backgroundColor: 'rgba(255,255,255)',
            borderRadius: 10,
          }}
        >
          <div className="container pt-4">
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control text-center"
                  placeholder="Enter room PIN"
                  style={{
                    backgroundColor: 'rgba(211,211,211,0.8)',
                    borderRadius: 10,
                  }}
                />
              </div>

              <button className="btn btn-primary btn-block .btn-primary:hover">
                ENTER ROOM
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default PinPage
