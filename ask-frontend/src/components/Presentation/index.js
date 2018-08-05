import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Logo, AskName, Card } from './styled'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import socket from '../../utils/socket'
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
        <Row>
          <Card className='justify-content-center' show={!this.props.present.questions.length}>
            <AskName className='m-5 text-center'>
              <h1>ASK #3.0</h1>
            </AskName>
            <div className='d-flex justify-content-center'>
              <Logo />
            </div>
            <div className='m-5'>
              <Link to='/'>
                <h1>ask.kmutt.ac.th</h1>
              </Link>
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
  }),
}

export default Present