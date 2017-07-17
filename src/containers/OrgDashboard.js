import React from 'react'

import OrgNavbar from '../components/Navbar/OrgNavbar'

import BG from '../static/images/bg.png'

const OrgDashboard = props => (
  <div>
    <OrgNavbar />
    <div className="container">
      <h1 className="text-center">DASHBOARD</h1>
      <div className="row">
        {
          [1, 2, 3, 4, 5].map(e => (
            <div className="col-12 col-md-6" key={e}>
              <div
                className="card card-inverse mb-3 text-center"
              >
                <img className="card-img" src={BG} style={{ height: '190px' }} alt="Card image" />
                <div
                  className="card-img-overlay"
                  style={{
                    backgroundColor: 'rgba(0,0,0,.7)',
                    borderColor: '#333',
                    borderRadius: 'calc(.25rem - 1px)' }}
                >
                  <h3 className="card-title">Special title treatment</h3>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="btn btn-secondary">Manage</a>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  </div>
)
export default OrgDashboard
