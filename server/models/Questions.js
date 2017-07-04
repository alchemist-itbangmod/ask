const mongoose = require('mongoose')

const QuestionsSchema = mongoose.Schema(
  {
    roomId: Schema.Types.ObjectId,
    userId: Schema.Types.ObjectId,
    question: String,
    answered: Boolean,
    anonymous: Boolean
  },
  {
    timestamps: true,
    collection: 'questions'
  }
)

const QuestionsModel = mongoose.model('QuestionsModel', QuestionsSchema)
