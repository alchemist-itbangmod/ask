import React from 'react'
import { Card, Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Anonymous } from '../styled-components/enterQuestion/enterQuestion'

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
    this.setState({ question: data })
  }

  toggleAnonymous () {
    const { anonymous } = this.state
    this.setState({ anonymous: !anonymous })
  }

  render () {
    return (
      <Container>
        <Row className='justify-content-center'>
          <Col sm='10' xs='12'>
            <h2 className='mt-2 mb-5'>Room title</h2>
            <Form>
              <Row>
                <Col xs={12}>
                  <Card>
                    <FormGroup>
                      <Col xs={12}>
                        <p className='mt-3 text-right'>Hi, Alchemist</p>
                      </Col>
                      <Col xs={12}>
                        <Input
                          type='textarea'
                          rows='6'
                          onChange={e => this.changeInputQuestion(e.target.value)}
                          value={this.state.question}
                          placeholder='Type your question at least 4 characters'
                        />
                      </Col>
                      <Col xs={12}>
                        <Row className={`mt-3 align-items-center`}>
                          <Col xs={7} className={`pr-0`}>
                            <FormGroup check>
                              <Label check>
                                <Input type='checkbox' id='checkAnonymous' onClick={() => this.toggleAnonymous()} />
                                <Anonymous>
                                  Send as anonymous
                                </Anonymous>
                              </Label>
                            </FormGroup>
                          </Col>
                          <Col xs={5}>
                            <Button type='submit' color='primary' className='btn btn-block'>SEND</Button>
                          </Col>
                        </Row>
                      </Col>
                    </FormGroup>
                  </Card>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default AskPage