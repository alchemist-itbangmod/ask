import React from 'react'
import PropTypes from 'prop-types'
import { Button, Row, Col, Badge } from 'reactstrap'
import { Scroll, List, StyledCard, StyledCardHeader } from './styled'
import api from '../../utils/api'
import _ from 'lodash'
import socket from '../../utils/socket'

class OrgMonitor extends React.Component {
  state={
    allQuestion: [],
    selectedQuestion: [],
    liveQuestion: [],
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
    socket.on('connect', () => {
      socket.emit('room', roomId)
    })

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
    const { selectedQuestion } = this.state
    const index = _.findIndex(this.state.selectedQuestion, item)

    if (index > -1) {
      selectedQuestion.splice(index, 1)
    } else {
      selectedQuestion.push(item)
    }
    this.setState({
      selectedQuestion,
    })
  }
  sendQuestion = async (item) => {
    // method put
    const questionIds = this.state.selectedQuestion.map(question => question.questionId)
    await api.put('/questions', { questionIds })
    this.setState({
      selectedQuestion: [],
      allQuestion: [],
    })
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
          <StyledCard>
            <Scroll>
              {this.state.allQuestion.map((item) =>
                <List
                  className='row'
                  key={item.questionId}
                  selected={_.find(this.state.selectedQuestion, { questionId: item.questionId })}
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
            </Scroll>
          </StyledCard>
        </Col>
        <Col sm='6'>
          <Row>
            <Col xs='12'>
              <StyledCardHeader>
                <Row className='px-2'>
                  <Col sm='8'>
                    <span >Selected</span>
                  </Col>
                  <Col sm='4'>
                    <Button block size='sm' color='success' onClick={() => this.sendQuestion()}>Sefresh</Button>{' '}
                  </Col>
                </Row>
              </StyledCardHeader>
            </Col>
          </Row>
          <StyledCard>
            <Scroll>
              {this.state.selectedQuestion.map((item) =>
                <List
                  className='row' key={item.questionId}>
                  <Col sm='10'><span>{item.question}</span></Col>
                  <Col sm='2'><span><Badge color='danger' pill> Live</Badge></span></Col>
                </List>
              )}
            </Scroll>
          </StyledCard>
        </Col>
      </Row>
    )
  }
}

export default OrgMonitor