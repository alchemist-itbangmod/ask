import React from 'react'
import { observable, action } from 'mobx'
import { Button, Input, Container, Row, Col, Card, Badge } from 'reactstrap'
import { navigateTo } from "gatsby-link"


class Name {
  @observable name = ''
  @observable themeTemplates = ''
  @observable roomName = ''

  @action
  initialJoin = () => {
    localStorage.getItem('themeTemplates')
    localStorage.getItem('roomName')
  }

  @action
  changeInputName = e => {
    this[e.target.name] = e.target.value
  }

  @action
  handleSubmit = e => {
    e.preventDefault()
    console.log('name : ', this.name)
    localStorage.setItem('name', this.name)
    navigateTo('/ask-page')
  }
}

const store = new Name()

class JoinPage extends React.Component {
  
  componentWillMount() {
    store.initialJoin
  }
  
  render () {
    return (
  <Container>
    <Row>
      <Col sm='12' md={{ size: 10, offset: 1 }}>
        <h2 className='text-center' >
          {`Welcome to`}
        </h2>
        <h2 className='text-center font-weight-normal'>{'"'+store.roomName+'"'}</h2>
        <Card body className='text-center' outline color='secondary'>
          <Container>
            <form onSubmit={(store.handleSubmit)}>
                  <Input
                  type='text'
                  placeholder='Type your name'
                  name='name'
                  value={store.name}
                  onChange={store.changeInputName}
                  outline
                  className='text-center'
                  />
                  <Row>
                    <Col sm='11'></Col>
                    <Col sm='1'>
                    <Badge pill color='link' classname='float-right'>50</Badge>
                    </Col>
                  </Row>
                  <Button type='submit' color='primary' block>Let's ASK</Button>
            </form>
           </Container>
        </Card>
      </Col>
    </Row>
  </Container>
    )
  }
}

export default JoinPage