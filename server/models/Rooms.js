const mongoose = require('mongoose')

const RoomsSchema = mongoose.Schema(
  {
    code: {
      type: String,
      require: true,
      unique: true,
      uppercase: true,
    },
    title: { type: String, require: true, unique: true },
    _ownerId: Schema.Types.ObjectId,
    imgs: {
      logo: String,
      cover: String
    },
    public: Boolean,
    date: {
      start: Date,
      end: Date,
    }
  },
  {
    timestamps: true, collection: 'rooms'
  }
)

const RoomsModel = mongoose.model('RoomsModel', RoomsSchema)
