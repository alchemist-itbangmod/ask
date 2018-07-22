const tableName = 'rooms'

exports.up = function (knex, Promise) {
  return knex.schema.createTable(tableName, function (table) {
    table.increments('roomId')
    table.string('roomName', 250)
    table.string('roomPin', 6)
    table.boolean('canSend').notNullable().defaultTo(true)
    table.string('themeTemplate', 50)
    table.boolean('isDelete').notNullable().defaultTo(false)
    table.dateTime('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'))
    table.dateTime('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists(tableName)
}
