const tableName = 'rooms'

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex(tableName).del()
    .then(function () {
      // Inserts seed entries
      return knex(tableName).insert([
        { roomName: '', roomPin: '', },
        { roomName: 'room1', roomPin: '1234', },
        { roomName: 'room2', roomPin: '2345', },
        { roomName: 'room3', roomPin: '3456', },

      ])
    })
}
