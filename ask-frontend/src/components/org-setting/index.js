import React from 'react'

import { observer, inject } from 'mobx-react'
import { Input, Row, Col, FormGroup, Button, Label, Form, CustomInput } from 'reactstrap'
import Toggle from 'react-toggle'
import '../../static/toggle.css'
import PropTypes from 'prop-types'
import { StyledCard } from './styled'

@inject('setting')

@observer
class OrgSetting extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }),
  }

  get roomId () {
    return this.props.match.params.id
  }

  componentDidMount () {
    this.props.setting.getRoomData({ roomId: this.roomId })
  }

  render () {
    return (
      <Row className='pt-4'>
        <Col sm='3' />
        <Col sm='6'>
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
                {['red', 'blue', 'green'].map(theme => (
                  <CustomInput
                    key={theme}
                    id={theme}
                    label={theme}
                    type='radio'
                    name='theme'
                    value={theme}
                    onChange={this.props.setting.handleThemeTemplate}
                    checked={theme === this.props.setting.themeTemplate}
                  />
                ))}

              </FormGroup>
              <Button type='submit' color='success' className='float-right'>Update</Button>

            </Form>
          </StyledCard>
        </Col>
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
    themeTemplate: PropTypes.string.isRequired,
    handleToggleOpenSending: PropTypes.func.isRequired,
    handleThemeTemplate: PropTypes.string.isRequired,
    handleUpdateRoom: PropTypes.func.isRequired,
  }),
}

export default OrgSetting