import knex from 'utils/knex'

export default {
  getCountQuestion: (roomId) => {
    return knex('questions')
      .count({
        countQuestion: ['questionId'],
      })
      .where({
        roomId: roomId,
      })
      .first()
  },
  getCountAnswered: (roomId) => {
    return knex('questions')
      .count({
        countAnswered: ['questionId'],
      })
      .where({
        roomId: roomId,
        isAnswer: true,
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