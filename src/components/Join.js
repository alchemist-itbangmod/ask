import React from 'react'
import Navbar from './Navbar'

const JoinPage = props => (
  <div>
    <Navbar />
    <div className="container">
      <div className="text-center">
        <form>
          <input type="text" placeholder="Enter youra full name"/>
        </form>
      </div>
    </div>
  </div>
)

export default JoinPage
