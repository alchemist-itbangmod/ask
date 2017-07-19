import React from 'react'
import { compose, withState, withHandlers } from 'recompose'
import OrgNavbar from '../components/Navbar/OrgNavbar'
import { QuestionCard, Trash } from '../styles/Global'

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
              {
                [1, 2, 3, 4, 5].map(e => (
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
              [1, 2, 3, 4, 5].map(e => (
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
  withHandlers({
    onSelect: props => (e) => {
      console.log(e.target.childNodes)
      props.setSel(!props.selected)
    },
    componentWillMount: props => (e) => {
      console.log('test')
    }
  })
)(OrgMonitor)
export default MonitorCompose
