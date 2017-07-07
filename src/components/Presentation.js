import React from 'react'
import styled from 'styled-components'

import Nav from './NavdevOrganizer'

const Div = styled.div`
  font-size: 70px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
  font-weight: bold;
`

export default props => (
  <div>
    <Nav />
    <div className="show-pin">
      PIN: 123456
    </div>
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
    </Div>
  </div>
)
