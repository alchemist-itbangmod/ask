import React from 'react'
import { observable, action } from 'mobx'
import { Input, Row, Col, InputGroup, Button, Card } from 'reactstrap'
import Toggle from 'react-toggle'
import { observer } from 'mobx-react'
import styled from 'styled-components'

import '../../static/toggle.css'

const StyledCard = styled(Card)`
  padding:20px;
`

class Setting {
  @observable roomPin = ''
  @observable themeTemplates = ''
  @observable roomName = ''
  @observable roomId = 0
  @observable themeId = 0
  @observable canSend = false

  @action
  getRoomData = () => {
    this.roomId = localStorage.getItem('roomId')
    this.themeTemplates = localStorage.getItem('themeTemplates')
    this.roomName = localStorage.getItem('roomName')
    this.roomPin = localStorage.getItem('roomPin')
    this.canSend = localStorage.getItem('canSend')
  }

  @action
  changeInputName = e => {
    this[e.target.name] = e.target.value
  }

  @action
  updateRoomData = e => {
    e.preventDefault()
    localStorage.setItem('roomName', this.roomName)
    localStorage.setItem('themeTemplates', this.themeTemplates)
    localStorage.setItem('canSend', this.canSend)
    localStorage.setItem('roomId', this.roomId)
  }

  @action
  handleToggleOpenSending = e => {
    this[e.target.name] = !this.canSend
  }

  @action
  handleThemeTemplate = param => {
    if (param === '0') {
      this.themeTemplates = 'blue'
    } else {
      this.themeTemplates = 'red'
    }
  }
}

const store = new Setting()

@observer
class OrgSetting extends React.Component {
  componentWillMount () {
    store.getRoomData()
  }

  render () {
    return (
      <StyledCard>

        <Row>
          <Col sm='3' />
          <Col sm='6'>
            <StyledCard>
              <form onSubmit={(store.updateRoomData)}>
                <Row>
                  <Col>
                    <InputGroup>
                      <p className='mr-2'>Room Name :</p>
                      <Input
                        type='text'
                        placeholder={store.roomName}
                        name='roomName'
                        value={store.roomName}
                        onChange={store.changeInputName}
                        outline
                      />
                    </InputGroup>
                    <InputGroup>
                      <p className='mr-2'>Room PIN :</p>
                      {store.roomPin}
                    </InputGroup>
                    <InputGroup>
                      <p className='mr-2'>Open Sending :</p>
                      <Toggle
                        checked={store.canSend}
                        onChange={store.handleToggleOpenSending}
                        name='canSend'
                      />
                    </InputGroup>
                    <InputGroup>
                      <p className='mr-2'>Theme :</p>
                      <Button color='primary' onClick={() => store.handleThemeTemplate('0')}>Blue</Button>
                      <Button color='danger' onClick={() => store.handleThemeTemplate('1')}>Red</Button>
                    </InputGroup>
                    <Button type='submit' color='success' className='float-right'>Update</Button>
                  </Col>
                </Row>
              </form>
            </StyledCard>
          </Col>
          <Col sm='3' />
        </Row>
      </StyledCard>

    )
  }
}

export default OrgSetting