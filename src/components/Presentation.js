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

const Pin = styled.div`
  background: orange;
  padding: 10px;
  // color: white;
  height: 40px;
  
`

export default props => (
  <div>
    <Nav />
    <Pin className="">
      <div style={{ background: 'gray', width: 40, height: 40, borderRadius: '50%', float: 'left', margin: '0 5px' }} />
      <h4 style={{ float: 'left' }}>Room: eiei 5555</h4>
      <h4 style={{ float: 'right' }}>PIN: 1234</h4>
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
