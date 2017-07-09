import React from 'react'
import styled from 'styled-components'

import Nav from './NavdevOrganizer'

const Div = styled.div`
  font-size: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
  font-weight: bold;
`

const RoomTitle = styled.div`
  background: orange;
  padding: 10px;
  height: 40px;
`

const RoomName = styled.div`
  float: left;
`

const RoomPin = styled.div`
  float: right;
`

export default props => (
  <div>
    <Nav />
    <RoomTitle className="">
      <RoomName>Room: eiei 5555</RoomName>
      <RoomPin>PIN: 1234</RoomPin>
    </RoomTitle>
    <Div>
      <div className="question">
        ไก่กับไข่ อะไรเกิดก่อนกัน ?
      </div>
      <div className="question">
        ไก่กับไข่ อะไรเกิดก่อนกัน ?
      </div>
      <div className="question">
        ไก่กับไข่ อะไรเกิดก่อนกัน ?
      </div>
      <div className="question">
        ไก่กับไข่ อะไรเกิดก่อนกัน ?
      </div>
      <div className="question">
        ไก่กับไข่ อะไรเกิดก่อนกัน ?
      </div>
    </Div>
  </div>
)
