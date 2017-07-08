import React from 'react'
import styled from 'styled-components'

// style.css component
const Line = styled.span`
  width: 25px;
  border-bottom: 2px solid black;
  display: inline-block;
  margin: 8px;
  margin-top: 0px;
`

const PIN = styled.input`
  padding-left: 25px;
  letter-spacing: 28px;
  font-size: 22px;
  border: 0;
`
const Text = styled.h3`
  font-family: Prompt
`

const H1 = Text.extend`
  margin-top: 50px;
  font-weight: semi-bold;
`

const H5 = Text.extend`

`

const PinPage = props =>
  <div>
    <div className="container text-center">
      <H1>#ASK</H1>
      <H5>Enter room PIN</H5>
      <div>
        <PIN className="text-center" type="text" value="1234"/>
      </div>
      <Line /><Line /><Line /><Line /> 
    </div>
  </div>

export default PinPage
