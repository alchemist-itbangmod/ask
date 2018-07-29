import React from 'react'
import { Route } from 'react-router-dom'
import OrgMonitor from '../components/orgPage/Monitor'
import OrgNavbar from '../components/OrgNavbar'
import OrgIndex from '../components/orgPage'

class OrgPage extends React.Component {
  render () {
    return (
      <React.Fragment>
        <OrgNavbar />
        <Route exact path='/organizer' component={OrgIndex} />
        <Route exact path='/organizer/:id/monitor' component={OrgMonitor} />
      </React.Fragment>
    )
  }
}

export default OrgPage
