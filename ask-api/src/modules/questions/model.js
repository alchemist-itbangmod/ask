const knex = require('../../utils/knex')

module.exports = {
  getAll: () => {
    return knex('questions')
      .select()
      .where({
        isAnswer: false,
      })
  },
  getById: (id) => {
    return knex('questions')
      .select()
      .where({ questionId: id })
      .first()
  },
  update: (questionIds) => {
    return knex('questions')
      .whereIn('questionId', questionIds)
      .update({
        isAnswer: true,
      })
  },
}
