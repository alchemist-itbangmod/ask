import React from 'react'
import { TagCloud } from 'react-tagcloud'
import { compose, withState, withHandlers, lifecycle } from 'recompose'
import instance from '../libs/axios'
import socket from '../libs/socket'

import {
  Container,
  AbsoluteCenterContainer,
  StyledTag
} from '../styles/OrgPresentation.js'

const title = `#ASK 2.0 | presentation - `

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
      <Container className="container-fluid">
        <TagCloudAbsolute
          className="text-center"
          minSize={48}
          maxSize={68}
          tags={props.question}
          renderer={Tag}
        />
      </Container>
    </div>
  )
}

const OrgPresentationCompose = compose(
  withState('title', 'setTitle', ''),
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
    async componentWillMount() {
      let id = this.props.match.params.id
      let room = await instance.get(`/rooms/${id}`)
        .then(resp => resp.data.data.room)
      this.props.setTitle(room.title)
      document.title = `${title}${this.props.title}`
    },
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
