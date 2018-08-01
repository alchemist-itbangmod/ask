import knex from 'api/utils/knex'

const tableName = 'revoke_token'

export default {
  findRevokeToken: (token) => {
    return knex(tableName)
      .select()
      .where({ token })
      .first()
  },
  insertRevoke: (token) => {
    return knex(tableName)
      .insert({ token })
      .returning()
  },
}