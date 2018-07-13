const _ = require('lodash')

let questions = [
  { id: 0, title: 'content1', },
  { id: 1, title: 'content1', },
  { id: 2, title: 'content1', },
  { id: 3, title: 'content1', },
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
      const question = _.find(questions, { id, })
      question.title = title
    }
  },
}