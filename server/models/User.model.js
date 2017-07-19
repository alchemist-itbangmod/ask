const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UsersSchema = mongoose.Schema(
  {
    displayName: { type: String, default: 'Alpaca' },
    email: { type: String, unique: true, require: true },
    password: { type: String, require: true },
    telNo: String,
    avatarUrl: { type: String, default: 'https://upload.wikimedia.org/wikipedia/commons/7/70/KnapperAlpakkaCorazonFull.jpg' },
    roles: [{
      type: String
    }]

  },
  {
    timestamps: true,
    collection: 'users'
  }
)

const UsersModel = mongoose.model('UsersModel', UsersSchema)

module.exports = {
  model: UsersModel,
  create: args => {
    return new Promise(async (resolve, reject) => {
      try {
        let hash = await bcrypt.hash(args.password, 10)
        args.password = hash
        let question = await UsersModel.create(args)
        resolve(question)
      } catch (err) {
        reject(err)
      }
    })
  },
  getAll: args => {
    return new Promise(async (resolve, reject) => {
      try {
        let questions = await UsersModel.find(args)
        resolve(questions)
      } catch (err) {
        reject(err)
      }
    })
  },
  getOne: args => {
    return new Promise(async (resolve, reject) => {
      try {
        let questions = await UsersModel.findOne(args)
        resolve(questions)
      } catch (err) {
        reject(err)
      }
    })
  },
  update: args => {
    return new Promise(async (resolve, reject) => {
      try {
        let question = await UsersModel.update(
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
        let question = await UsersModel.findOneAndRemove(args)
        resolve(question)
      } catch (err) {
        reject(err)
      }
    })
  }
}
