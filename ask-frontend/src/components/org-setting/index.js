import React from 'react'

import { observer, inject } from 'mobx-react'
import { Input, Row, Col, FormGroup, Button, Label, Form, CustomInput } from 'reactstrap'
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
        <Col sm='2' />
        <Col sm='8'>
          <StyledCardHeader>Setting</StyledCardHeader>
          <StyledCard>
            <Form onSubmit={this.props.setting.handleUpdateRoom}>

              <FormGroup row>
                <Label sm={3}>Room Name</Label>
                <Col sm={6}>
                  <Input
                    type='text'
                    placeholder={this.props.setting.roomName}
                    name='roomName'
                    value={this.props.setting.roomName}
                    onChange={this.props.setting.changeInputName}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label sm={3}>Room Pin</Label>
                <Label sm={6}>{this.props.setting.roomPin}</Label>
              </FormGroup>

              <FormGroup row>
                <Label sm={3}>Open Sending</Label>
                <Col sm={6}>
                  <Toggle
                    checked={this.props.setting.canSend}
                    onChange={this.props.setting.handleToggleOpenSending}
                    name='canSend'
                  />
                </Col>
              </FormGroup>

              <FormGroup>
                <Label >Theme</Label>
                <div>
                  <CustomInput
                    type='radio'
                    value='red'
                    id='red'
                    name='themeTemplate'
                    onChange={this.props.setting.handleThemeTemplate}
                    label='Red' />
                  <CustomInput
                    type='radio'
                    value='blue'
                    id='blue'
                    name='themeTemplate'
                    onChange={this.props.setting.handleThemeTemplate}
                    label='Blue' />
                </div>

              </FormGroup>
              <Button type='submit' color='success' className='float-right'>Update</Button>

            </Form>
          </StyledCard>
        </Col>
        <Col sm='2' />
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