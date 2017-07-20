import React from 'react'
import { compose, withState, withHandlers, lifecycle } from 'recompose'
import instance from '../libs/axios'
import requireAuth from '../libs/requireAuth'

import OrgNavbar from '../components/Navbar/OrgNavbar'
import BG from '../static/images/bg.jpg'

const OrgDashboard = props => (
  <div>
    { console.log(props.rooms) }
    <OrgNavbar {...props} />
    <div className="container">
      <div className="row">
        {
          props.rooms.map(room => (
            <div className="col-12 col-md-6" key={room._id}>
              <div
                className="card card-inverse mb-3 text-center"
              >
                <img className="card-img" src={BG} style={{ height: '190px' }} alt="Room=" />
                <div
                  className="card-img-overlay"
                  style={{
                    backgroundColor: 'rgba(0,0,0,.7)',
                    borderColor: '#333',
                    borderRadius: 'calc(.25rem - 1px)' }}
                >
                  <h3 className="card-title">{ room.title }</h3>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <button onClick={() => props.history.push(`/organizer/${room._id}/monitor`)} className="btn btn-secondary">Manage</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  </div>
)

const DashboardCompose = compose(
  requireAuth(),
  withState('rooms', 'setRooms', []),
  lifecycle({
    async componentDidMount() {
      let rooms = await instance('/rooms')
        .then(resp => resp.data)
      this.props.setRooms(rooms.data.allRoom)
    }
  }),
  withHandlers({
    onSelect: props => (e) => {
      console.log(e.target.childNodes)
    }
  })
)(OrgDashboard)

export default DashboardCompose
