import React from 'react'
import { compose, withState } from 'recompose'
import { Div } from '../styles/Global'
// import OrgSetting from './OrgSetting'
import OrgNavbar from '../components/Navbar/OrgNavbar'

import OrgRoomMornitor from '../components/OrgMonitor'

import requireAuth from '../libs/requireAuth'
import withNavbar from '../libs/withNavbar'

const OrgMonitor = props => (
  <Div>
    <OrgNavbar {...props} />
    {/* <OrgSetting {...props} /> */}
    <div className="container">
      <div className="card">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs justify-content-end">
            <li className="nav-item">
              <a
                className={'nav-link ' + (props.tab === 'IN_QUEUE' ? 'active' : '')}
                onClick={() => props.setTab('IN_QUEUE')}
              >
                {'IN_QUEUE'}
              </a>
            </li>
            <li className="nav-item">
              <a
                className={'nav-link ' + (props.tab === 'SETTING' ? 'active' : '')}
                onClick={() => props.setTab('SETTING')}
              >
                {'SETTING'}
              </a>
            </li>
            <li className="nav-item">
              <a
                className={'nav-link ' + (props.tab === 'ANALYST' ? 'active' : '')}
                onClick={() => props.setTab('ANALYST')}
              >
                {'ANALYST'}
              </a>
            </li>
          </ul>
        </div>
        <div className="card-block">
          { (props.tab === 'IN_QUEUE') && (<OrgRoomMornitor {...props} />) }
          { (props.tab === 'SETTING') && (<OrgRoomSeeting {...props} />) }
          { (props.tab === 'ANALYST') && (<OrgAnalyst {...props} />) }
        </div>
      </div>
    </div>
  </Div>
)

const OrgRoomSeeting = props => (
  <div>
    <h1>{'COMMING SOON'}</h1>
  </div>
)

const OrgAnalyst = props => (
  <div>
    <h1>{'COMMING SOON !'}</h1>
  </div>
)

const MonitorCompose = compose(
  requireAuth(),
  withNavbar(),
  withState('tab', 'setTab', 'IN_QUEUE')
)(OrgMonitor)

export default MonitorCompose
