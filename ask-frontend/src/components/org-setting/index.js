import React from 'react'
import { observable, action } from 'mobx'
import { Input, Row, Col, InputGroup, Button } from 'reactstrap'
import Toggle from 'react-toggle'
import { observer } from 'mobx-react'
import '../../static/toggle.css'

class Setting {
  @observable roomPin = ''
  @observable themeTemplates = ''
  @observable roomName = ''
  @observable roomId = 0
  @observable themeId = 0
  @observable canSend = false

  @action
  getRoomData = () => {
    localStorage.getItem('roomId')
    localStorage.getItem('themeTemplates')
    localStorage.getItem('roomName')
    localStorage.getItem('roomPin')
    localStorage.getItem('canSend')
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
}

const store = new Setting()

@observer
class OrgSetting extends React.Component {
  componentWillMount () {
    store.getRoomData()
  }

  render () {
    return (
      <Row className='mt-2'>
        <Col>
          <form onSubmit={(store.updateRoomData)}>
            <InputGroup>
              <p className='mr-2'>Room Name :</p>
              <Input
                type='text'
                placeholder={store.roomName}
                name='roomName'
                value={store.roomName}
                onChange={store.changeInputName}
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
              <p>themes</p>
            </InputGroup>
            <Col sm={{ size: 6, order: 2, offset: 7 }}>
              <Button className='' type='submit' color='success'>Update</Button>
            </Col>
          </form>
        </Col>

      </Row>
    )
  }
}

export default OrgSetting