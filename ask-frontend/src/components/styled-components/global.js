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
const CardBox = styled.div`
  margin-top:20;
  border-radius:10;
`

export { BGHead, Head, Title, Button, CardBox }
