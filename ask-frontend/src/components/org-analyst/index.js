import React from 'react'
import { Container, Row, Col, Card, CardHeader, CardBody, CardTitle, Button } from 'reactstrap'

export default class OrgAnalyst extends React.Component {
  state = {
    allQuestion: [],
    selectQuestion: [],
    allUser: 0,
  }
  render () {
    return (
      <Container>
        <Row className='justify-content-center'>
          <Col sm='10' xs='12'>
            <Card className='mt-3'>
              <CardHeader>Room Name</CardHeader>
              <CardBody>
                <CardTitle tag='h4' className='text-center mb-5'>Analyst</CardTitle>
                <Row className='text-center mb-5'>
                  <Col>
                    12
                  </Col>
                  <Col>
                    12
                  </Col>
                  <Col>
                    12
                  </Col>
                </Row>
                <Row>
                  <Col />
                  <Col >
                    <Button color='danger' block>Export to excel</Button>
                  </Col>
                  <Col />
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
