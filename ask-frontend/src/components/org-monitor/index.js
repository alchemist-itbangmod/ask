import React from 'react'
import PropTypes from 'prop-types'
import { Button, Row, Col, Badge } from 'reactstrap'
import { List, ScrollCard, StyledCardHeader } from './styled'
import api from '../../utils/api'
import _ from 'lodash'
import socket from '../../utils/socket'

class OrgMonitor extends React.Component {
  state={
    allQuestion: [],
    selectedQuestions: [],
    liveQuestions: [],
    remain: 0,
  }

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }),
  }

  componentDidMount () {
    const roomId = this.props.match.params.id
    socket.emit('room', roomId)

    socket.on('monitor', (data) => {
      if (data.status === 200) {
        this.setState({ remain: this.state.remain + 1 })
      }
    })
    this.getQuestion()
  }

  getQuestion = async () => {
    const roomId = this.props.match.params.id
    const data = await api.get(`/rooms/${roomId}/questions`)
    this.setState({
      allQuestion: data.data,
      remain: 0,
    })
  }
  handleSelectedQuestion = async (item) => {
    const { selectedQuestions } = this.state
    const index = _.findIndex(this.state.selectedQuestions, item)

    if (index > -1) {
      selectedQuestions.splice(index, 1)
    } else {
      selectedQuestions.push(item)
    }
    this.setState({
      selectedQuestions,
    })
  }
  sendQuestion = async (item) => {
    // method put
    const { selectedQuestions } = this.state
    const questionIds = this.state.selectedQuestions.map(question => question.questionId)
    await api.put('/questions', { questionIds })
    this.setState({
      liveQuestions: selectedQuestions,
      selectedQuestions: [],
    })
    this.getQuestion()
  }

  render () {
    return (
      <Row>
        <Col sm='6'>
          <Row>
            <Col xs='12'>
              <StyledCardHeader>
                <Row className='px-2'>
                  <Col sm='8'>
                    <span >Question</span>
                  </Col>
                  <Col sm='4'>
                    <Button block size='sm' color='info' onClick={() => this.getQuestion()}>Refresh {this.state.remain}</Button>{' '}
                  </Col>
                </Row>
              </StyledCardHeader>
            </Col>
          </Row>
          <ScrollCard>
            {this.state.allQuestion.map((item) =>
              <List
                className='row'
                key={item.questionId}
                selected={_.find(this.state.selectedQuestions, { questionId: item.questionId })}
                onClick={() => this.handleSelectedQuestion(item)}
              >
                <Col xs='11'>
                  <span>{item.question}</span>
                </Col>
                <Col xs='1' className='pl-0'>
                  <i className='pull-right fa fa-trash' />
                </Col>
              </List>
            )}
          </ScrollCard>
        </Col>
        <Col sm='6'>
          <Row>
            <Col xs='12'>
              <StyledCardHeader>
                <Row className='px-2'>
                  <Col sm='6'>
                    <span >Selected</span>
                  </Col>
                  <Col sm='6'>
                    <Button block size='sm' color='success' onClick={() => this.sendQuestion()}>Send to presentation</Button>{' '}
                  </Col>
                </Row>
              </StyledCardHeader>
            </Col>
          </Row>
          <ScrollCard>
            {this.state.liveQuestions.map((item) =>
              <List
                className='row' key={item.questionId}
                noHover
              >
                <Col sm='10'>
                  <span>{item.question}</span>
                </Col>
                <Col sm='2'>
                  <Badge color='danger' pill> Live</Badge>
                </Col>
              </List>
            )}
            {this.state.selectedQuestions.map((item) =>
              <List
                className='row' key={item.questionId}
                noHover
              >
                <Col sm='12'>
                  <span>{item.question}</span>
                </Col>
              </List>
            )}
          </ScrollCard>
        </Col>
      </Row>
    )
  }
}

export default OrgMonitor