import React from 'react'
import PropTypes from 'prop-types'
import { Button, Row, Col, Badge } from 'reactstrap'
import { List, ScrollCard, StyledCardHeader, DisplayName } from './styled'
import api from '../../utils/api'
import _ from 'lodash'
import socket from '../../utils/socket'
import Modal from '../Core/Modal'
import Alert from 'react-s-alert'
class OrgMonitor extends React.Component {
  state={
    allQuestion: [],
    selectedQuestions: [],
    liveQuestions: [],
    remain: 0,
    modal: false,
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
      allQuestion: data.data.reverse(),
      remain: 0,
    })
  }
  handleSelectedQuestion = async (item) => {
    const { selectedQuestions } = this.state
    const index = _.findIndex(this.state.selectedQuestions, item)

    if (index > -1) {
      selectedQuestions.splice(index, 1)
    } else if (selectedQuestions.length < 5) {
      selectedQuestions.push(item)
    }
    this.setState({
      selectedQuestions,
    })
  }
  sendQuestion = () => {
    // method put
    const { selectedQuestions } = this.state
    api.patch('/questions/answer', {
      questions: selectedQuestions,
      roomId: this.roomId,
    }).then(() => {
      this.setState({
        liveQuestions: selectedQuestions,
        selectedQuestions: [],
      })
      Alert.success('Success !', {
        position: 'top',
        effect: 'slide',
        timeout: 2000,
      })
      this.getQuestion()
    })
    this.setState({ modal: false })
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal })
  }

  render () {
    return (
      <Row className='pt-4'>
        <Modal
          modal={this.state.modal}
          toggle={this.toggle}
          title='คุณแน่ใจที่จะส่งคำถาม ?'
          confirm={this.sendQuestion}
        />
        <Col sm='6'>
          <Row>
            <Col xs='12'>
              <StyledCardHeader>
                <Row className='px-3 justify-content-between align-items-center'>
                  <Col sm='8'>
                    <h6 className='m-0'>Questions ({this.state.allQuestion.length})</h6>
                  </Col>
                  <Col sm='4'>
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
                    {item.question}
                  </Col>
                  <Col xs='12'>
                    <DisplayName
                      anonymous={item.anonymous}
                      selected={isSelected}
                    >
                      {item.anonymous
                        ? `- ไม่เปิดเผยตัวตน`
                        : `คำถามจาก: ${item.name}`
                      }
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
                <Row className='px-3 align-items-center'>
                  <Col sm='7'>
                    <h6 className='m-0'>Selected ({this.state.selectedQuestions.length})
                    / Live ({this.state.liveQuestions.length})</h6>
                  </Col>
                  <Col sm='5'>
                    <Button
                      block
                      size='sm'
                      color='success'
                      onClick={this.toggle}
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
                <Col xs='12' >
                  <DisplayName anonymous={item.anonymous}>
                    {item.anonymous
                      ? `- ไม่เปิดเผยตัวตน`
                      : `คำถามจาก: ${item.name}`
                    }
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
                <Col xs='12' >
                  <DisplayName anonymous={item.anonymous}>
                    {item.anonymous
                      ? `- ไม่เปิดเผยตัวตน`
                      : `คำถามจาก: ${item.name}`
                    }
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