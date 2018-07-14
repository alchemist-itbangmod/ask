import React from 'react'
import { Card, Button, CardHeader, Row, Col, Container, Badge } from 'reactstrap'
import { CardBox, Scroll, List, DivHead } from './styled'
import axios from 'axios'
class OrgMonitor extends React.Component {
  state={
    allQuestion: [ ],
    selectedQuestion: [],
    liveQuestion: [],
  }
  getQuestion = async () => {
    const data = await axios.get('http://localhost:3000/api/v1/questions/')
    this.setState({
      allQuestion: data.data,
    })
  }
  handleSelectedQuestion = async (key) => {
    const temp = this.state.allQuestion.slice(key, key + 1)
    const temp4Selected = this.state.selectedQuestion.slice(0)
    temp4Selected.push(temp)
    this.setState({
      selectedQuestion: temp4Selected,
    })
  }
  sendQuestion () {
    this.setState({
      temp: this.state.selectedQuestion.splice(0),
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
                {this.state.allQuestion.map((item) =>
                  <List className='row' key={item.id} onClick={() => this.handleSelectedQuestion(item.id)}>
                    <p className='col-sm-11'>{item.title}</p>
                    <i className='text-right col-sm-1 fa fa-trash' />
                  </List>
                )}
              </Scroll></Card>
            </Col>
            <Col sm='4'>
              <DivHead>
                <CardHeader className='row'>
                  <p className='col-sm-9'>Selected</p>
                  <Button className='col-sm-3' size='sm' color='success' onClick={() => this.sendQuestion()}>Send</Button>{' '}
                </CardHeader>
              </DivHead>
              <Card><Scroll>
                {this.state.selectedQuestion.map((item) =>
                  <List className='row' key={item.id}>
                    <p className='col-sm-9'>{item.title}</p>
                    <h5 className='co-sm-3'><Badge color='Light' pill><p style={{ color: 'red', }}>o</p> Live</Badge></h5>
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