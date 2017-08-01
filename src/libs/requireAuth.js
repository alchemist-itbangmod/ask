import React from 'react'
import localforage from '../libs/localforage'

const requireAuth = (status) => {
  if (status === 'WITHOUT') {
    return (Component) =>
      class requireAsker extends React.Component {
        async componentWillMount() {
          let token = await localforage.getItem('_token')

          if (token !== null) {
            this.props.history.push('/organizer/')
          }
        }

        render() {
          return <Component {...this.props} />
        }
      }
  } else {
    return (Component) =>
      class requireAsker extends React.Component {
        async componentWillMount() {
          let token = await localforage.getItem('_token')

          if (token === null || token === undefineds) {
            this.props.history.push('/organizer/login')
          }
        }

        render() {
          return <Component {...this.props} />
        }
      }
  }
}

export default requireAuth
