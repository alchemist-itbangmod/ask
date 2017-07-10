import React from 'react'
import styled from 'styled-components'
import localforage from 'localforage'

// HOC
import repuireAsker from '../libs/requireAsker'

import Navbar from './Navbar'

// style.css componemt
const NameInput = styled.input`
  border: 1px;
  border-radius: 22px;
  background: #EFEFEF;
  font-weight: 200;
`
const JoinButton = styled.button`
  background-color: #FF4312;
  border: 0;
  border-radius: 22px;
  padding-top: 8px;
  padding-bottom: 8px; 
`

class JoinPageContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pin: '',
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
    if (this.state.name.length < 2) {
      console.log(`name should morethan 1 character`)
    } else {
      await localforage.setItem('name', this.state.name)
      this.props.history.push('/ask')
    }
  }

  render() {
    if (this.props.pin === '') {
      return <div />
    }
    return <JoinPage
      name={this.state.name}
      onSubmit={this.onSubmit}
      onChangeName={this.onChangeName}
    />
  }
}

const JoinPage = props =>
  <div>
    <Navbar />
    <div className="container" style={{ marginTop: '200px' }}>
      <div className="text-center">
        <form onSubmit={props.onSubmit}>
          <div className="form-group">
            <NameInput
              className="text-center form-control"
              type="text"
              placeholder="Enter your name ..."
              onChange={e => props.onChangeName(e)}
              value={props.name}
            />
          </div>
          <JoinButton
            type="submit"
            className="btn btn-primary btn-sm btn-block"
          >JOIN</JoinButton>
        </form>
      </div>
    </div>
  </div>

export default repuireAsker()(JoinPageContainer)
