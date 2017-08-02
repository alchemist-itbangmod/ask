import styled, { keyframes } from 'styled-components'

const Container = styled.div`
 position: absolute;
 top: 0;
 left: 0;
 height: 100vh;
 width: 100%;
 background: rgba(0,0,0,0.5)
`

const AbsoluteCenterContainer = Component => styled(Component)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 0 8%;
`

const pop = keyframes`
0% { transform: scale(0.4); opacity: 0; }
100% { transform: scale(1); opacity: 1; }
`

const StyledTag = styled.div`
  font-family: Prompt;
  font-size: ${props => props.size || 68}px;
  padding: 15px 45px;
  display: inline-block;
  color: #fff;
  animation: ${pop} .3s;
`

export {
  AbsoluteCenterContainer,
  StyledTag,
  Container
}
