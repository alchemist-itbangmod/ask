import React from 'react'
import { observable, action } from 'mobx'
import { Button, Input, Container, Row, Col, Card } from 'reactstrap'
import { navigateTo } from 'gatsby-link'

class Name {
  @observable name = ''
  @observable themeTemplates = ''
  @observable roomName = ''

  @action
  initialJoin = () => {
    this.themeTemplates = localStorage.getItem('themeTemplates')
    this.roomName = localStorage.getItem('roomName')
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
  componentWillMount () {
    store.initialJoin()
  }
  render () {
    return (
      <Container className='mt-5 pt-5'>
        <Row>
          <Col sm='12' md={{ size: 10, offset: 1, }}>
            <h2 className='text-center' >
              {`Welcome to`}
            </h2>
            <h2 className='text-center font-weight-normal'>{'"' + store.roomName + '"'}</h2>
            <Container>
              <Card body className='text-center' outline color='secondary'>
                <form onSubmit={(store.handleSubmit)}>
                  <Input
                    type='text'
                    placeholder='Type your name'
                    name='name'
                    value={store.name}
                    onChange={store.changeInputName}
                    outline
                    className='text-center mb-3'
                  />
                  <Button type='submit' color='primary' block>{'Let\'s ASK'}</Button>
                </form>
              </Card>
            </Container>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default JoinPage