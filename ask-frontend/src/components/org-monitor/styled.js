import styled from 'styled-components'
import { CardHeader } from 'reactstrap'

const StyledCardHeader = styled(CardHeader)`
  padding: 0.75rem 0;
  padding-left:0px;
  padding-right:0px;
`
const ScrollCard = styled.div`
  min-height: 65vh;
  height: 65vh;
  overflow-y: scroll;
  overflow-x: hidden;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 3px;
`

const List = styled.div`
  padding: 5px 0;
  transition: all 0.2s;
  border-radius: 4px;
  display: flex;
  margin: 5px 2px;
  box-shadow: 0 1px 0.4rem rgba(0,0,0,0.5);
  

  ${props =>
    !props.noHover && `
    cursor:pointer;
    :hover {
      background-color: rgba(0, 0, 0, 0.1);
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
