import React from 'react'
import { compose, withState, withHandlers, lifecycle } from 'recompose'
import OrgNavbar from '../components/Navbar/OrgNavbar'
import { QuestionCard, Trash } from '../styles/Global'
import instance from '../libs/axios'

const OrgMonitor = props => (
  <div>
    <OrgNavbar {...props} />
    <div className="container">
      <div className="row">
        <div className="col-12 text-center h2">
          Room name
        </div>
        <div className="col-7">
          <div className="card row">
            <div className="col-12">
              Question
            </div>
          </div>
          <div className="card">
            <div className="list-group list-group-flush">
              { props.questions.length }
              {
                props.questions.map(e => (
                  <div
                    className="row"
                    key={e}
                  >
                    <QuestionCard
                      active={props.selected}
                      onClick={props.onSelect}
                      className="list-group-item col-10"
                    >
                      Cras justo odio {e}
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
          <div>
            Selected question
          </div>
          <div className="row">
            {
              props.selectedQuestions.map(e => (
                <div key={e} className="card col-12">
                  Question {e}
                </div>
              ))
            }
          </div>
          <div className="col-12 text-center">
            <button className="btn btn-success btn-lg">SEND</button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const MonitorCompose = compose(
  withState('questions', 'setQuestions', []),
  withState('roomId', 'setRoomId', ''),
  withState('selected', 'setSel', true),
  withState('selectedQuestions', 'setSelected', []),
  lifecycle({
    async componentWillMount() {
      let id = this.props.match.params.id
      let questions = await instance.get(`/rooms/${id}/questions`)
        .then(resp => resp.data)
      console.log(questions)
    }
  }),
  withHandlers({
    onSelect: props => (e) => {
      console.log(e.target.childNodes)
      props.setSel(!props.selected)
    }
  })
)(OrgMonitor)
export default MonitorCompose
