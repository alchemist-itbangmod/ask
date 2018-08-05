import knex from 'api/utils/knex'
import _ from 'lodash'

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

export default {
  getAll: ({
    userId,
  }) => {
    return knex('rooms').select()
      .select()
      .where({
        isDelete: false,
        userId,
      })
  },
  getById: (id) => {
    return knex('rooms')
      .select()
      .where({ roomId: id })
      .first()
  },
  update: ({
    roomId,
    roomName,
    canSend,
    themeTemplate,
  }) => {
    return knex('rooms')
      .update({
        roomName,
        canSend,
        themeTemplate,
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
  getRoomByPin: (pin) => {
    return findByPin(pin)
  },
  create: async ({
    roomName,
    userId,
  }) => {
    let pin
    let data
    do {
      pin = genPin()
      data = await findByPin(pin)
    } while (!_.isEmpty(data))
    return knex('rooms')
      .insert({
        roomName,
        roomPin: pin,
        userId,
      })
      .returning()
  },
}
