import React from 'react'
import styled from 'styled-components'
import { compose, withHandlers } from 'recompose'
import axios from 'axios'

import NavOrganizer from './NavbarOrganizer'

class CreateRoomController extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      pin: '',
    }

    render() {
      return <createdRoom />
    }
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
          <div class="form-group">
            <label for="formGroupExampleInput">Example label</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input">
          </div>
        </form>
      </div>
    </div>
  </div>  
)
