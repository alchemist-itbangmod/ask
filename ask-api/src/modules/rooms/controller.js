import roomModel from 'api/modules/rooms/model'
import _ from 'lodash'

export default {
  getAll: async (req, res) => {
    const rooms = await roomModel
      .getAll({
        userId: req.user.userId,
      })
    res.send(rooms)
  },
  getById: async (req, res) => {
    const id = req.params.id
    const rooms = await roomModel.getById(id) || {}
    res.send(rooms)
  },
  createRoom: async (req, res) => {
    const { roomName } = req.body
    if (_.isString(roomName)) {
      const data = await roomModel.create(roomName)
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
    const { roomName, canSend, themeTemplate } = req.body
    if (_.isString(roomName) && _.isBoolean(canSend) && _.isString(themeTemplate)) {
      const data = await roomModel.update({
        roomId: id,
        roomName,
        canSend,
        themeTemplate,
      })
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
  getRoomByPin: async (req, res) => {
    const pin = req.params.pin
    const room = await roomModel.getRoomByPin(pin) || {}
    res.send(room)
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