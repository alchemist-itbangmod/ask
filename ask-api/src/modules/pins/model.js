const _ = require('lodash')
const pinRooms = [
  {
    id: 0,
    pin: '3564',
  },
  {
    id: 1,
    pin: '2984',
  },
  {
    id: 2,
    pin: '3234',
  },
]
module.exports = {
  getAll: () => {
    return pinRooms
  },
  getById: (id) => {
    const pinRoom = _.find(pinRooms, { id })
    return pinRoom
  },
  update: ({
    pin,
    id,
  }) => {
    if (!_.isEmpty(pin)) {
      const pinRoom = _.find(pinRooms, { id })
      pinRoom.pin = pin
    }
  },
}