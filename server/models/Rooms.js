const mongoose = require('mongoose')

const RoomsSchema = mongoose.Schema(
  {
    code: {
      type: String,
      require: true,
      unique: true,
      uppercase: true
    },
    title: { type: String, require: true, unique: true },
    _ownerId: mongoose.Schema.Types.ObjectId,
    imgs: {
      cover: String
    },
    deleted: { type: Boolean, default: false },
    openSending: { type: Boolean, default: false }
  },
  {
    timestamps: true,
    collection: 'rooms'
  }
)

const RoomsModel = mongoose.model('RoomsModel', RoomsSchema)

module.exports = {
  model: RoomsModel,
  create: args => {
    return new Promise(async (resolve, reject) => {
      try {
        let question = await RoomsModel.create(args)
        resolve(question)
      } catch (err) {
        reject(err)
      }
    })
  },
  getAll: args => {
    return new Promise(async (resolve, reject) => {
      try {
        let questions = await RoomsModel.find(args)
        resolve(questions)
      } catch (err) {
        reject(err)
      }
    })
  },
  getOne: args => {
    return new Promise(async (resolve, reject) => {
      try {
        let questions = await RoomsModel.findOne(args)
        resolve(questions)
      } catch (err) {
        reject(err)
      }
    })
  },
  update: args => {
    return new Promise(async (resolve, reject) => {
      try {
        let question = await RoomsModel.update(
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
        let question = await RoomsModel.findOneAndRemove(args)
        resolve(question)
      } catch (err) {
        reject(err)
      }
    })
  }
}
