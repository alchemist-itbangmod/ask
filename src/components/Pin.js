import React from 'react'
import styled from 'styled-components'
import { compose, withState, withHandlers } from 'recompose'

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

const PinPage = props =>
  <div>
    <div className="container text-center">
      <Header>#ASK</Header>
      <SubHeader>Enter room PIN</SubHeader>
      <form>
        <PIN className="text-center" type="text" value="1234" />
      </form>
      <Line /><Line /><Line /><Line /> 
    </div>
  </div>

const PinPageCompose = withState('pin', 'setPin', 0)(PinPage)

export default PinPageCompose
