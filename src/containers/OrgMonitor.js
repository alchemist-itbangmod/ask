import React from 'react'
import { compose, withState, withHandlers, lifecycle } from 'recompose'
import { QuestionCard, Trash, Div } from '../styles/Global'
import instance from '../libs/axios'
import requireAuth from '../libs/requireAuth'
import withNavbar from '../libs/withNavbar'

const OrgMonitor = props => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-12 text-center h2 text-white">
          Room name
        </div>
        <div className="col-7">
          <div className="card row">
            <div className="col-12 row">
              <div className="col-10 h3">
                Question
              </div>
              <button
                className="col-2"
                onClick={props.fetchQuestions}
              >
                Refresh
              </button>
            </div>
          </div>
          <div className="card">
            <div className="list-group list-group-flush">
              {
                props.questions.map((q, index) => (
                  <div
                    className="row"
                    key={q._id}
                  >
                    <QuestionCard
                      onClick={props.onSelect}
                      active={props.selectedQuestions.find(sq => sq === q) !== undefined}
                      className="list-group-item col-10"
                      id={q._id}
                    >
                      { q.question }
                    </QuestionCard>
                    <span className="fa fa-user" />
                    <Trash className="fa fa-user col-2" >Delete</Trash>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className="col-5">
          <div className="h3 card">
            Selected question
          </div>
          {
            props.selectedQuestions.map(q => (
              <div key={q._id} className="card col-12">
                {q.question}
              </div>
            ))
          }
          <div className="col-12 text-center">
            <button className="btn btn-success btn-lg">SEND</button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const MonitorCompose = compose(
  requireAuth(),
  withNavbar(),
  withState('questions', 'setQuestions', []),
  withState('roomId', 'setRoomId', ''),
  withState('selectedQuestions', 'setSelected', []),
  lifecycle({
    async componentWillMount() {
      let id = this.props.match.params.id
      let questions = await instance.get(`/rooms/${id}/questions`)
        .then(resp => resp.data.data.allQuestion)
        // console.log(questions)
      this.props.setQuestions(questions)
    }
  }),
  withHandlers({
    onSelect: props => (e) => {
      let id = e.target.id
      let questions = props.questions
      let select = questions.find(q => q._id === id)
      let selectedQuestions = props.selectedQuestions
      /*
       * monitor cannot select question more than 5
       */
      if (selectedQuestions.length <= 4 && selectedQuestions.find(q => q === select) === undefined) {
        selectedQuestions.push(select)
      } else {
        selectedQuestions = selectedQuestions.filter(q => q !== select)
      }
      props.setSelected(selectedQuestions)
    },
    fetchQuestions: props => async (e) => {
      let id = props.match.params.id
      let questions = await instance.get(`/rooms/${id}/questions`)
        .then(resp => resp.data.data.allQuestion)
      props.setQuestions(questions)
    }
  })
)(OrgMonitor)

export default MonitorCompose
