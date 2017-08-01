import React from 'react'
import { compose, withState, lifecycle } from 'recompose'

import requireAuth from '../libs/requireAuth'

import OrgNavbar from '../components/Navbar/OrgNavbar'

import OrgAllRoom from '../components/OrgAllRoom'
import OrgCreateRoom from '../components/OrgCreateRoom'

const title = `#ASK 2.0 | Dashboard`

const OrgDashboard = props => (
  <div>
    { console.log(props.rooms) }
    <OrgNavbar {...props} />
    <div className="container">
      <div className="card">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs justify-content-end">
            <li className="nav-item">
              <a
                className={'nav-link ' + (props.tab === 'ALL' ? 'active' : 'point')}
                onClick={() => props.setTab('ALL')}
              >
                {'ALL'}
              </a>
            </li>
            <li className="nav-item">
              <a
                className={'nav-link ' + (props.tab === 'CREATE_ROOM' ? 'active' : 'point')}
                onClick={() => props.setTab('CREATE_ROOM')}
              >
                {'CREATE ROOM'}
              </a>
            </li>
          </ul>
        </div>
        <div className="card-block">
          {
            (props.tab === 'ALL')
            ? (<OrgAllRoom {...props} />)
            : (<OrgCreateRoom {...props} />)
          }
        </div>
      </div>
    </div>
  </div>
)

const DashboardCompose = compose(
  requireAuth(),
  withState('tab', 'setTab', 'ALL'),
  lifecycle({
    componentWillMount() {
      document.title = title
    }
  })
)(OrgDashboard)

export default DashboardCompose
