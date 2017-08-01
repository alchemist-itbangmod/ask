import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { injectGlobal } from 'styled-components'

import './static/bootstrap/bootstrap.min.css'
import '../node_modules/sweetalert2/dist/sweetalert2.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

import BG from './static/images/bg-us.png'

import {
  PinPage,
  JoinPage,
  AskPage,
  OrgPage,
  NotFoundPage
} from './containers'

injectGlobal([`
  html {
    height: 100%;
  }

  body {
    background: url(${BG}) no-repeat center center fixed;
    background-size: cover;
    min-height: 100%;
  }

  #root {
    // background: rgba(81,99,149,0.9) no-repeat center center fixed;
    // background: linear-gradient(to right, rgba(81,99,149,0.2), rgba(97,67,133,0.2))  no-repeat center center fixed;
    min-height: 100%;
  }
`])

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
