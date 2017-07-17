import styled from 'styled-components'

const AbsoluteCenterContainer = Component => styled(Component)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`

const StyledTag = styled.div`
  font-size: ${props => props.size || 38}px;
  padding: 15px;
  display: inline-block;
  color: #000;
`

export {
  AbsoluteCenterContainer,
  StyledTag
}
