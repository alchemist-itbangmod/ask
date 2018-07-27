import React from 'react'
import { Button, Row, Col, Badge } from 'reactstrap'
import { Scroll, List, StyledCard, StyledCardHeader } from './styled'
import axios from 'axios'
import _ from 'lodash'

class OrgMonitor extends React.Component {
  state={
    allQuestion: [],
    selectedQuestion: [],
    liveQuestion: [],
  }

  componentDidMount () {
    this.getQuestion()
  }

  getQuestion = async () => {
    const data = await axios.get('http://localhost:3000/api/v1/rooms/5/questions')
    this.setState({
      allQuestion: data.data,
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
    await axios.put('http://localhost:3000/api/v1/questions/', { questionIds })
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
                    <Button block size='sm' color='info' onClick={() => this.getQuestion()}>Refresh</Button>{' '}
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
                  <span className='col-sm-11'>{item.question}</span>
                  <i className='text-right col-sm-1 fa fa-trash' />
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