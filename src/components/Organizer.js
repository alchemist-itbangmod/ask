import React from 'react'
import { Route } from 'react-router-dom'

import OrganizerLogin from './OrganizerLogin'
import OrganizerDashboard from './OrganizerDashboard'
import OrganizerCreateRoom from './OrganizerCreateRoom'
import OrganizerMonitor from './OrganizerMonitor'
import Presentation from './Presentation'

const Organizer = ({ match }) =>
  <div>
    <Route path={`${match.url}/login`} component={OrganizerLogin} />
    <Route path={`${match.url}/dashboard`} component={OrganizerDashboard} />
    <Route path={`${match.url}/create`} component={OrganizerCreateRoom} />
    <Route path={`${match.url}/:id/monitoring`} component={OrganizerMonitor} />
    <Route path={`${match.url}/:id/presentation`} component={Presentation} />
  </div>

export default Organizer
