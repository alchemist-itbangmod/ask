import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Input as StrapInput } from 'reactstrap'

const WrapInput = ({ _ref, ...props }) => <StrapInput innerRef={_ref} {...props} />
WrapInput.propTypes = { _ref: PropTypes.func }

export const Input = styled(WrapInput)`
  min-height: 80px !important;
  display: block;
  margin: 0 1%;
  flex: 0 0 23%;
  max-width: 23%;
  text-align: center;
  font-size: 50px;
  padding: 0;
  @media(min-width: 1000px) {
    flex: 0 0 23%;
    max-width: 23%;
    min-height: 100px !important;
  }
`

export const BottomContent = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
`

export const Logo = styled.img`
  background-color: gray;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-image: url(${props => props.bg});
  background-size: cover;
`

export const ErrorMessage = styled.p`
  color: red;
`
export const H1 = styled.h1`
  @media (max-width: 320px){
    font-size: 2em;
  }  
  
`