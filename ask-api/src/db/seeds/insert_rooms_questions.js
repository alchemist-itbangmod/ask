const questionTable = 'questions'
const roomTable = 'rooms'
const userTable = 'users'

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex(questionTable).del()
    .then(() => {
      return knex(roomTable).del()
    })
    .then(() => {
      return knex(userTable).select().first()
    })
    .then((record) => {
      const userId = record.userId
      return knex(roomTable).insert([
        { roomName: 'Orientation demo', roomPin: '1234', userId },
        { roomName: 'room2', roomPin: '2345', userId },
        { roomName: 'room3', roomPin: '3456', userId },
      ])
    })
    .then(() => {
      return knex(roomTable).select().first()
    })
    .then((record) => {
      // Inserts seed entries
      const roomId = record.roomId
      return knex(questionTable).insert([
        { name: 'Papop', question: 'หิวข้าวมั้ย', roomId },
        { name: 'Fame', question: 'หิวข้าวมากมั้ย', roomId },
        { name: 'Tiny', question: 'หิวข้าวมากๆสินะ', roomId },
      ])
    })
}
