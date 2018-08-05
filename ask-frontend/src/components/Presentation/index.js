import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Logo, AskName, Card } from './styled'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import socket from '../../utils/socket'
import Helmet from '../Core/Helmet'
import logo from '../../static/img/ask-logo.png'
@inject('present')

@observer
class Present extends React.Component {
  get roomId () {
    return this.props.match.params.id
  }
  componentDidMount () {
    this.props.present.getRoomData(this.roomId)
    socket.emit('room', this.roomId)
    socket.on('presentation', ({ questions }) => {
      this.props.present.setQuestions(questions)
    })
  }
  render () {
    return (
      <Container fluid>
        <Helmet title='Presentation' />
        <Row>
          <Card className='justify-content-center' show={!this.props.present.questions.length}>
            <AskName className='m-5 text-center'>
              <h1>ASK #3.0</h1>
            </AskName>
            <div className='d-flex justify-content-center'>
              <Logo bg={logo} />
            </div>
            <div className='m-5'>
              <h1>ask.kmutt.ac.th</h1>
            </div>
          </Card>
          <Col sm='12' className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
            <div className='text-center'>
              {!this.props.present.questions.length ? (
                <React.Fragment>
                  <h1>{this.props.present.roomName}</h1>
                  <h1>PIN : {this.props.present.roomPin}</h1>
                </React.Fragment>
              ) : (
                <div>
                  {this.props.present.questions.map(question => (
                    <h1 key={question.questionId}>
                      {`"${question.question}"`}
                    </h1>
                  ))}
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
Present.propTypes = {
  present: PropTypes.shape({
    getRoomData: PropTypes.func.isRequired,
    roomName: PropTypes.string.isRequired,
    roomPin: PropTypes.string.isRequired,
    getQuestion: PropTypes.func.isRequired,
    questions: PropTypes.array.isRequired,
    roomId: PropTypes.string.isRequired,
    setQuestions: PropTypes.func.isRequired,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}

export default Present