import React from 'react'
import OrgNavbar from '../components/OrgNavbar'

const withOrgNav = Component =>
  class WithOrgNavbarComponent extends React.Component {
    render () {
      return (
        <React.Fragment>
          <OrgNavbar />
          <Component {...this.props} />
        </React.Fragment>
      )
    }
  }

export default withOrgNav
