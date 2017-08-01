import React from 'react'
import { compose, withState, lifecycle } from 'recompose'
import { Div } from '../styles/Global'
// import OrgSetting from './OrgSetting'
import OrgNavbar from '../components/Navbar/OrgNavbar'

import OrgRoomMornitor from '../components/OrgMonitor'
import OrgRoomSetting from '../components/OrgSetting'

import instance from '../libs/axios'
import requireAuth from '../libs/requireAuth'

const title = `#ASK 2.0 | Org monitor`

const OrgMonitor = props => (
  <Div>
    <OrgNavbar {...props} />
    <div className="container">
      <div className="card">
        <div className="card-header" >
          <div className="row">
            <div className="col-6 nav nav-tabs card-header-tabs" style={{ paddingLeft: '30px' }}>
              <div className="nav-item active">
                <a
                  className={'nav-link active'}
                  style={{
                    color: '#3a10b9',
                    fontWeight: 'bolder'
                  }}
                >
                  {props.room.title}
                </a>
              </div>
            </div>
            <div className="col-6">
              <ul className="nav nav-tabs card-header-tabs justify-content-end">
                <li className="nav-item">
                  <a
                    className={'nav-link ' + (props.tab === 'IN_QUEUE' ? 'active' : '')}
                    onClick={() => props.setTab('IN_QUEUE')}
                  >
                    {'IN-QUEUE'}
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
          </div>
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
    <OrgRoomSetting {...props} />
  </div>
)

const OrgAnalyst = props => (
  <div className="text-center text-muted">
    <h1>{'COMMING SOON !'}</h1>
  </div>
)

const MonitorCompose = compose(
  withState('room', 'setRoom', ''),
  requireAuth(),
  withState('tab', 'setTab', 'IN_QUEUE'),
  lifecycle({
    async componentWillMount() {
      let id = this.props.match.params.id
      let room = await instance.get(`/rooms/${id}`)
        .then(resp => resp.data.data.room)
      this.props.setRoom(room)
      document.title = `${title} - ${this.props.room.title}`
    }
  })
)(OrgMonitor)

export default MonitorCompose
