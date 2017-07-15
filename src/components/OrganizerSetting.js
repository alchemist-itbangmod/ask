import React from 'react'
import styled from 'styled-components'

import Toggle from 'react-toggle'
import '../static/toggle.css'

const ToggleStyled = styled.span`
  color: white;
  position: absolute;
  top: 4px;
  left: 6px;
  font-size: 20px;
`

const Div = styled.div`
  font-size: 40px;
  background: white;
  margin-top: 2.5vh;
  border-radius: 20px;
  height: 95vh;
  position: relative;
`
const WithBorder = styled.div`
  border-bottom: 1px solid gray;
  height: 80px;
  padding-top: 5px;
  
`
const Pin = styled.input`
  width: 100px;
  background: lightgray;
`

const PreviousMenu = styled.span`
  position: absolute;
  left: 30px;
  top: 15px;
  font-weight: bold;
`

const SaveMenu = styled.span`
  position: absolute;
  top: 15px;
  right: 30px;
  font-weight: bold;
`

class OrganizeSettingContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      roomName: 'ปฐมนิเทศ คณะเทคโนโลยีสารสนเทศ'.trim(),
      sending: true,
      pin: 1010
    }
    this.changeToggle = this.changeToggle.bind(this)
  }

  changeToggle() {
    this.setState({ sending: !this.state.sending })
  }

  render() {
    return (
      <div>
        <Div className="container" >
          <WithBorder className="row h1 text-center">
            <div className="col-12">{ this.state.roomName }</div>
            <PreviousMenu className="fa fa-angle-left text-primary" />
            <SaveMenu className="fa fa-save text-primary" />
          </WithBorder>
          <WithBorder className="row">
            <div className="col-10">
              PIN:
            </div>
            <div className="col-2 text-right">
              <Pin readOnly value={this.state.pin} />
            </div>
          </WithBorder>
          <WithBorder className="row">
            <div className="col-10">
              OPEN SENDING:
            </div>
            <div className="col-2 text-right">
              <Toggle
                defaultChecked={this.state.sending}
                icons={{
                  checked: <ToggleStyled>ON</ToggleStyled>,
                  unchecked: <ToggleStyled style={{ left: '-24px' }}>OFF</ToggleStyled>
                }}
                onChange={this.changeToggle}
              />
            </div>
          </WithBorder>
          <div
            className="row"
            style={{
              position: 'absolute',
              bottom: '2vh',
              width: '100%'
            }}>
            <div className="col-12 text-center">
              <div className="btn btn-danger btn-lg">DELETE THIS ROOM</div>
            </div>
          </div>
        </Div>

      </div>
    )
  }
}

export default OrganizeSettingContainer
