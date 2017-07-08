// IMPORT MODELS
const Rooms = require('../models/Rooms')

// QUESTIONS CONTROLLER
module.exports = {
  getAll: async (req, res) => {
    let rooms = await Rooms.getAll({})
      .then(data => data)
    res.json(rooms)
  },
  create: async (req, res) => {
    let code, chkRoomCode
    do {
      code = Math.floor(Math.random() * (9999 - 1000)) + 1000
      chkRoomCode = await Rooms.getOne({
        code: code
      }).then(data => data)
    } while (chkRoomCode !== null)

    let result = await Rooms.create({
      code: code,
      title: req.body.title,
      // _ownerId: req.user.id,
      imgs: {
        cover: req.body.coverImg
      }
    })
    .then(data => data)
    .catch(err => err)

    res.json(result)
  },
  getQuestions: async (req, res) => {
    res.send('Question.getQuestions')
  },
  getQuestion: async (req, res) => {
    res.send(`Question.getQuestion with QID: ${req.params.id}`)
  },
  send: async (req, res) => {
    res.send('Question.send')
  }
}
