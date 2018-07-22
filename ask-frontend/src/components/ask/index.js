import React from 'react'
import { Card, Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import Dialog from './Dialog'
@inject('ask')
@observer
class AskPage extends React.Component {
  render () {
    return (
      <Container>
        <Dialog show={this.props.ask.showNoti} status={this.props.ask.status} message={this.props.ask.message} />
        <Row className='justify-content-center'>
          <Col sm='8' xs='12'>
            <h2 className='mt-5 mb-5'>{this.props.ask.roomName}</h2>
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
                          invalid={this.props.ask.message && this.props.ask.question.length < 4}
                          type='textarea'
                          rows='6'
                          onChange={this.props.ask.changeInputQuestion}
                          value={this.props.ask.question}
                          placeholder='Type your question at least 4 characters'
                          minLength='4'
                          maxLength='250'
                        />
                        <div className='text-right'>
                          {250 - this.props.ask.question.length}

                        </div>
                      </Col>
                      <Col xs={12}>
                        <Row className={`mt-3`}>
                          <Col xs='12'>
                            <hr />
                          </Col>
                          <Col xs={7} className={`pr-0 d-flex align-items-center`}>
                            <FormGroup check>
                              <Label check>
                                <Input type='checkbox' id='checkAnonymous' onClick={this.props.ask.toggleAnonymous} />
                                <span>
                                  Send as anonymous
                                </span>
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
    showNoti: PropTypes.bool.isRequired,
    status: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }),
}

export default AskPage