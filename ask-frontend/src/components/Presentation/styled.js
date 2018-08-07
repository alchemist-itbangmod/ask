import styled, { keyframes } from 'styled-components'

export const Logo = styled.img`
  background-color: gray;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-image: url(${props => props.bg});
  background-size: cover;
`

export const AskName = styled.div`
  // margin: 200px;
`

export const Card = styled.div`
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.4);
  padding: 10px;
  background-color: #fff;
  min-height:100vh;
  position:fixed;
  z-index:1;
  transition: all 0.3s ease-in-out;

  ${props =>
    props.show ? `
    left: 0;
    ` : `
    left: -100%;
  `}
`

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