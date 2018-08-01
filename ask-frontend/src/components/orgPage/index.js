import React from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

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
        org index
        <div>
          isLogin: {this.props.org.isLogin ? 'true' : 'false'}
        </div>
        {this.props.org.isLogin && (
          <Link to='/organizer/1/monitor'>ห้อง 1</Link>
        )}
      </div>
    )
  }
}

export default OrgIndex
