import styled from 'styled-components'

const PrimaryColor = '#1BB7BF'
const HoverColor = '#209aa0'

const Container = styled.div`
  padding-top: 150px
`

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

// for OrgSetting
const SettingContainer = styled.div`
  background: white;
`
const Dropdown = styled.form`
  display: ${props => props.active ? 'block' : ''};
  right: 0;
  left: auto;
`
const Openbtn = styled.button`
  background: ${props => props.active ? '#229954' : ''};
  color: ${props => props.active ? '#fff' : ''};
  &:hover{
    background: ${props => props.active ? '#31d074' : ''};
    color: ${props => props.active ? '#fff' : ''};
  }
`
const Closebtn = styled.button`
  background: ${props => props.active ? '#cb4335' : ''};
  color: ${props => props.active ? '#fff' : ''};
  &:hover{
    background: ${props => props.active ? '#fd513f' : ''};
    color: ${props => props.active ? '#fff' : ''};
  }
`

const Question = styled.p`
  display: flex;
  flex: 1;
  margin: 5px 0;
`

const Button = styled.button`
  color: white;
  background-color: ${PrimaryColor};
  border-color: ${PrimaryColor};
  border-radius: 10px;

  &:hover {
    color: white;
    background-color: ${HoverColor};
    border-color: ${HoverColor};
  }
`
export {
  AbsoluteCenterContainer,
  Button,
  Container,
  QuestionCard,
  Question,
  Div,
  SettingContainer,
  Dropdown,
  Openbtn,
  Closebtn
}
