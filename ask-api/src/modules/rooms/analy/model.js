import knex from 'utils/knex'

export default {
  getQuestion: (roomId) => {
    return knex('questions')
      .count({
        countQuestion: ['questionId'],
      })
      .where({
        roomId: roomId,
      })
      .first()
  },
  getAsker: (roomId) => {
    return knex('questions')
      .countDistinct({
        countUser: ['name'],
      })
      .where({
        roomId: roomId,
      })
      .first()
  },
}