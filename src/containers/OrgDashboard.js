import React from 'react'
import { compose, withState, withHandlers } from 'recompose'
import instance from '../libs/axios'

import OrgNavbar from '../components/Navbar/OrgNavbar'
import BG from '../static/images/bg.png'

const OrgDashboard = props => (
  <div>
    <OrgNavbar />
    <div className="container">
      {
        console.log(props)
      }
      <div className="row">
        {
          [1, 2, 3, 4, 5].map(e => (
            <div className="col-12 col-md-6" key={e}>
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
                  <h3 className="card-title">Special title treatment</h3>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <button className="btn btn-secondary">Manage</button>
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
  withState('allRoom', 'getAllRoom', () => {
    return instance('/rooms')
      .then(resp => resp.data)
  }),
  withState('user', 'getUser', ''),
  withState('selected', 'setSel', true),
  withState('selectedRoom', 'setSelected', []),
  withHandlers({
    onSelect: props => (e) => {
      console.log(e.target.childNodes)
      props.setSel(!props.selected)
    },
    componentWillMount: props => (e) => {
      console.log('test')
    }
  })
)(OrgDashboard)
export default DashboardCompose
