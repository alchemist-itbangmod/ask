import React from 'react'
import { Card, Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Anonymous } from '../styled-components/enterQuestion/enterQuestion'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'

@inject('ask')
@observer
class AskPage extends React.Component {
  componentWillMount () {
    this.props.ask.getRoomData()
  }

  render () {
    return (
      <Container>
        <Row className='justify-content-center'>
          <Col sm='10' xs='12'>
            <h2 className='mt-2 mb-5'>{this.props.ask.roomName}</h2>
            <Form onSubmit={this.props.ask.handleQuestion}>
              <Row>
                <Col xs={12}>
                  <Card>
                    <FormGroup>
                      <Col xs={12}>
                        <p className='mt-3 text-right'>Hi, {this.props.ask.name}</p>
                      </Col>
                      <Col xs={12}>
                        <Input
                          type='textarea'
                          rows='6'
                          onChange={this.props.ask.changeInputQuestion}
                          value={this.props.ask.question}
                          placeholder='Type your question at least 4 characters'
                        />
                      </Col>
                      <Col xs={12}>
                        <Row className={`mt-3 align-items-center`}>
                          <Col xs={7} className={`pr-0`}>
                            <FormGroup check>
                              <Label check>
                                <Input type='checkbox' id='checkAnonymous' onClick={this.props.ask.toggleAnonymous} />
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
AskPage.propTypes = {
  ask: PropTypes.shape({
    handleQuestion: PropTypes.func.isRequired,
    changeInputQuestion: PropTypes.func.isRequired,
    question: PropTypes.string.isRequired,
    toggleAnonymous: PropTypes.func.isRequired,
    roomName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    getRoomData: PropTypes.func.isRequired,
  }),
}

export default AskPage