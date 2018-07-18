const knex = require('../../../utils/knex')

module.exports = {
  getAllUsers: () => {
    return knex('users')
      .select()
  },
}