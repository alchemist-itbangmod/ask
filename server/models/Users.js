const mongoose = require('mongoose')

const UsersSchema = mongoose.Schema(
  {
    displayName: String,
    email: { type: String, unique: true },
    facebookProviderId: { type: String, unique: true, require: true },
    telNo: String,
    avatarUrl: String
  },
  {
    timestamps: true,
    collection: 'users'
  }
)

const UsersModel = mongoose.model('UsersModel', UsersSchema)
