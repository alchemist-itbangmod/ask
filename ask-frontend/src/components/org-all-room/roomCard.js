import React from 'react'
import { Card, Container, Row, Col, Button } from 'reactstrap'
import Link from 'gatsby-link'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'

@inject('allRoom')
@observer
class RoomCard extends React.Component {
  render () {
    return (
      <Container>
        {this.props.allRoom.allRooms.map((item) =>
          <Row className='mt-4' key={item.roomId}>
            <Col sm='12'>
              <Card>
                <Row>
                  <Col>
                    <h3 className='p-3'>{item.roomName}</h3>
                  </Col>
                  <Col className='text-right d-flex align-items-center justify-content-end mr-3' >
                    <Link to={`/organizer/${item.roomId}/monitor/`}>
                      <Button outline color='secondary'>
                                        Manage
                      </Button>
                    </Link>
                    <Link className='pl-3' to='/org-present-page/'>
                      <Button outline color='secondary'>
                                        Presentation
                      </Button>
                    </Link>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    )
  }
}
RoomCard.propTypes = {
  allRoom: PropTypes.shape({
    roomName: PropTypes.string.isRequired,
    allRooms: PropTypes.array.isRequired,
  }),
}

export default RoomCard