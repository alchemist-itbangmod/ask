import React from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'

import OrgAllRoom from '../org-all-room'
import OrgHomePage from '../home-page'

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
      <div>
        <div>
          {this.props.org.isLogin ? <OrgAllRoom /> : <OrgHomePage />}
        </div>
      </div>
    )
  }
}

export default OrgIndex
