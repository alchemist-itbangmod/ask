// Import mongoose
const mongoose = require('mongoose')

// RoomSchema for mongoDB 
const RoomSchema = mongoose.Schema(
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
    isDelete: { type: Boolean, default: false },
    openSending: { type: Boolean, default: false }
  },
  {
    timestamps: true,
    collection: 'rooms'
  }
)

// Import model to create model
const RoomModel = mongoose.model('RoomsModel', RoomSchema)

// Created model
module.exports = {
  model: RoomModel,
  create: args => {
    return new Promise(async (resolve, reject) => {
      try {
        let question = await RoomModel.create(args)
        resolve(question)
      } catch (err) {
        reject(err)
      }
    })
  },
  getAll: args => {
    return new Promise(async (resolve, reject) => {
      try {
        let questions = await RoomModel.find(args)
        resolve(questions)
      } catch (err) {
        reject(err)
      }
    })
  },
  getOne: args => {
    return new Promise(async (resolve, reject) => {
      try {
        let questions = await RoomModel.findOne(args)
        resolve(questions)
      } catch (err) {
        reject(err)
      }
    })
  },
  update: args => {
    return new Promise(async (resolve, reject) => {
      try {
        let question = await RoomModel.update(
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
        let question = await RoomModel.findOneAndRemove(args)
        resolve(question)
      } catch (err) {
        reject(err)
      }
    })
  }
}
