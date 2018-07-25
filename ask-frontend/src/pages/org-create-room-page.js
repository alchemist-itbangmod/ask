import React from 'react'

import CreateCard from '../components/org-all-room/createRoomCard'
import RoomCard from '../components/org-all-room/roomCard'

const OrgCreateRoom = props => (
  <div>
    <h3 className='mt-5'>Card to Create</h3>
    <CreateCard />
    <RoomCard/>
  </div>
)

export default OrgCreateRoom
