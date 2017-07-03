import React from 'react'
import { compose, withState, withHandlers } from 'recompose'

class IndexPageContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      a: 0
    }
    this.updateA = this.updateA.bind(this)
  }

  updateA(value) {
    this.setState({
      a: value
    })
  }

  render() {
    return <IndexPage updateA={this.updateA} a={this.state.a} {...this.props} />
  }
}

const IndexPage = props => (
  <div>
    Hello React! {props.a}
    <button
      onClick={() => props.updateA(1)}
    >
      Click Me {props.title }
    </button>
  </div>
)

export default compose(
  withState('count', 'setCount', 1),
  withHandlers({
    onUpdate: props => () => {
      props.setCount(props.count * 2)
    }
  })
)(IndexPageContainer)
