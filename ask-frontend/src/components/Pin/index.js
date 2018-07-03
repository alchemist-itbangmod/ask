import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Input, BottomContent, Logo } from '../styled-components/Pin'

class PinComponent extends React.Component {
  render () {
    return (
      <Container>
        <Row className={`mt-5 text-center`}>
          <Col xs={12}>
            <Logo />
          </Col>
          <Col xs={12}>
            <h1>Type room's code</h1>
          </Col>
          <Col xs={12}>
            {[ 1, 2, 3, 4, ].map(ech => (
              <Input key={ech} />
            ))}
          </Col>
          <BottomContent>
            create your own ASK for free via ask.kmutt.ac.th/organizer
          </BottomContent>
        </Row>
      </Container>
    )
  }
}

export default PinComponent
