import questionModel from './model'

export default {
  getQuestion: async (req, res) => {
    const questions = await questionModel.getQuestion()
    res.send(questions)
  },
  getAsker: async (req, res) => {
    const asker = await questionModel.getAsker()
    res.send(asker)
  },
}