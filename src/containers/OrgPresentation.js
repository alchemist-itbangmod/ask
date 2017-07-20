import React from 'react'
import { TagCloud } from 'react-tagcloud'
import { compose, withState, withHandlers, lifecycle } from 'recompose'
import socket from '../libs/socket'

import {
  AbsoluteCenterContainer,
  StyledTag
} from '../styles/OrgPresentation.js'

const data = [{ _id: 7, value: '"WE ARE ASK"', count: 30 }]

const TagCloudAbsolute = AbsoluteCenterContainer(TagCloud)

const Tag = (tag, size, color) => (
  <StyledTag
    key={tag._id}
    size={size}
  >
    {tag.value}
  </StyledTag>
)

const OrgPresentation = props => {
  return (
    <div>
      <div className="container-fluid" style={{ height: '100vh' }}>
        <TagCloudAbsolute
          className="text-center"
          minSize={28}
          maxSize={48}
          tags={props.question}
          renderer={Tag}
        />
      </div>
    </div>
  )
}

const OrgPresentationCompose = compose(
  withState('question', 'setQuestion', data),
  withState('active', 'setActive', false),
  withHandlers({
    fetchQuestion: props => (questions) => {
      let newQ = questions.map(q => {
        return {
          _id: q._id,
          value: `"${q.question}"`,
          count: (Math.random() * 8) + 25
        }
      })
      props.setQuestion(newQ)
    }
  }),
  lifecycle({
    async componentDidMount() {
      let roomId = this.props.match.params.id
      // Signup the `room`
      socket.on('connect', function() {
        socket.emit('room', roomId)
      })
      // Get data from 'monitor' in the `room`
      socket.on('presentation', (data) => {
        if (data.status === 200) {
          this.props.fetchQuestion(data.data)
        }
      })
    }
  })
)(OrgPresentation)

export default OrgPresentationCompose
