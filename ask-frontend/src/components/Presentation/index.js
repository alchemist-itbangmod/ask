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
import popSound from '../../static/audio/pop.mp3'

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
  font-family: 'Prompt', sans-serif;
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
    const audio = new Audio(popSound)
    socket.emit('room', this.roomId)
    socket.on('presentation', ({ questions }) => {
      this.props.present.setQuestions(questions)
      audio.play()
    })
  }
  render () {
    return (
      <BackgroundContainer>
        <Container fluid>
          <Helmet title='Presentation' />
          <Row>
            <Card className='text-dark bg-light justify-content-center' show={!this.props.present.questions.length}>
              <AskName className='my-5 text-center'>
                <h2>ASK #3.0</h2>
              </AskName>
              <div className='d-flex justify-content-center'>
                <Logo bg={logo} />
              </div>
              <div className='m-2 mt-5'>
                <h4>ask.kmutt.ac.th</h4>
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
                      minSize={44}
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