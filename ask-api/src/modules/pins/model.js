const _ = require('lodash')
const pinRooms = [
  {
    roomId: 0,
    roomPin: '3564',
    roomName: 'fame',
    ownerId: 0,
    canSend: 1,
    themeTemplate: 'pink',
  },
  {
    roomId: 1,
    roomPin: '2984',
    roomName: 'tiny',
    ownerId: 1,
    canSend: 1,
    themeTemplate: 'blue',
  },
  {
    roomId: 2,
    roomPin: '3234',
    roomName: 'papop',
    ownerId: 2,
    canSend: 1,
    themeTemplate: 'black',
  },
]
module.exports = {
  getRoomByPin: (id) => {
    const pinRoom = _.find(pinRooms, { id })
    return pinRoom
  },
  update: ({
    roomPin,
    id,
  }) => {
    if (!_.isEmpty(roomPin)) {
      const pinRoom = _.find(pinRooms, { id })
      pinRoom.roomPin = roomPin
    }
  },
}