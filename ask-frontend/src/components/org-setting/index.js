import React from 'react'
import { observable, action } from 'mobx'
import { Card, Container, Input, Row, Col, InputGroup, Button } from 'reactstrap'
import Toggle from 'react-toggle'

import '../../static/toggle.css'

class Setting {
  @observable roomPin = ''
  @observable themeTemplates = ''
  @observable roomName = ''
  @observable roomId = 0
  @observable themeId = 0
  @observable canSend = false

  @action
  getData = () => {
    localStorage.getItem('roomId')
    localStorage.getItem('themeTemplates')
    localStorage.getItem('roomName')
    localStorage.getItem('roomPin')
    localStorage.getItem('canSend')
  }

  @action
  changeInputName = e => {
    this[e.target.roomName] = e.target.value
  }

  @action
  updateRoomData = e => {
    e.preventDefault()
    localStorage.setItem('roomName', this.roomName)
    localStorage.setItem('themeTemplates', this.themeTemplates)
    localStorage.setItem('canSend', this.canSend)
    localStorage.setItem('roomId', this.roomId)
  }
}

const store = new Setting()

class OrgSetting extends React.Component {
  componentWillMount () {
    store.getData()
  }

  render () {
    return (
      <Card>
        <Container>
          <Row>
            <Col>
              <form onSubmit={(store.updateRoomData)}>
                <InputGroup>
                  <p>Room Name :</p>
                  <Input
                    type='text'
                    placeholder={store.roomName}
                    name='roomName'
                    value={store.roomName}
                    onChange={store.changeInputName}
                    outline
                    className='text-center mb-3'
                  />
                </InputGroup>
                <InputGroup>
                  <p>Room PIN :</p>
                  {store.roomPin}
                </InputGroup>
                <InputGroup>
                  <p>Open Sending :</p>
                  <Toggle />
                </InputGroup>
                <InputGroup>
                  <p>Theme :</p>
                  <p>themes</p>
                </InputGroup>
                <Button type='submit' color='success'>Update</Button>
              </form>
            </Col>

          </Row>

        </Container>
      </Card>
    )
  }
}

export default OrgSetting