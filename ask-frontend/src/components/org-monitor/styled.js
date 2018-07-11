import styled from 'styled-components'
const CardBox = styled.div`
  margin-top:20px;
  padding: 30px;
  border:1px solid black;
  hegiht:80vh;
  box-shadow: 5px 10px #888888;
`
const Scroll = styled.div`
  overflow-y:scroll;
  overflow-x:hidden;
  height:50vh;
`
const List = styled.li`
  margin:20px;
`
const DivHead = styled.div`
  padding:0px 15px 0px 15px;
`
export { CardBox, Scroll, List, DivHead }