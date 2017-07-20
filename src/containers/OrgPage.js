import React from 'react'
import { Route, Switch } from 'react-router-dom'

import OrgCreate from './OrgCreate'
import OrgLogin from './OrgLogin'
import OrgLogout from './OrgLogout'
import OrgDashboard from './OrgDashboard'
import OrgMonitor from './OrgMonitor'
import OrgPresentation from './OrgPresentation'
import OrgSetting from './OrgSetting'
import NotFoundPage from './NotFoundPage'

const OrgPage = ({ match }) => (
  <Switch>
    <Route exact path={`${match.url}/`} component={OrgDashboard} />
    <Route path={`${match.url}/login`} component={OrgLogin} />
    <Route path={`${match.url}/logout`} component={OrgLogout} />
    <Route path={`${match.url}/create`} component={OrgCreate} />
    <Route path={`${match.url}/:id/monitor`} component={OrgMonitor} />
    <Route path={`${match.url}/:id/presentation`} component={OrgPresentation} />
    <Route path={`${match.url}/:id/setting`} component={OrgSetting} />
    <Route component={NotFoundPage} />
  </Switch>
)

export default OrgPage
