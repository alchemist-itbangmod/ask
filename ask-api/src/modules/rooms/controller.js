const roomModel = require('./model')
const _ = require('lodash')
module.exports = {
  getAll: async (req, res) => {
    const rooms = await roomModel.getAll()
    res.send(rooms)
  },
  getById: async (req, res) => {
    const id = req.params.id
    const rooms = await roomModel.getById(id) || {}
    res.send(rooms)
  },
  createRoom: async (req, res) => {
    const { roomName, } = req.body
    if (_.isString(roomName)) {
      const data = await roomModel.create(roomName)
      console.log(data)
      if (data) {
        res.send({
          status: 'success',
        })
      } else {
        res.send({
          status: 'fail',
        })
      }
    } else {
      res.send({
        status: 'fail',
      })
    }
  },
  update: async (req, res) => {
    const id = req.params.id
    const { roomName, canSend, } = req.body
    if (_.isString(roomName) && _.isBoolean(canSend)) {
      const data = await roomModel.update({

        roomId: id,
        roomName,
        canSend,
      })
      console.log('data', data)
      if (data) {
        res.send({
          status: 'success',
        })
      } else {
        res.send({
          status: 'fail',
        })
      }
    } else {
      res.send({
        status: 'fail',
      })
    }
  },
  delete: async (req, res) => {
    const id = req.params.id
    const data = await roomModel.updateDelete(id)
    if (data) {
      res.send({
        status: 'success',
      })
    } else {
      res.send({
        status: 'fail',
      })
    }
  },
}