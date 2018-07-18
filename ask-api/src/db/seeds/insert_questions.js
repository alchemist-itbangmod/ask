const tableName = 'questions'
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex(tableName).del()
    .then(function () {
      // Inserts seed entries
      return knex(tableName).insert([
        { name: 'Papop', question: 'หิวข้าวมั้ย', },
        { name: 'Fame', question: 'หิวข้าวมากมั้ย', },
        { name: 'Tiny', question: 'หิวข้าวมากๆสินะ', },
      ])
    })
}
