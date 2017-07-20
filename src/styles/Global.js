import styled from 'styled-components'

const AbsoluteCenterContainer = Component => styled(Component)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`
// Question Card use in orgMonitor
const QuestionCard = styled.li`
  background: ${props => props.active ? '#2badfb' : ''};
  color: ${props => props.active ? 'white' : ''};
`

const Div = styled.div`
  color: black;
`

const Question = styled.p`
  display: flex;
  flex: 1;
  margin: 5px 0;
`
export {
  AbsoluteCenterContainer,
  QuestionCard,
  Question,
  Div
}
