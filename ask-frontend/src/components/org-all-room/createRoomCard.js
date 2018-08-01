import React from 'react'
import { Card, Container, Row, Col, Button, Input } from 'reactstrap'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'

class Create {
  @observable roomName = ''

  @action
  changeInputRoomName = async (e) => {
    this.roomName = e.target.value
  }

  @action
  handleCreateRoom = async (e) => {
    e.preventDefault()
    localStorage.setItem('roomName', this.roomName)
  }
}
const store = new Create()

@observer
class CreateRoomCard extends React.Component {
  render () {
    return (
      <Container>
        <Row className='mt-4'>
          <Col sm='12'>
            <Card className='p-4'>
              <form onSubmit={store.handleCreateRoom}>
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
                      value={store.roomName}
                      onChange={store.changeInputRoomName}
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

export default CreateRoomCard
