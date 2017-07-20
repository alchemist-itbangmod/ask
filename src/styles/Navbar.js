import styled from 'styled-components'

const PrimaryColor = '#FF4312'

const UserNavbar = styled.nav`
  flex-direction: row;
  background-color: rgba(255,255,255,0.8);
`

const OrgNavbar = styled.nav`
  background-color: rgba(0, 0, 0, 0.6);
  margin-bottom: 15px;
  flex-direction: row;
  color: white;
`

const BrandName = styled.a`
  flex: 3
`

const LogoutButton = styled.button`
  flex: 1;
  color: white;
  background-color: ${PrimaryColor};
  border-color: ${PrimaryColor};

  &:hover {
    color: white;
    background-color: #ff5123;
    border-color: #e84e26;
  }
`

export {
  UserNavbar,
  OrgNavbar,
  BrandName,
  LogoutButton
}
