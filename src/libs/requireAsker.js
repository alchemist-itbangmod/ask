import React from 'react'
import localforage from '../libs/localforage'

const title = `#ASK 2.0`

const requireAsker = () => {
  return (Component) =>
    class requireAsker extends React.Component {
      async componentWillMount() {
        let roomId = await localforage.getItem('roomId')
        let name = await localforage.getItem('name')

        if (roomId === null) {
          this.props.history.push('/')
          document.title = `${title}`
        } else if (name === null) {
          this.props.history.push('/join')
          document.title = `${title} | join`
        } else {
          this.props.history.push('/ask')
          document.title = `${title} | ask`
        }
      }

      render() {
        return <Component {...this.props} />
      }
    }
}

export default requireAsker
