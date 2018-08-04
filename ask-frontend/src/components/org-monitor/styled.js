import styled from 'styled-components'
import { Card, CardHeader } from 'reactstrap'

const StyledCardHeader = styled(CardHeader)`
  padding: 0.75rem 0;
  padding-left:0px;
  padding-right:0px;
`
const ScrollCard = styled(Card)`
  min-height: 60vh;
  max-height: 60vh;
  overflow-y: scroll;
  overflow-x: hidden;
`

const List = styled.div`
  padding:15px 20px;
  cursor:pointer;
  transition: .2s;
  border-bottom:1px solid grey;
  border-radius:10px;
  :hover {
    background-color: rgba(0,0,0,0.1);
  }
  ${props =>
    props.selected && `
      background-color: #663399b5 !important;
      color: white;
  `};
  
`

export {
  ScrollCard,
  List,
  StyledCardHeader
}