import React from 'react'
import localforage from 'localforage'

const requireAsker = () => {
  return (Component) =>
    class requireAsker extends React.Component {
      constructor(props) {
        super(props)
        this.state = {
          pin: '',
          name: ''
        }
        this.componentWillMount = this.componentWillMount.bind(this)
      }

      async componentWillMount() {
        let pin = await localforage.getItem('pin')
        let name = await localforage.getItem('name')
        if (pin === null) {
          this.props.history.push('/')
        } else if (name === null) {
          this.setState({ pin })
          // this.notState.pin = pin
          this.props.history.push('/join')
        } else {
          this.setState({ pin })
          this.setState({ name })
          this.props.history.push('/ask')
        }
      }

      render() {
        return <Component
          {...this.props}
          name={this.state.name}
          pin={this.state.pin}
        />
      }
    }
}

export default requireAsker
