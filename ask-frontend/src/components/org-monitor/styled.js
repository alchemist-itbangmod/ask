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
  padding:15px 0 0;
  transition: all 0.2s;
  border-radius: 4px;
  margin: 5px 0;
  box-shadow: 0 0 0.5rem;

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
  padding-bottom: 5px;
  transition: all 0.2s;

  ${props =>
    props.anonymous ? `
    color: gray;
  ` : `
    color: orange;
  `}
  ${props =>
    props.selected && `
    color: #fff;
  `}
`

export {
  ScrollCard,
  List,
  StyledCardHeader,
  DisplayName
}
