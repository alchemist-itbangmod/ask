import questionModel from './model'

export default {
  getQuestion: async (req, res) => {
    const questions = await questionModel
      .getQuestion(req.params.id)
    const asker = await questionModel
      .getAsker(req.params.id)
    res.send(Object.assign({}, questions, asker))
  },
  getAsker: async (req, res) => {
    const asker = await questionModel
      .getAsker(req.params.id)
    res.send(asker)
  },
}