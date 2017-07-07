import React from 'react'

class IndexPage extends React.Component {
  render() {
    return (
      <div className="col-sm-8 offset-sm-2">
        <div className="card text-center">
          <div className="card-block">
            <h2 className="card-title">ASK</h2>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control text-center"
                  placeholder="Enter the PIN"
                />
                <small className="form-text text-muted">
                  Enter the room's PIN to join conferrence.
                </small>
              </div>
            </form>
            <a href="#" className="btn btn-outline-secondary">
              JOIN ROOM
            </a>
          </div>
        </div>
        <style jsx>{`
          .card {
            margin-top: 50px;
          }
        `}</style>
      </div>
    )
  }
}
export default IndexPage
