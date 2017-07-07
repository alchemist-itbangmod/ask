import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

import './static/bootstrap/bootstrap.min.css'
import '../node_modules/sweetalert2/dist/sweetalert2.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import BgImg from './static/images/bg.png'

import Pin from './components/Pin'
import Join from './components/Join'
import Ask from './components/Ask'
import Organizer from './components/Organizer'

const WithBackground = styled.div`
  background-image: url(${BgImg});
  background-size: cover;
  background-position: 50% 50%;
  opacity: .2;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: -1;
`

const App = props =>
  <Router>
    <div>
      <WithBackground />
      <Route exact path="/" component={Pin} />
      <Route path="/join" component={Join} />
      <Route path="/ask" component={Ask} />
      <Route path="/organizer" component={Organizer} />
    </div>
  </Router>

export default App
