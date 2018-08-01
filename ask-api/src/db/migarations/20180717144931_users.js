const tableName = 'users'

exports.up = function (knex, Promise) {
  return knex.schema.createTable(tableName, function (table) {
    table.increments('userId')
    table.string('first_name', 50)
    table.string('last_name', 50)
    table.string('email', 100)
    table.string('fb_id', 30)
    table.text('access_token')
    table.enum('role', ['member', 'god']).notNullable().defaultTo('member')
    table.dateTime('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'))
    table.dateTime('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists(tableName)
}