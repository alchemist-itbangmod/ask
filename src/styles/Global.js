import styled from 'styled-components'

const AbsoluteCenterContainer = Component => styled(Component)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`
// Question Card use in orgMonitor
const QuestionCard = styled.div`
  background: ${props => props.active ? '#2badfb' : ''};
  color: ${props => props.active ? 'white' : ''};
`
const Trash = styled.button`
`
const Div = styled.div`
  color: black;
`
export {
  AbsoluteCenterContainer,
  QuestionCard,
  Trash,
  Div
}
