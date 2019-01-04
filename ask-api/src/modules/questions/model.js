import knex from 'api/utils/knex'

const tableName = 'questions'

export default {
  getAll: ({
    userId,
  }) => {
    return knex(tableName)
      .select()
      .where({
        isAnswer: false,
        userId,
      })
  },
  getById: (id) => {
    return knex(tableName)
      .where({ questionId: id })
      .first()
  },
  getAllByRoomId: (roomId) => {
    return knex(tableName)
      .where({ roomId })
      .select()
  },
  getUnanswerQuestionByRoomId: (roomId) => {
    return knex(tableName)
      .where({
        roomId,
        isAnswer: false,
      })
      .select()
  },
  findByQuestionIds: (questionIds) => {
    return knex(tableName)
      .whereIn('questionId', questionIds)
      .select()
  },
  update: (questionIds) => {
    return knex(tableName)
      .whereIn('questionId', questionIds)
      .update({
        isAnswer: true,
      })
  },
  updateIsAnswered: (questionIds) => {
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
