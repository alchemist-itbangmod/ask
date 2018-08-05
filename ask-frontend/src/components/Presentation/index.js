import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Logo, AskName, Card } from './styled'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import socket from '../../utils/socket'
import Helmet from '../Core/Helmet'
import logo from '../../static/img/ask-logo.png'
import { TagCloud } from 'react-tagcloud'
import styled, { keyframes } from 'styled-components'

const pop = keyframes`
  0% { transform: scale(0.4); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`

const StyledTag = styled.div`
  font-size: ${props => props.size || '55'}px;
  margin: 0.7em 0;
  animation: ${pop} 0.3s;
`

const BackgroundContainer = styled.div`
  background: radial-gradient(#0E0721DD, #0E0721, #0E0721, #0E0721, #0c0323);
  color: white;
`

const Tag = (tag, size) => (
  <StyledTag
    key={tag.questionId}
    size={size}
  >
    {tag.question}
  </StyledTag>
)

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
      <BackgroundContainer>
        <Container fluid>
          <Helmet title='Presentation' />
          <Row>
            <Card className='text-dark bg-light justify-content-center' show={!this.props.present.questions.length}>
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
                    <TagCloud
                      className='text-center'
                      minSize={40}
                      maxSize={58}
                      tags={this.props.present.questions}
                      renderer={Tag}
                    />
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </BackgroundContainer>
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