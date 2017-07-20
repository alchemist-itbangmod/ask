import styled from 'styled-components'

const UserNavbar = styled.nav`
  flex-direction: row;
  background-color: rgba(255,255,255,0.8);
`

const BrandName = styled.a`
  flex: 3
`

const LogoutButton = styled.button`
  flex: 1;
`

export {
  UserNavbar,
  BrandName,
  LogoutButton
}
