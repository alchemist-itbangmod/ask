import React from 'react'
import { observable, action } from 'mobx'
import { Button, Input, Container, Row, Col, Card, Badge } from 'reactstrap'

class Name {
  @observable name = ''

  @action
  changeInputName = e => {
    this[e.target.name] = e.target.value
  }

  @action
  handleSubmit = e => {
    e.preventDefault()
    console.log('name : ', this.name)
  }
}

const store = new Name()

const JoinPage = props => (
  <Container>
    <Row>
      <Col sm="12" md={{ size: 10, offset: 1 }}>
        <h2 className='text-center' >
          {`Welcome to`}
        </h2>
        <h2 className='text-center font-weight-normal'>{`"Room Name"`}</h2>
        <Card body className='text-center' outline color='secondary'>
          <Container>
            <form onSubmit={store.handleSubmit}>
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
                    <Col sm="11"></Col>
                    <Col sm="1">
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

export default JoinPage