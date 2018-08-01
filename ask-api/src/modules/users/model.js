/* eslint-disable camelcase */
import knex from 'api/utils/knex'

const tableName = 'users'

export default {
  findOrCreate: ({
    fb_id,
    first_name,
    last_name,
    email,
    access_token,
  }) => {
    return knex.transaction(trx => {
      return trx(tableName)
        .select(
          'userId',
          'first_name',
          'last_name',
          'fb_id',
          'email',
          'role',
        )
        .where({ fb_id })
        .first()
        .then(res => {
          if (res) {
            return res
          } else {
            return trx(tableName)
              .insert({
                fb_id,
                first_name,
                last_name,
                email,
                access_token,
              })
              .then(() => trx(tableName)
                .select(
                  'userId',
                  'first_name',
                  'last_name',
                  'fb_id',
                  'email',
                  'role',
                )
                .where({ fb_id })
                .first()
              )
          }
        })
    })
  },
}