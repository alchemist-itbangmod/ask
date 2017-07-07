import React from 'react'
import styled from 'styled-components'

import Navbar from './Navbar'

// style.css componemt
const Name = styled.input`
  border: 1px;
  border-radius: 22px;
  background: #EFEFEF;
  display: inline-block;
  margin-top: 200px;
  margin-bottom: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 60px;
  padding-right: 60px;
  font-weight: 200;
`
const JoinButton = styled.button`
  background-color: #FF4312;
  border: 0;
  border-radius: 22px;
  padding-top: 8px;
  padding-bottom: 8px; 
`

const JoinPage = props => (
  <div>
    <Navbar />
    <div className="container">
      <div className="text-center">
        <form>
          <Name className="text-center" type="text" placeholder="Enter your name..."/>
        </form>
        <JoinButton type="button" className="btn btn-primary btn-sm btn-block">JOIN</JoinButton>
      </div>
    </div>
  </div>
)

export default JoinPage
