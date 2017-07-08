import React from 'react'
import styled from 'styled-components'

import Navbar from './Navbar'

// style.css componemt
const Name = styled.input`
  border: 1px;
  border-radius: 22px;
  background: #EFEFEF;
  font-weight: 200;
`
const JoinButton = styled.button`
  background-color: #FF4312;
  border: 0;
  border-radius: 22px;
  padding-top: 8px;
  padding-bottom: 8px; 
`

const JoinPage = props =>
  <div>
    <Navbar />
    <div className="container" style={{ marginTop: '200px' }}>
      <div className="text-center">
        <form>
          <div className="form-group">
            <Name className="text-center form-control" type="text" placeholder="Enter your name..."/>
          </div>
          <JoinButton
            type="button"
            className="btn btn-primary btn-sm btn-block"
            onClick={() => props.history.push('/ask')}
          >JOIN</JoinButton>
        </form>
      </div>
    </div>
  </div>

export default JoinPage
