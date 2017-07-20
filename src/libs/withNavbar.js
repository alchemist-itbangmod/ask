import React from 'react'
import OrgNavbar from '../components/Navbar/OrgNavbar'

const withNavbar = () => {
  return (Component) =>
    class withNavbar extends React.Component {
      render() {
        return (
          <div>
            <OrgNavbar {...this.props} />
            <Component {...this.props} />
          </div>
        )
      }
    }
}

export default withNavbar
