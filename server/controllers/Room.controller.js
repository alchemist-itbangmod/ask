const mongoose = require('mongoose')

// IMPORT MODELS
const Room = require('../models/Room.model')

// Room model
module.exports = {
  // Get all room in database
  getAll: async (req, res) => {
    let allRoom // To get all room in database

    // Getting all room in database
    allRoom = await Room.getAll({})
      .then(data => data)
      .catch(err => err)
    res.json(allRoom)
  },
  // Create new room
  create: async (req, res) => {
    let code  // Room code that has been generated
    let checkCode // To check that code is sucessful generated
    let result // The final room created

    // Random rood code with 4 digit decimal number
    do {
      code = Math.floor(Math.random() * (9999 - 1000)) + 1000
      checkCode = await Room.getOne({
        code: code
      }).then(data => data)
    } while (checkCode !== null)

    // Create room
    result = await Room.create({
      code: code,
      title: req.body.title,
      // _ownerId: req.user.id,
      imgs: {
        cover: req.body.coverImg
      },
      openSending: {
        openSending: req.body.openSending
      }
    })
    .then(data => data)
    .catch(err => err)
    res.json(result)
  },
  // Accress room by roomID
  getRoomIDbyCode: async (req, res) => {
    const roomCode = req.params.code // Room id that user asked
    let roomID // To get room id that appear in database

    roomID = await Room.getOne({
      code: roomCode
    }).then(data => data)

    // Check that found room or not
    if (roomID === null) {
      res.json({
        status: false
      })
    } else {
      res.json({
        status: true,
        data: {
          roomId: roomID._id
        }
      })
    }
  },
  // Accress room by code
  getRoomByID: async (req, res) => {
    const roomId = req.params.id // Input code from user
    let room // Found room in database

    // Getting room from database
    room = await Room.getOne({
      _id: new mongoose.Types.ObjectId(roomId)
    }).then(data => data)
    console.log('RoomStatus:', room)
    // Then sent part to go to ask room with key.
    if (room === null || room.isDelete) {
      res.json({
        status: false
      })
      return
    }
    res.json({
      status: true,
      data: {
        room
      }
    })
  },
  // Update existing room
  updateRoomByID: async (req, res) => {
    // Imput from user
    let reqId = req.body.id
    let title = req.body.title
    let openSending = req.body.openSending

    // Finding room in database
    let chkRoom = await Room.getOne({
      _id: reqId
    }).then(data => data)

    if (chkRoom === null) { // Room does not exists
      res.json({
        status: false,
        message: 'Room dose not exists'
      })
    } else {
      await Room.update({
        _id: reqId,
        title: title,
        openSending: openSending
      }).then(data => data)
      res.json({
        status: true,
        message: 'update data success!'
      })
    }
  },
  // Deleting room
  updateIsDelete: async (req, res) => {
    let reqId = req.body.getidbodynaja

    let chkRoom = await Room.getOne({
      _id: reqId
    }).then(data => data)

    if (chkRoom === null) { // Room does not exists
      res.json({
        status: false,
        message: 'Room dose not exists'
      })
    } else {
      await Room.update({
        _id: reqId,
        isDelete: true
      }).then(data => data)
      res.json({
        status: true,
        message: 'the room was deleted'
      })
    }
  }
}
