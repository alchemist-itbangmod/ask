import React from 'react'
import styled from 'styled-components'
import { compose, withHandlers } from 'recompose'
import axios from 'axios'

import NavOrganizer from './NavbarOrganizer'

class CreateRoomController extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      pin: ''
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
    if (this.state.name.length < 2) {
      console.log(`name should morethan 1 character`)
    } else {
     // await localforage.setItem('name', this.state.name)
      this.props.history.push('/organizer/dashboard')
    }
  }

  render() {
    return (
      <createdRoom />
    )
  }
}

const createdRoom = props => (
  <div>
    <NavOrganizer />
    <div className="container">
      <div className="button pull-right">
        <button type="button" className="btn btn-success">Created room</button>
      </div>
      <div className="text-center">
        <form>
          <div className="form-group">
            <p>Room name</p>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Room name" />
          </div>
        </form>
      </div>
    </div>
  </div>
)

export default CreateRoomController
