import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

import swal from 'sweetalert2'
import './static/bootstrap/bootstrap.min.css'
import '../node_modules/sweetalert2/dist/sweetalert2.min.css'

import styled from 'styled-components'

import Pin from './components/Pin'
import Join from './components/Join'
import Ask from './components/Ask'
import Organizer from './components/Organizer'

const Container = styled.div`
  padding-top: 70px
`

const App = props =>
  <Router>
    <div>
      <Navbar />
      <Container className="container">
        <Route exact path="/" component={Pin} />
        <Route path="/join" component={Join} />
        <Route path="/ask" component={Ask} />
        <Route path="/organizer" component={Organizer} />
      </Container>
    </div>
  </Router>
export default App
