import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './static/bootstrap/bootstrap.min.css'
import '../node_modules/sweetalert2/dist/sweetalert2.min.css'

import Pin from './components/Pin'
import Join from './components/Join'
import Ask from './components/Ask'
import Organizer from './components/Organizer'

const App = props =>
  <Router>
    <Route exact path="/" component={Pin} />
    <Route path="/join" component={Join} />
    <Route path="/ask" component={Ask} />
    <Route path="/organizer" component={Organizer} />
  </Router>

export default App
