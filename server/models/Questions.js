const mongoose = require('mongoose')

const QuestionsSchema = mongoose.Schema(
  {
    roomId: mongoose.Schema.Types.ObjectId,
    question: String,
    anonymous: Boolean,
    name: String,
    isAnswer: Boolean,
    isDelete: Boolean
  },
  {
    timestamps: true,
    collection: 'questions'
  }
)

const QuestionsModel = mongoose.model('QuestionsModel', QuestionsSchema)

module.exports = {
  model: QuestionsModel,
  create: args => {
    return new Promise(async (resolve, reject) => {
      try {
        let question = await QuestionsModel.create(args)
        resolve(question)
      } catch (err) {
        reject(err)
      }
    })
  },
  getAll: args => {
    return new Promise(async (resolve, reject) => {
      try {
        let questions = await QuestionsModel.find(args)
        resolve(questions)
      } catch (err) {
        reject(err)
      }
    })
  },
  getOne: args => {
    return new Promise(async (resolve, reject) => {
      try {
        let questions = await QuestionsModel.findOne(args)
        resolve(questions)
      } catch (err) {
        reject(err)
      }
    })
  },
  update: args => {
    return new Promise(async (resolve, reject) => {
      try {
        let question = await QuestionsModel.update(
          { _id: args._id },
          { $set: args }
        )
        resolve(question)
      } catch (err) {
        reject(err)
      }
    })
  },
  remove: args => {
    return new Promise(async (resolve, reject) => {
      try {
        let question = await QuestionsModel.findOneAndRemove(args)
        resolve(question)
      } catch (err) {
        reject(err)
      }
    })
  }
}
