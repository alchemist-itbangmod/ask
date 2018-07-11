import React from 'react'
import { Card, Button, CardHeader, Row, Col, Container } from 'reactstrap'
import { CardBox, Scroll, List, DivHead } from './styled'

class OrgMonitor extends React.Component {
  state={
    allQuestion: [
      'content1',
      'content2',
      'content3',
      'content4',
      {
        question: '',
        name: '',
        anonymous: false,
        questionId: 0,
      },
    ],
    getQ: [],
    selectedQuestion: [],
    liveQuestion: [],
  }
  getQuestion () {
    const temp = this.state.getQ.slice(0)
    temp.push(this.state.allQuestion.splice(0, 1).toString())
    this.setState({
      getQ: temp,
    })
  }
  handleSelectedQuestion (index) {
    const temp = this.state.getQ.slice(index, index + 1)
    const temp4selectQ = this.state.selectedQuestion.slice(0)
    temp4selectQ.push(temp)
    this.state.getQ.splice(index, 1)
    this.setState({
      selectedQuestion: temp4selectQ,
    })
  }

  render () {
    return (

      <CardBox>
        <Container>
          <h3>Event</h3>
          <Row>
            <Col sm='8'>
              <DivHead>
                <CardHeader className='row'>
                  <p className='col-sm-10'>Question</p>
                  <Button className='col-sm-2' size='sm' color='info' onClick={() => this.getQuestion()}>Refresh</Button>{' '}
                </CardHeader>
              </DivHead>
              <Card><Scroll>
                {this.state.getQ.map((item, index) =>
                  <List className='row' onClick={() => this.handleSelectedQuestion(index)}>
                    <p className='col-sm-11'>{item}</p>
                    <i className='text-right col-sm-1 fa fa-trash' />
                  </List>
                )}
              </Scroll></Card>
            </Col>
            <Col sm='4'>
              <DivHead>
                <CardHeader className='row'>
                  <p className='col-sm-9'>Selected</p>
                  <Button className='col-sm-3' size='sm' color='success'>Send</Button>{' '}
                </CardHeader>
              </DivHead>
              <Card><Scroll>
                {this.state.selectedQuestion.map((item, index) =>
                  <List className='row'>
                    <p className='col-sm-9'>{item}</p>
                    <Button color='danger' size='sm' className='col-sm-3'>Live</Button>
                  </List>
                )}
              </Scroll></Card>
            </Col>
          </Row>
        </Container>
      </CardBox>

    )
  }
}

export default OrgMonitor