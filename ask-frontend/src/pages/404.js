import React from 'react'
import { Button, Container, Row, Col } from 'reactstrap'
import Link from 'gatsby-link'

const NotFoundPage = () => (
  <Container>
    <Row>
      <Col>
        <div className='text-center'>
          <h1 className='mt-5'>Page not found</h1>
          <p>ไม่พบหน้านี้ในระบบ :(</p>
          <Link to='/'>
            <Button outline color='info'>กลับสู่หน้าแรก</Button>
          </Link>
        </div>
      </Col>
    </Row>
  </Container>
)

export default NotFoundPage
