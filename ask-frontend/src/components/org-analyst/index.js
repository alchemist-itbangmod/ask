import React from 'react'
import { Container, Row, Col, Card, CardHeader, CardBody, CardTitle } from 'reactstrap'

export default class OrgAnalyst extends React.Component {
  render () {
    return (
      <Container>
        <Row className='justify-content-center'>
          <Col sm='10' xs='12'>
            <Card className='mt-3'>
              <CardHeader>Room Name</CardHeader>
              <CardBody>
                <CardTitle tag='h4' className='text-center'>Analyst</CardTitle>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
