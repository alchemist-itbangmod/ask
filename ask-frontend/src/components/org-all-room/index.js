import React from 'react'
import { StyledButton } from './styled'
import { Collapse, Card, Container, Row, Col, CardHeader } from 'reactstrap'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'

import CreateCard from './createRoomCard'
import RoomCard from './roomCard'

@inject('allRoom')
@observer
class OrgCreateRoom extends React.Component {
  componentDidMount () {
    this.props.allRoom.getRooms()
  }
  render () {
    return (
      <Container fluid>
        <Row>
          <Col xs={12}>
            <Card className='m-5 mt-2 rounded pb-4'>
              <CardHeader>
                <h3>ALL Rooms</h3>
              </CardHeader>
              <Container>
                <Row className='mt-4'>
                  <Col sm='12'>
                    <StyledButton color='primary' className='p-2' outline block onClick={this.props.allRoom.toggle}>
                      <h4>+ Create Room</h4>
                    </StyledButton>
                  </Col>
                </Row>
              </Container>
              <Collapse isOpen={this.props.allRoom.collapse}>
                <CreateCard />
              </Collapse>
              <RoomCard />
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
OrgCreateRoom.propTypes = {
  allRoom: PropTypes.shape({
    toggle: PropTypes.func.isRequired,
    collapse: PropTypes.bool.isRequired,
  }),
}

export default OrgCreateRoom
