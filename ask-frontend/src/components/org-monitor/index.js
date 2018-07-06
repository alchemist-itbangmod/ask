import React from 'react'
import styled from 'styled-components'
import { Card, Button, CardHeader, Row, Col } from 'reactstrap'

const CardBox = styled.div`
  margin-top:20px;
  padding: 30px;
  border:1px solid black;
  hegiht:80vh;
`
const Scroll = styled.div`
  overflow-y:scroll;
  overflow-x:hidden;
  height:50vh;
`
const List = styled.li`
  margin:20px;
`
const DivHead = styled.div`
  padding-left:15px;
  padding-right:15px;
`
const I = styled.i`
}
`
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
    console.log(this.state.getQ)
    console.log(this.state.allQuestion)

    const temp = this.state.getQ.slice(0)
    temp.push(this.state.allQuestion.splice(0, 1).toString())
    this.setState({
      getQ: temp,
    })
  }

  render () {
    return (

      <CardBox className>

        <h3>Event</h3>
        <Row>
          <Col sm='8'>
            <DivHead>
              <CardHeader className='row'>
                <p className='col-sm-9'>Question</p>
                <Button className='col-sm-3' color='info' onClick={() => this.getQuestion()}>Refresh</Button>{' '}
              </CardHeader>
            </DivHead>
            <Card><Scroll>
              {this.state.getQ.map((item, index) =>
                <List className='row'>
                  <p className='col-sm-11'>{item}</p>
                  <I className='text-right col-sm-1 fa fa-trash' />
                </List>
              )}
            </Scroll></Card>
          </Col>
          <Col sm='4'>
            <DivHead>
              <CardHeader className='row'>
                <p className='col-sm-8'>Selected</p>
                <Button className='col-sm-4' color='success'>Send</Button>{' '}
              </CardHeader>
            </DivHead>
            <Card><Scroll>
              {[ 1, 2, 3, 4, 5, ].map((item, index) =>
                <List className='row'>
                  <p className='col-sm-8'>คำถาม</p>
                  <Button color='danger' className='col-sm-4'>Live</Button>
                </List>
              )}
            </Scroll></Card>
          </Col>
        </Row>

      </CardBox>

    )
  }
}

export default OrgMonitor