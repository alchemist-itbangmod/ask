import styled from 'styled-components'
import { Card, CardHeader } from 'reactstrap'

const StyledCardHeader = styled(CardHeader)`
  padding: 0.75rem 0;
  padding-left:0px;
  padding-right:0px;
`
const ScrollCard = styled(Card)`
  min-height: 65vh;
  max-height: 65vh;
  overflow-y: scroll;
  overflow-x: hidden;
`

const List = styled.div`
  padding:15px 20px 0;
  transition: all 0.2s;
  border-bottom:1px solid #000;
  border-radius:10px;

  ${props =>
    !props.noHover && `
    cursor:pointer;
    :hover {
      background-color: rgba(0,0,0,0.1);
    }
  `}
  ${props =>
    props.selected && `
      background-color: #663399b5 !important;
      color: #fff;
      border-color: #fff;
  `};
`

const DisplayName = styled.div`
  margin: 0 -20px;
  padding: 0 10px;
  border-top: 0.75px solid #fff;
  border-bottom: 1px solid #000;
  transition: all 0.2s;

  ${props =>
    props.anonymous ? `
    background: lightgrey;
  ` : `
    background: antiquewhite;
  `}
  ${props =>
    props.selected && `
    background-color: #663399 !important;
    color: #fff;
  `}
`

export {
  ScrollCard,
  List,
  StyledCardHeader,
  DisplayName
}
