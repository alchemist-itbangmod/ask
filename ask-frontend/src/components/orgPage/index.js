import React from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'

import OrgAllRoom from '../org-all-room'
import OrgHomePage from '../home-page'
import Helmet from '../Core/Helmet'

@inject('org')
@observer
class OrgIndex extends React.Component {
  static propTypes = {
    org: PropTypes.shape({
      isLogin: PropTypes.bool,
    }),
  }
  render () {
    return (
      <React.Fragment>
        <Helmet title='Organizer' />
        {this.props.org.isLogin ? <OrgAllRoom /> : <OrgHomePage />}
      </React.Fragment>
    )
  }
}

export default OrgIndex
