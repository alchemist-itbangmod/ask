import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { injectGlobal } from 'styled-components'

import './static/bootstrap/bootstrap.min.css'

import {
  PinPage,
  JoinPage,
  AskPage,
  OrgPage,
  NotFoundPage
} from './containers'

injectGlobal`

`

const App = props => (
  <Router>
    <Switch>
      <Route exact path="/" component={PinPage} />
      <Route path="/join" component={JoinPage} />
      <Route path="/ask" component={AskPage} />
      <Route path="/organizer" component={OrgPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
)

export default App
