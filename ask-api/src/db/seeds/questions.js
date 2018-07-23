const tableName = 'questions'
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex(tableName).del()
    .then(function () {
      // Inserts seed entries
      return knex(tableName).insert([
        { name: 'Fame', question: 'How are you today' },
        { name: 'Papop', question: 'หิวแล้ว' },
        { name: 'Tiny', question: 'เมื่อไรจะปล่อย' },
      ])
    })
}
