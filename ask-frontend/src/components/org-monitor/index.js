import React from 'react'
import PropTypes from 'prop-types'
import { Button, Row, Col, Badge } from 'reactstrap'
import { List, ScrollCard, StyledCardHeader, DisplayName } from './styled'
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

  get roomId () {
    return this.props.match.params.id
  }

  componentDidMount () {
    socket.emit('room', this.roomId)

    socket.on('monitor', (data) => {
      if (data.status === 200) {
        this.setState({ remain: this.state.remain + 1 })
      }
    })
    this.getQuestion()
  }

  getQuestion = async () => {
    const data = await api.get(`/rooms/${this.roomId}/questions`)
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
      <Row className='pt-4'>
        <Col sm='6'>
          <Row>
            <Col xs='12'>
              <StyledCardHeader>
                <Row className='px-3'>
                  <Col sm='8'>
                    <h4>Questions ({this.state.allQuestion.length})</h4>
                  </Col>
                  <Col sm='1' />
                  <Col sm='3'>
                    <Button
                      block
                      size='sm'
                      color='info'
                      onClick={this.getQuestion}
                    >Refresh {this.state.remain}</Button>{' '}
                  </Col>
                </Row>
              </StyledCardHeader>
            </Col>
          </Row>
          <ScrollCard>
            {this.state.allQuestion.map((item) => {
              const isSelected = _.findIndex(this.state.selectedQuestions, { questionId: item.questionId }) > -1
              return (
                <List
                  className='row'
                  key={item.questionId}
                  selected={isSelected}
                  onClick={() => this.handleSelectedQuestion(item)}
                >
                  <Col xs='10'>
                    <span>{item.question}</span>
                  </Col>
                  <Col xs='12' className='text-right'>
                    <DisplayName
                      anonymous={item.anonymous}
                      selected={isSelected}
                    >
                      <i className='fa fa-arrow-up fa-sm' />
                      {item.anonymous ? `
                      ไม่เปิดเผยตัวตน
                      ` : `
                      คำถามจาก: ${item.name}
                      `}
                    </DisplayName>
                  </Col>
                </List>
              )
            })}
          </ScrollCard>
        </Col>
        <Col sm='6'>
          <Row>
            <Col xs='12'>
              <StyledCardHeader>
                <Row className='px-3'>
                  <Col sm='8'>
                    <h4>Selected ({this.state.selectedQuestions.length})
                    / Live ({this.state.liveQuestions.length})</h4>
                  </Col>
                  <Col sm='4'>
                    <Button
                      block
                      size='sm'
                      color='success'
                      onClick={this.sendQuestion}
                    >Send to presentation</Button>{' '}
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
                <Col xs='12' className='text-right'>
                  <DisplayName anonymous={item.anonymous}>
                    {item.anonymous ? `
                    ไม่เปิดเผยตัวตน
                    ` : `
                    คำถามจาก: test
                    `}
                  </DisplayName>
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
                <Col xs='12' className='text-right'>
                  <DisplayName anonymous={item.anonymous}>
                    {item.anonymous ? `
                    ไม่เปิดเผยตัวตน
                    ` : `
                    คำถามจาก: test
                    `}
                  </DisplayName>
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