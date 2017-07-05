import React from 'react'
import AskPage from '../containers/AskPage'
import withApp from '../libs/withApp'

const Ask = props => (<AskPage {...props} />)

export default withApp('Index')(Ask)
