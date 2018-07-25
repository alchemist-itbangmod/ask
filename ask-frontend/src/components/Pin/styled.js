import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Input as StrapInput } from 'reactstrap'


const WrapInput = ({ _ref, ...props }) => <StrapInput innerRef={_ref} {...props} />
WrapInput.propTypes = { _ref: PropTypes.func }

export const Input = styled(WrapInput)`
  width: 70px;
  height: 70px;
  display: inline-block;
  margin: 0 8px;
  text-align: center;
  font-size: 50px;
  @media (max-width: 400px){
    width:60px;
    height:60px;
  }
  @media (max-width: 320px){
    width:55px;
    height:55px;
  }
`

export const BottomContent = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  text-align: center;
  width: 100%;
`

export const Logo = styled.img`
  background-color: gray;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`

export const ErrorMessage = styled.p`
  color: red;
`
export const H1 = styled.h1`
  @media (max-width: 320px){
    font-size: 2em;
  }  
  
`