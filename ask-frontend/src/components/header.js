import React from 'react'
import '../static/bootstrap/bootstrap.min.css'
import { BGHead, Head, Title, Button } from '../components/styled-components/global'

const Header = () => (
  <BGHead className='container-fluid'>
    <Head className='row'>
      <h2 className='col' style={{ margin: 4, }}>
        <Title>ASK #3.0</Title>
      </h2>
      <Button className='col-1-sm btn btn-warning'>LOGOUT</Button>
    </Head>
  </BGHead>
)

export default Header
