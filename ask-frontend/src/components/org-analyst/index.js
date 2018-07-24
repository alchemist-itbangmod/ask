import React from 'react'
import { Container, Row, Col, Card, CardHeader, CardBody, CardTitle, Button } from 'reactstrap'

export default class OrgAnalyst extends React.Component {
  state = {
    allQuestion: [
      { id: 1, question: 'Hi1' },
      { id: 2, question: 'Hi2' },
      { id: 3, question: 'Hi3' },
      { id: 4, question: 'Hi4' },
      { id: 5, question: 'Hi5' },
    ],
    selectQuestion: [],
    allUser: 1000,
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
                    <h2>
                      {this.state.allQuestion.length}
                    </h2>
                    <p>
                      AllQuestion
                    </p>
                  </Col>
                  <Col>
                    <h2>
                      {this.state.selectQuestion.length}
                    </h2>
                    <p>
                      SelectQuestion
                    </p>
                  </Col>
                  <Col>
                    <h2>
                      {this.state.allUser}
                    </h2>
                    <p>
                      AllUser
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col />
                  <Col >
                    <Button color='danger' block >Export to excel</Button>
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
