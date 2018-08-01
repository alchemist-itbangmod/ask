import React from 'react'
import { Card, Container, Row, Col, Button, Input } from 'reactstrap'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'

@inject('allRoom')
@observer
class CreateRoomCard extends React.Component {
  render () {
    return (
      <Container>
        <Row className='mt-4'>
          <Col sm='12'>
            <Card className='p-4'>
              <form onSubmit={this.props.allRoom.handleCreateRoom}>
                <Row>
                  <Col>
                    <h2>Create Room</h2>
                  </Col>
                </Row>
                <Row>
                  <Col sm='9'>
                    <Input
                      type='text'
                      className='form-control'
                      name='roomName'
                      value={this.props.allRoom.roomName}
                      onChange={this.props.allRoom.changeInputRoomName}
                      placeholder='Enter room name'
                    />
                  </Col>
                  <Col>
                    <Button type='submit' color='success' className='btn-block point'>Create</Button>
                  </Col>
                </Row>
              </form>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
CreateRoomCard.propTypes = {
  allRoom: PropTypes.shape({
    handleCreateRoom: PropTypes.func.isRequired,
    changeInputRoomName: PropTypes.func.isRequired,
    roomName: PropTypes.string.isRequired,
  }),
}
export default CreateRoomCard
