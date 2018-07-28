import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import OrgMonitor from '../components/orgPage/Monitor'
import PageNotFound from './404'

class OrgPage extends React.Component {
  render () {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>

            <Route exact path='/org' render={props => (
              <div>org</div>
            )} />
            <Route path='/org/:id/monitor' component={OrgMonitor} />
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    )
  }
}

export default OrgPage
