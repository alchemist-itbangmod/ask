import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Logo, AskName } from './styled'

class Present extends React.Component {
  render () {
    return (
      <Container fluid>
        <Row>
          <Col sm='3' >
            <div className='justify-content-center'>
              <AskName className='m-5 text-center'>
                <h1>ASK #3.0</h1>
              </AskName>
              <div className='m-5'>
                <div className='d-flex justify-content-center'>
                  <Logo />
                </div>
              </div>
              <div className='text-center mt-5'>
                <h1>
                Room Name
                </h1>
              </div>
            </div>
          </Col>
          <Col sm='9' className='text-center'>
            <div className='m-5'>
              <h2>PIN</h2>
              <h1>{'1234'}</h1>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Present