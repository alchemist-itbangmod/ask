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
  outline: none;
  border-radius: 3px;
  border: none;
  padding: 7px 20px;
  cursor: pointer;
  box-shadow: none;
  ${props => props.loading && `cursor: progress`};
  ${props => props.disabled && `cursor: default`};
`

const FacebookButton = Button.extend`
  background: #4267B2;
  width: 200px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;

  :hover, :active {
    background: #385C9F;
  }
  :active {
    box-shadow: 0 0 3px 3px #4267B2;
  }
`

export {
  BGHead,
  Head,
  Title,
  Button,
  FacebookButton
}
