import React from 'react'
import { Route, Switch } from 'react-router-dom'
import OrgIndex from '../containers/Organizer'
import OrgMonitor from '../containers/Monitor'
import Presentation from '../components/Presentation'

class OrgPage extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path='/organizer' component={OrgIndex} />
          <Route path='/organizer/:id/monitor' component={OrgMonitor} />
          <Route path='/organizer/:id/presentation' component={Presentation} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default OrgPage
