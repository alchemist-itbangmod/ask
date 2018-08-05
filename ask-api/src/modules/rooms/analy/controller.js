import analystModel from './model'

export default {
  analyst: async (req, res) => {
    const questions = await analystModel
      .getCountQuestion(req.params.id)
    const answered = await analystModel
      .getCountAnswered(req.params.id)
    const asker = await analystModel
      .getAsker(req.params.id)
    res.send(Object.assign({}, questions, asker, answered))
  },
}