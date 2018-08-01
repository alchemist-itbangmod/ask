import knex from 'utils/knex'

export default {
  getQuestion: () => {
    return knex('questions').select()
  },
  getAsker: () => {
    return knex('questions')
      .countDistinct({
        countUser: ['name'],
      })
      .where({
        roomId: 1,
      })
      .first()
  },
}