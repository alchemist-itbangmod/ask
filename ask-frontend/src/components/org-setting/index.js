import React from 'react'

import { observer, inject } from 'mobx-react'
import { Input, Row, Col, InputGroup, Button } from 'reactstrap'
import Toggle from 'react-toggle'
import '../../static/toggle.css'
import PropTypes from 'prop-types'
import { StyledCard, StyledCardHeader } from './styled'

@inject('setting')

@observer
class OrgSetting extends React.Component {
  componentWillMount () {
    this.props.setting.getRoomData()
  }

  render () {
    return (
      <Row>
        <Col sm='3' />
        <Col sm='6'>
          <StyledCardHeader>Setting</StyledCardHeader>
          <StyledCard>
            <form onSubmit={this.props.setting.handleUpdateRoom}>
              <Row>
                <Col>
                  <InputGroup>
                    <p className='mr-2'>Room Name :</p>
                    <Input
                      type='text'
                      placeholder={this.props.setting.roomName}
                      name='roomName'
                      value={this.props.setting.roomName}
                      onChange={this.props.setting.changeInputName}
                    />
                  </InputGroup>
                  <InputGroup>
                    <p className='mr-2'>Room PIN :</p>
                    {this.props.setting.roomPin}
                  </InputGroup>
                  <InputGroup>
                    <p className='mr-2'>Open Sending :</p>
                    <Toggle
                      checked={this.props.setting.canSend}
                      onChange={this.props.setting.handleToggleOpenSending}
                      name='canSend'
                    />
                  </InputGroup>
                  <InputGroup>
                    <p className='mr-2'>Theme :</p>
                    <Button color='primary' onClick={() => this.props.setting.handleThemeTemplate('0')}>Blue</Button>
                    <Button color='danger' onClick={() => this.props.setting.handleThemeTemplate('1')}>Red</Button>
                  </InputGroup>
                  <Button type='submit' color='success' className='float-right'>Update</Button>
                </Col>
              </Row>
            </form>
          </StyledCard>
        </Col>
        <Col sm='3' />
      </Row>
    )
  }
}

OrgSetting.propTypes = {
  setting: PropTypes.shape({
    getRoomData: PropTypes.func.isRequired,
    updateRoomData: PropTypes.func.isRequired,
    roomName: PropTypes.string.isRequired,
    changeInputName: PropTypes.func.isRequired,
    roomPin: PropTypes.string.isRequired,
    canSend: PropTypes.bool.isRequired,
    handleToggleOpenSending: PropTypes.func.isRequired,
    handleThemeTemplate: PropTypes.string.isRequired,
    handleUpdateRoom: PropTypes.func.isRequired,
  }),
}

export default OrgSetting