import React from 'react'
import { Card, Container, Row, Col, Button, Input } from 'reactstrap'
import Toggle from 'react-toggle'

import '../../static/toggle.css'

class CreateRoomCard extends React.Component {
  render(){
    return(
      <Container>
        <Row className='m-2'>
          <Col sm='12' md={{ size: 10, offset: 1 }}>
            <Card className='p-4'>
              <form>
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
}}

export default CreateRoomCard
