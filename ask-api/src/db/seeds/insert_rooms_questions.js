const questionTable = 'questions'
const roomTable = 'rooms'
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex(questionTable).del()
    .then(() => {
      return knex(roomTable).del()
    })
    .then(() => {
      return knex(roomTable).insert([
        { roomName: 'room1', roomPin: '1234' },
        { roomName: 'room2', roomPin: '2345' },
        { roomName: 'room3', roomPin: '3456' },
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
