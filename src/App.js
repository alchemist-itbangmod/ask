import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Navbar from './components/Navbar'

import './static/bootstrap/bootstrap.min.css'

const Home = props => (
  <div>
    <h2>Home</h2>
  </div>
)

const Join = props => {
  return (
    <div>
      <h2>Join</h2>
    </div>
  )
}

const Ask = props => {
  return (
    <div>
      <h2>Ask</h2>
    </div>
  )
}

const App = props => (
  <Router>
    <div>
      <Navbar />
      <div className="container">
        <Route exact path="/" component={Home} />
        <Route path="/join" component={Join} />
        <Route path="/ask" component={Ask} />
      </div>
    </div>
  </Router>
)
export default App
