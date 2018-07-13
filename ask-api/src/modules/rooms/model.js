const _ = require('lodash')

const rooms = [
  {
    id: 1,
    title: 'test',
  },
  {
    id: 2,
    title: 'temp',
  },
]

module.exports = {
  getAll: () => {
    return rooms
  },
  getById: (id) => {
    const room = _.find(rooms, { id, })
    return room
  },
  update: ({
    title,
    id,
  }) => {
    if (!_.isEmpty(title)) {
      const room = _.find(rooms, { id, })
      room.title = title
    }
  },
}