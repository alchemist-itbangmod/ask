const knex = require('../../../utils/knex')

module.exports = {
  getQuestion: () => {
    return knex('questions').select()
  },
}