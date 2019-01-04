import questionModel from 'api/modules/questions/model'
import roomnModel from 'api/modules/rooms/model'
import _ from 'lodash'

const statusCallback = {
  SUCCESS: 'SUCCESS',
  CLOSED: 'CLOSED',
  ERROR: 'ERROR',
}

export default {
  getAll: async (req, res) => {
    const questions = await questionModel
      .getAll({
        userId: req.user.userId,
      })
    res.send(questions)
  },
  getById: async (req, res) => {
    const id = req.params.id
    const questions = await questionModel.getById(id) || {}
    res.send(questions)
  },
  getByRoomId: async (req, res) => {
    const roomId = req.params.id
    const questions = await questionModel.getUnanswerQuestionByRoomId(roomId)
    res.send(questions)
  },
  getAllQuestionByRoomId: async (req, res) => {
    const roomId = req.params.id
    const questions = await questionModel.getAllByRoomId(roomId)
    res.send(questions)
  },
  update: async (req, res) => {
    const { questionIds } = req.body
    if (_.isArray(questionIds) && questionIds.length > 0) {
      const data = await questionModel.update(questionIds)
      const questions = await questionModel.findByQuestionIds(questionIds)
      req.app.io.emit('showQuestions', questions.map(question => question.question))
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
  updateIsAnswered: async (req, res) => {
    const { questions, roomId } = req.body
    if (_.isArray(questions) && !_.isEmpty(roomId) && questions.length > 0) {
      const questionIds = questions.map(ech => ech.questionId)
      const data = await questionModel.updateIsAnswered(questionIds)
      if (data) {
        req.app.io.sockets
          .in(roomId)
          .emit('presentation', { questions })
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
  create: async (req, res) => {
    const { roomId, name, anonymous, question } = req.body
    if (_.isNumber(roomId) &&
    _.isString(name) &&
    _.isBoolean(anonymous) &&
    _.isString(question)) {
      const room = await roomnModel.getById(roomId)
      if (!room) {
        res.status(500).send({ status: statusCallback.ERROR })
        return
      }

      if (room.canSend) {
        const data = await questionModel.create({ roomId, name, anonymous, question })
        req.app.io.sockets
          .in(roomId)
          .emit('monitor', { status: 200 })
        res.status(201).send({ status: data ? statusCallback.SUCCESS : statusCallback.ERROR })
      } else {
        res.send({ status: statusCallback.CLOSED })
      }
    } else {
      res.send({ status: statusCallback.ERROR })
    }
  },
}