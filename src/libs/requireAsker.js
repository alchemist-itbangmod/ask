import React from 'react'
import localforage from '../libs/localforage'

const requireAsker = () => {
  return (Component) =>
    class requireAsker extends React.Component {
      async componentWillMount() {
        let roomId = await localforage.getItem('roomId')
        let name = await localforage.getItem('name')

        if (roomId === null) {
          this.props.history.push('/')
        } else if (name === null) {
          this.props.history.push('/join')
        } else {
          this.props.history.push('/ask')
        }
      }

      render() {
        return <Component {...this.props} />
      }
    }
}

export default requireAsker
