const tableName = 'questions'

exports.up = function (knex, Promise) {
  return knex.schema.createTable(tableName, function (table) {
    table.increments('questionId')
    table.string('name', 50)
    table.string('question', 250)
    table.boolean('anonymous').notNullable().defaultTo(false)
    table.boolean('isAnswer').notNullable().defaultTo(false)
    table.integer('roomId').unsigned().notNullable()
    table.foreign('roomId').references('roomId').inTable('rooms')
    table.dateTime('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'))
    table.dateTime('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists(tableName)
}
