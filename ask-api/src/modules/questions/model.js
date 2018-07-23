import knex from 'api/utils/knex'

const tableName = 'questions'

export default {
  getAll: () => {
    return knex(tableName)
      .select()
      .where({
        isAnswer: false,
      })
  },
  getById: (id) => {
    return knex(tableName)
      .select()
      .where({ questionId: id })
      .first()
  },
  update: (questionIds) => {
    return knex(tableName)
      .whereIn('questionId', questionIds)
      .update({
        isAnswer: true,
      })
  },
  create: ({ roomId, question, name, anonymous }) => {
    return knex(tableName)
      .insert({
        roomId, question, name, anonymous,
      })
      .returning()
  },
}
