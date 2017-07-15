import React from 'react'
import styled from 'styled-components'
import { compose, withHandlers } from 'recompose'
import axios from 'axios'

import NavOrganizer from './NavbarOrganizer'

const Card = styled.button`
  padding: 20px;
  margin: 10px 0;
  display: block;
`

class DashboardController extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rooms: []
    }
    this.createRoom = this.createRoom.bind(this)
  }
  createRoom() {
    let rooms = this.Rooms.getAll()
    console.log(rooms)
  }

  render() {
    return (
      <OrganizerRooms
        rooms={this.state.rooms}
       />
    )
  }
}

const OrganizerRooms = props => (
  <div>
    <NavOrganizer />
    <div className="container">
      <div className="button pull-right">
        <button type="button" className="btn btn-success">Created Room</button>
      </div>
      <h4>List of Rooms</h4>
      <div>
        {
          props.rooms.map(e => (
            <Card className="card col-12 btn" key={e}>
              RoomName {e}
            </Card>
          ))
        }
      </div>
    </div>
  </div>
)

export default DashboardController
