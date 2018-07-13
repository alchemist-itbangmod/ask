const _ = require('lodash')

let questions = [
  { id: 0, title: 'content1', },
  { id: 1, title: 'content2', },
  { id: 2, title: 'content3', },
  { id: 3, title: 'content4', },
]

module.exports = {
  getAll: () => {
    return questions
  },
  getById: (id) => {
    const question = _.find(questions, { id, })
    return question
  },
  update: ({
    title,
    id,
  }) => {
    if (!_.isEmpty(title)) {
      questions.findIndex(ech => ech.id === id)
      const question = _.find(questions, { id, })
      if (!_.isEmpty(question)) {
        question.title = title
        return question
      }
    }
    return null
  },
}