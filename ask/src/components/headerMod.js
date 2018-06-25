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

const HeaderMod = () => (
  <BGHead className="container-fluid">
    <Head className="row">
      <h2 className="col" style={{ margin: 4 }}>
        <Title>HOME</Title>
      </h2>
      <h2 className="col text-center" style={{ margin: 4 }}>
        <Title>#ASK Organizer</Title>
      </h2>
      <div className="col text-right" style={{ margin: 4 }}>
        <Button className="btn btn-warning">LOGOUT</Button>
      </div>
    </Head>
  </BGHead>
)

export default HeaderMod
