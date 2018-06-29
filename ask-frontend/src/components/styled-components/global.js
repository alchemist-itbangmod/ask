import styled from 'styled-components'

const BGHead = styled.div`
  background: rebeccapurple;
`
const Head = styled.div`
  padding: 10px;
`
const Title = styled.a`
  color: white;
  text-decoration: none;
  &:hover{
    color:white;
    text-decoration:none;
  }
`
const Button = styled.button`
  color: black;
  font-size: 0.75em;
`
export { BGHead, Head, Title, Button }
