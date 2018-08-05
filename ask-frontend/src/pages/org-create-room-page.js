import React from 'react'
import { StyledButton } from '../components/org-all-room/styled'
import { Collapse, Card, Container, Row, Col, CardHeader } from 'reactstrap'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'

import CreateCard from '../components/org-all-room/createRoomCard'
import RoomCard from '../components/org-all-room/roomCard'

class AllRoom {
  @observable collapse = false

  @action
  toggle = () => {
    this.collapse = !this.collapse
  }
}

const store = new AllRoom()

@observer
class OrgCreateRoom extends React.Component {
  render () {
    return (
      <Container fluid>
        <Row>
          <Col xs={12}>
            <Card className='m-5 mt-2 rounded pb-4'>
              <CardHeader>
                <h3>ALL</h3>
              </CardHeader>
              <Container>
                <Row className='mt-4'>
                  <Col sm='12'>
                    <StyledButton color='primary' className='p-2' body outline block onClick={store.toggle}>
                      <h4>+ Create Room</h4>
                    </StyledButton>
                  </Col>
                </Row>
              </Container>
              <Collapse isOpen={store.collapse}>
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

export default OrgCreateRoom
