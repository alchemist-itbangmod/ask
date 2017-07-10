import React from 'react'
import styled from 'styled-components'
import { compose, withState, withHandlers } from 'recompose'
import localforage from 'localforage'

import repuireAsker from '../libs/requireAsker'
// style.css component
const Line = styled.span`
  width: 25px;
  border-bottom: 2px solid #FF4312;
  display: inline-block;
  margin: 8px;
  margin-top: 0px;
`

const PIN = styled.input`
  padding-left: 25px;
  letter-spacing: 28px;
  font-size: 22px;
  border: 0;
  background: transparent;
`
const Text = styled.h3`
  font-family: Prompt;
`

const Header = Text.extend`
  margin-top: 125px;
  font-weight: 600;
  font-size: 50px;
`

const SubHeader = Text.extend`
  margin-top: 30px;
  font-weight: 200;
  font-size: 18px;
`

class PinPageComtainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pin: ''
    }
    this.onChangePin = this.onChangePin.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  async onChangePin(e) {
    if (e.target.value.length > 4) {
      console.log('can not typing')
    } else {
      this.setState({
        pin: e.target.value
      })
    }
  }

  async onSubmit(e) {
    e.preventDefault()
    let status = await fetch(`http://localhost:3001/api/v1/rooms/code/${this.state.pin}`)
      .then(data => data.json())
      .then(data => data.status)
    if (status === true) {
      console.log(`Correct PIN`)
      await localforage.setItem('pin', this.state.pin)
      this.props.history.push('/join')
    } else {
      console.log(`Wrong PIN`)
    }
  }

  render() {
    return <PinPage
      pin={this.state.pin}
      onChangePin={this.onChangePin}
      onSubmit={this.onSubmit}
    />
  }
}

const PinPage = props =>
  <div>
    <div className="container text-center">
      <Header>#ASK</Header>
      <SubHeader>Enter room PIN</SubHeader>
      <form onSubmit={props.onSubmit}>
        <PIN
          className="text-center"
          type="text"
          onChange={(e) => props.onChangePin(e)}
          value={props.pin}
        />
      </form>
      <Line /><Line /><Line /><Line />
    </div>
  </div>

export default repuireAsker()(PinPageComtainer)
