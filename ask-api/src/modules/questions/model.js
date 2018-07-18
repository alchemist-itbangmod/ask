const knex = require('../../utils/knex')

module.exports = {
  getAll: () => {
    return knex('questions').select()
  },
  getById: (id) => {
    return knex('questions')
      .select()
      .where({ questionId: id, })
      .first()
  },
  update: ({
    questionId,
    name,
  }) => {
    return knex('question')
      .update({
        name,
      })
      .where({
        questionId,
      })
      .returning()
  },
}
