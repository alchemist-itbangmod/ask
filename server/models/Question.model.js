// Import mongoose
const mongoose = require('mongoose')

// Question Schaema for mongoDB 
const QuestionsSchema = mongoose.Schema(
  {
    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      require: true
    },
    question: {
      type: String,
      require: true
    },
    anonymous: { type: Boolean, default: true },
    name: {
      type: String,
      require: true
    },
    isAnswer: { type: Boolean, default: false },
    isDelete: { type: Boolean, default: false }
  },
  {
    timestamps: true,
    collection: 'questions'
  }
)
// Import model to create model
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
