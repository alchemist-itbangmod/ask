import React from 'react'

import OrgNavbar from '../components/Navbar/OrgNavbar'
import UserNavbar from '../components/Navbar/Navbar'

const withNavbar = (role) => {
  return (Component) =>
    class withNavbar extends React.Component {
      render() {
        return (
          <div>
            {
              role === 'org'
              ? <OrgNavbar {...this.props} />
              : <UserNavbar {...this.props} />
            }
            <Component {...this.props} />
          </div>
        )
      }
    }
}

export default withNavbar
