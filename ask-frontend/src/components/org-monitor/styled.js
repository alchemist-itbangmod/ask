import styled from 'styled-components'
const CardBox = styled.div`
  margin-top:20px;
  border:1px solid black;
  hegiht:80vh;
  padding: 10px;
`
const Scroll = styled.div`
  overflow-y:scroll;
  overflow-x:hidden;
  height:100%;
  min-height: 60vh;
`
const List = styled.li`
  padding:5px;
  margin:20px;
  cursor:pointer;
  transition: .5s;
  border-radius:10px;
  &:hover{
      background-color:#99ccff;
      color:white;
  }
  background: ${props => props.selected && `blue`};
`
const DivHead = styled.div`
  padding:0px 15px 0px 15px;
`

export { CardBox, Scroll, List, DivHead }