import React from 'react'
import Link from 'gatsby-link'
import '../static/bootstrap/bootstrap.min.css'
import styled from 'styled-components'

const BGHead = styled.div`
  background: rebeccapurple;
`
const Head = styled.div`
  padding: 10px;
`
const Title = styled.div`
  color: white;
  textdecoration: none;
`
const Button = styled.button`
  color: black;
  font-size: 0.75em;
`

const Header = ({ siteTitle }) => (
  <BGHead className="container-fluid">
    <Head className="row">
      <h2 className="col" style={{ margin: 4 }}>
        <Title>{siteTitle}</Title>
      </h2>
      <Button className="col-1 btn btn-warning">LOGOUT</Button>
    </Head>
  </BGHead>
)

export default Header
