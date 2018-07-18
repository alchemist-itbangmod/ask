const knex = require('../../utils/knex')
const _ = require('lodash')

const findByPin = (pin) => {
  return knex('rooms')
    .select()
    .where({
      roomPin: pin,
    })
    .first()
}

const genPin = () => {
  const max = 9
  const min = 0
  const rand = []

  for (let i = 0; i < 4; i++) {
    rand[i] = Math.floor(Math.random() * (max - min + 1) + min)
  }
  return rand.join('')
}

module.exports = {
  getAll: () => {
    return knex('rooms').select()
      .select()
      .where({
        isDelete: false,
      })
  },
  getById: (id) => {
    return knex('rooms')
      .select()
      .where({ roomId: id, })
      .first()
  },
  update: ({
    roomId,
    roomName,
    canSend,
  }) => {
    return knex('rooms')
      .update({
        roomName,
        canSend,
      })
      .where({
        roomId,
      })
      .returning()
  },
  updateDelete: (roomId) => {
    return knex('rooms')
      .update({
        isDelete: true,
      })
      .where({
        roomId,
      })
      .returning()
  },
  create: async roomName => {
    let pin
    let data
    do {
      pin = genPin()
      console.log(pin)
      data = await findByPin(pin)
    } while (!_.isEmpty(data))
    return knex('rooms')
      .insert({
        roomName,
        roomPin: pin,
      })
      .returning()
  },
}
