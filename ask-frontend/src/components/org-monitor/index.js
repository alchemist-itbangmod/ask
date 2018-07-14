import React from 'react'
import { Card, Button, CardHeader, Row, Col, Badge } from 'reactstrap'
import { Scroll, List, DivHead } from './styled'
import axios from 'axios'
import _ from 'lodash'
import styled from 'styled-components'

const StyledCardHeader = styled(CardHeader)`
  padding: 0.75rem 0;
  margin-top: 10px;
`

class OrgMonitor extends React.Component {
  state={
    allQuestion: [],
    selectedQuestion: [],
    liveQuestion: [],
  }

  componentWillMount () {
    this.getQuestion()
  }

  getQuestion = async () => {
    const data = await axios.get('http://localhost:3000/api/v1/questions/')
    this.setState({
      allQuestion: data.data,
    })
  }
  handleSelectedQuestion = async (id) => {
    const question = _.find(this.state.allQuestion, { id, })
    const { selectedQuestion, } = this.state
    const index = _.findIndex(selectedQuestion, { id, })
    if (index > -1) {
      selectedQuestion.splice(index, 1)
    } else {
      selectedQuestion.push(question)
    }
    this.setState({
      selectedQuestion,
    })
  }
  sendQuestion (id) {
    // method put
    this.setState({
      selectedQuestion: [],
    })
    this.getQuestion()
  }

  render () {
    return (
      <Row>
        <Col sm='6'>
          <DivHead>
            <StyledCardHeader className='row'>
              <Col sm='8'>
                <span >Question</span>
              </Col>
              <Col sm='4'>
                <Button block size='sm' color='info' onClick={() => this.getQuestion()}>Refresh</Button>{' '}
              </Col>
            </StyledCardHeader>
          </DivHead>
          <Card>
            <Scroll>
              {this.state.allQuestion.map((item) =>
                <List className='row' selected={_.find(this.state.selectedQuestion, { id: item.id, })} key={item.id} onClick={() => this.handleSelectedQuestion(item.id)}>
                  <p className='col-sm-11'>{item.question}</p>
                  <i className='text-right col-sm-1 fa fa-trash' />
                </List>
              )}
            </Scroll>
          </Card>
        </Col>
        <Col sm='6'>
          <DivHead>
            <StyledCardHeader className='row'>
              <Col sm='8'>
                <span >Selected</span>
              </Col>
              <Col sm='4'>
                <Button block size='sm' color='success' onClick={this.sendQuestion}>Send</Button>{' '}
              </Col>
            </StyledCardHeader>
          </DivHead>
          <Card><Scroll>
            {this.state.selectedQuestion.map((item) =>
              <List className='row' key={item.id}>
                <p className='col-sm-9'>{item.question}</p>
                <h5 className='co-sm-3'><Badge color='Light' pill><p style={{ color: 'red', }}>o</p> Live</Badge></h5>
              </List>
            )}
          </Scroll></Card>
        </Col>
      </Row>
    )
  }
}

export default OrgMonitor