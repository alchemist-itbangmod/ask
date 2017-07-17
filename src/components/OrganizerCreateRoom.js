import React from 'react'
import styled from 'styled-components'
import { compose, withHandlers } from 'recompose'
import axios from 'axios'

import NavOrganizer from './NavbarOrganizer'

class CreateRoomController extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
    this.onChangeName = this.onChangeName.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  async onSubmit(e) {
    e.preventDefault()
    let resp = await axios.post(`http://localhost:3001/api/v1/rooms/${this.state.name}`)
      .then(data => data.json())
      .then(data => data)
    if (resp.state.name.length < 2) {
      console.log(`name should morethan 1 character`)
    } else {
      console.log(resp.state.name)
    }
  }

  render() {
    return (
      <CreatedRoom
        name={this.state.name}
        onChangeName={this.onChangeName}
        onSubmit={this.state.onSubmit}
      />
    )
  }
}

const CreatedRoom = props => (
  <div>
    <NavOrganizer />
    <div className="container">
      <div className="button pull-right">
        <button
          type="button"
          className="btn btn-success"
          onSubmit={e => props.onSubmit(e)}
        >Submit</button>
      </div>
      <div className="text-center">
        <form onSubmit={props.onSubmit}>
          <div className="form-group">
            <p>Create Room</p>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Room name"
              onChange={e => props.onChangeName(e)}
              value={props.name}
             />
          </div>
        </form>
      </div>
    </div>
  </div>
)

export default CreateRoomController
