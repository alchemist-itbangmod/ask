import React from 'react'
import { Card, Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Name } from '../styled-components/enterQuestion/enterQuestion'

class AskPage extends React.Component {
  state = {
    themeTemplates: '',
    question: '',
    anonymous: false,
    roomId: '',
    showNoti: false,
    status: '',
  }
  changeInputQuestion (data) {
    this.state.question = data
  }
  render () {
    return (
      <Container>
        <Row>
          <Col sm='12' md='12'>
            <h2
              className='text-right mt-5'
            >
          Question
            </h2>
            <Form >
              <Card>
                <FormGroup>
                  <Name className='text-right'>Hi, Alchemist</Name>
                  <Input
                    type='textarea'
                    rows='5'
                    onChange={e => this.changeInputQuestion(e.target.value)}
                    value={this.question}
                  />
                  <Row>
                    <Col sm='8' md='8'>
                      <FormGroup check>
                        <Label check>
                          <Input type='checkbox' id='exampleCheck1' />{' '}Send as anonymous
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col sm='4' md='4'>
                      <Button type='submit' color='primary'>SEND</Button>
                    </Col>
                  </Row>
                </FormGroup>
              </Card>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default AskPage