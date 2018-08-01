const tableName = 'rooms'

exports.up = function (knex, Promise) {
  return knex.schema.createTable(tableName, function (table) {
    table.increments('roomId')
    table.string('roomName', 50)
    table.string('roomPin', 6)
    table.integer('userId').unsigned().notNullable()
    table.foreign('userId').references('userId').inTable('users')
    table.boolean('canSend').notNullable().defaultTo(true)
    table.string('themeTemplate', 50).notNullable().defaultTo('default')
    table.boolean('isDelete').notNullable().defaultTo(false)
    table.dateTime('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'))
    table.dateTime('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists(tableName)
}
