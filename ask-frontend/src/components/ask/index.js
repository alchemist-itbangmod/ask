import React from 'react'
import { Card, Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Anonymous, Name } from '../styled-components/enterQuestion/enterQuestion'

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
    this.setState({
      question: data,
    })
  }

  toggleAnonymous () {
    if (this.state.anonymous) {
      this.setState({
        anonymous: false,
      })
    } else {
      this.setState({
        anonymous: true,
      })
    }
  }

  render () {
    return (
      <Container>
        <Row className='justify-content-center'>
          <Col sm='12' md='10' xs='12'>
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
                    placeholder='Type your question here at least 4 characters'
                  />
                  <Row>
                    <Col sm='8' md='8' xs='6' className='pl-4 pt-3'>
                      <FormGroup check>
                        <Label check>
                          <Input type='checkbox' id='checkAnonymous' onClick={() => this.toggleAnonymous()} />
                          <Anonymous>
                            Send as anonymous
                          </Anonymous>
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col sm='4' md='4' xs='6' className='mt-3'>
                      <Button type='submit' color='primary' className='btn btn-block'>SEND</Button>
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