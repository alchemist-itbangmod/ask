import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Input as StrapInput } from 'reactstrap'

const inputSize = 70

const WrapInput = ({ _ref, ...props }) => <StrapInput innerRef={_ref} {...props} />
WrapInput.propTypes = { _ref: PropTypes.func, }

export const Input = styled(WrapInput)`
  width: ${inputSize}px;
  height: ${inputSize}px;
  display: inline-block;
  margin: 0 8px;
  text-align: center;
  font-size: 50px;
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