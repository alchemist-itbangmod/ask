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
    // Random room code
    do {
      code = Math.floor(Math.random() * (9999 - 1000)) + 1000
      chkRoomCode = await Rooms.getOne({
        code: code
      }).then(data => data)
    } while (chkRoomCode !== null)

    // Created room
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
  // To accress room that exist
  getRoomByID: async (req, res) => {
    const roomID = req.params._id

    let returnRoomID = await Rooms.getOne({
      _id: roomID
    }).then(data => data)
    
    console.log(returnRoomID)

    if (returnRoomID === null) {
      res.json()      
    }

    else {
      res.json()  
    }
  },
  // Update existing room
  updateRoomByID: async (req, res) => {
    res.send(`Question.getQuestion with QID: ${req.params.id}`)
  },
  // Accress room by code
  getRoomByCode: async (req, res) => {
    const userCode = req.params.code

    let findCode = await Rooms.getOne({
      code: userCode
    }).then(data => data)

    // Then sent part to go to ask room with key.
    if (findCode === null) {
      res.json({
        status: false
      })
    }
    res.json({
      status: true,
      id: findCode._id
    })
  }
}
