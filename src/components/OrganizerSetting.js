import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import swal from 'sweetalert2'
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

const SaveMenu = styled.button`
  position: absolute;
  top: 15px;
  right: 30px;
  background: transparent;
  border: 0;
  font-weight: bold;
`

class OrganizeSettingContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      roomName: '',
      sending: false,
      pin: ''
    }
    this.changeToggle = this.changeToggle.bind(this)
    this.changeRoomName = this.changeRoomName.bind(this)
    this.componentWillMount = this.componentWillMount.bind(this)
  }

  changeToggle() {
    this.setState({ sending: !this.state.sending })
  }

  changeRoomName(e) {
    let roomName = e.target.value
    this.setState({ roomName })
  }

  onSubmit(e) {
    e.preventDefault()
    console.log(this.state)
    swal({
      title: 'Comfirm update data',
      text: `Are you sure to update these setting`,
      showCancelButton: true,
      reverseButtons: true,
      confirmButtonText: 'Confirm',
      confirmButtonColor: '#FF4312',
      customClass: 'Button',
      showLoaderOnConfirm: true
    })
  }

  async componentWillMount() {
    let pin = this.props.match.params.id
    let room = await axios.get(`http://localhost:3001/api/v1/rooms/code/${pin}`)
      .then(resp => resp.data)
    this.setState({ roomName: room.title })
    this.setState({ sending: room.sending })
    this.setState({ pin })
  }

  render() {
    return (
      <div>
        <Div className="container" >
          <form onSubmit={e => this.onSubmit(e)}>
            <WithBorder className="row h1 text-center">
              <div className="col-12">{ this.state.roomName }</div>
              <PreviousMenu className="fa fa-angle-left text-primary" />
              <SaveMenu type="submit" className="fa fa-save text-primary" />
            </WithBorder>
            <WithBorder className="row">
              <div className="col-2">
                TITLE:
              </div>
              <input type="text" className="col-9"
                value={this.state.roomName}
                onChange={e => this.changeRoomName(e)}
                style={{ height: '60px' }} />
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
                  checked={this.state.sending}
                  icons={{
                    checked: <ToggleStyled>ON</ToggleStyled>,
                    unchecked: <ToggleStyled style={{ left: '-24px' }}>OFF</ToggleStyled>
                  }}
                  onChange={this.changeToggle}
                />
              </div>
            </WithBorder>
          </form>
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
