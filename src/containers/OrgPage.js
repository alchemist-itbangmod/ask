import React from 'react'
import { Route, Switch } from 'react-router-dom'

import OrgLogin from './OrgLogin'
import OrgLogout from './OrgLogout'
import OrgDashboard from './OrgDashboard'
import OrgMonitor from './OrgMonitor'
import OrgPresentation from './OrgPresentation'
import NotFoundPage from './NotFoundPage'

const OrgPage = ({ match }) => (
  <div style={{ paddingTop: '65px' }}>
    <Switch>
      <Route exact path={`${match.url}/`} component={OrgDashboard} />
      <Route path={`${match.url}/login`} component={OrgLogin} />
      <Route path={`${match.url}/logout`} component={OrgLogout} />
      <Route path={`${match.url}/:id/monitor`} component={OrgMonitor} />
      <Route path={`${match.url}/:id/presentation`} component={OrgPresentation} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
)

export default OrgPage
