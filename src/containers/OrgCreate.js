import React from 'react'
import { compose, withState, withHandlers, lifecycle } from 'recompose'
import instance from '../libs/axios'

import OrgNavbar from '../components/Navbar/OrgNavbar'
import BG from '../static/images/bg.png'

const OrgCreate = props => {
  <div>
    <OrgNavbar />
    <h1>Hello world</h1>
  </div>
}

export default OrgCreate
