import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background-color: #ccc;
  border-radius: 0;
`

const ButtonEnter = Button.extend`background-color: #ff0000;`

const PinPage = props =>
  <div>
    Pin Page
    <Button className="btn btn-primary btn-block">ENTER</Button>
    <ButtonEnter className="btn btn-primary btn-block">Hi</ButtonEnter>
  </div>

export default PinPage
