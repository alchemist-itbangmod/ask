import React from 'react'
import '../static/bootstrap/bootstrap.min.css'
import { BGHead, Head, Title, Button } from '../components/styled-components/global.js'

const HeaderMod = () => (
  <BGHead className='container-fluid'>
    <Head className='row'>
      <h2 className='col' style={{ margin: 4, }}>
        <Title href='/'>
          HOME
        </Title>
      </h2>
      <h2 className='col text-center' style={{ margin: 4, }}>
        <Title>#ASK Organizer</Title>
      </h2>
      <div className='col text-right' style={{ margin: 4, }}>
        <Button className='btn btn-warning'>LOGOUT</Button>
      </div>
    </Head>
  </BGHead>
)

export default HeaderMod
