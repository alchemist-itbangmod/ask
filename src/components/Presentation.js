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

const Pin = styled.div`
  background: orange;
  padding: 10px;
  // color: white;
  
`

export default props => (
  <div>
    <Nav />
    <Pin className="text-center">
      <h4>PIN: 1234</h4>
    </Pin>
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
