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
  cursor: pointer;
`

class OrganizeSettingContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      roomName: '',
      sending: false,
      pin: '',
      notExists: true
    }
    this.toggleSending = this.toggleSending.bind(this)
    this.changeRoomName = this.changeRoomName.bind(this)
    this.componentWillMount = this.componentWillMount.bind(this)
    this.onDeleteRoom = this.onDeleteRoom.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  toggleSending() {
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
      showLoaderOnConfirm: true,
      preConfirm: () => {
        return new Promise(async (resolve, reject) => {
          let room = await axios.get(`http://localhost:3001/api/v1/rooms/code/${this.state.pin}`)
            .then(resp => {
              return resp.data
            })
          axios.post(`http://localhost:3001/api/v1/room/update`, {
            getidbodynaja: room.roomId,
            title: this.state.roomName,
            sending: this.state.sending
          }).then(data => {
            resolve(data.data)
          })
        })
      }
    }).then((data) => {
      if (data.status) {
        swal({
          title: 'Sucess',
          text: `update success`,
          type: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#FF4312'
        })
      } else {
        swal({
          title: 'Fail',
          text: `Error, cannot update please try again.`,
          type: 'warning',
          confirmButtonText: 'OK',
          confirmButtonColor: '#FF4312'
        })
      }
    })
  }

  async componentWillMount() {
    let pin = this.props.match.params.id
    let room = await axios.get(`http://localhost:3001/api/v1/rooms/code/${pin}`)
      .then(resp => resp.data)
    this.setState({ roomName: room.title })
    this.setState({ sending: room.sending })
    this.setState({ pin })
    this.setState({ notExists: !room.status })
  }

  async onDeleteRoom() {
    swal({
      title: 'Are you sure to delete this room',
      text: `Are you sure to delete '${this.state.roomName}'`,
      showCancelButton: true,
      reverseButtons: true,
      confirmButtonText: 'Confirm',
      confirmButtonColor: '#FF4312',
      customClass: 'Button',
      showLoaderOnConfirm: true,
      preConfirm: () => {
        return new Promise(async (resolve, reject) => {
          let room = await axios.get(`http://localhost:3001/api/v1/rooms/code/${this.state.pin}`)
            .then(resp => {
              return resp.data
            })
          axios.post(`http://localhost:3001/api/v1/room/delete`, {
            getidbodynaja: room.roomId
          }).then(data => {
            resolve(data.data)
          })
        })
      }
    }).then((data) => {
      if (data.status) {
        swal({
          title: 'Sucess',
          text: `This room has been deleted!`,
          type: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#FF4312'
        })
        this.setState({ notExists: true })
      } else {
        swal({
          title: 'Fail',
          text: `Error, cannot delete please try again.`,
          type: 'warning',
          confirmButtonText: 'OK',
          confirmButtonColor: '#FF4312'
        })
      }
    })
  }

  render() {
    if (this.state.notExists) {
      return <div />
    }
    return (
      <Setting
        title={this.state.roomName}
        onSubmit={this.onSubmit}
        changeTitle={this.changeRoomName}
        pin={this.state.pin}
        openSending={this.state.sending}
        toggleSending={this.toggleSending}
        deleteRoom={this.onDeleteRoom}
        updateRoom={this.onSubmit}
      />
    )
  }
}

const Setting = props => (
  <div>
    <Div className="container" >
      <form onSubmit={e => props.onSubmit(e)}>
        <WithBorder className="row h1 text-center">
          <div className="col-12">{ props.title }</div>
          <PreviousMenu className="fa fa-angle-left text-primary" />
          <SaveMenu onClick={props.updateRoom} type="submit" className="fa fa-save text-primary" />
        </WithBorder>
        <WithBorder className="row">
          <div className="col-2">
            TITLE:
          </div>
          <input type="text" className="col-9"
            value={props.title}
            onChange={e => props.changeTitle(e)}
            style={{ height: '60px' }} />
        </WithBorder>
        <WithBorder className="row">
          <div className="col-10">
            PIN:
          </div>
          <div className="col-2 text-right">
            <Pin readOnly value={props.pin} />
          </div>
        </WithBorder>
        <WithBorder className="row">
          <div className="col-10">
            OPEN SENDING:
          </div>
          <div className="col-2 text-right">
            <Toggle
              checked={props.openSending}
              icons={{
                checked: <ToggleStyled>ON</ToggleStyled>,
                unchecked: <ToggleStyled style={{ left: '-24px' }}>OFF</ToggleStyled>
              }}
              onChange={props.toggleSending}
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
          <button
            style={{ cursor: 'pointer' }}
            onClick={props.deleteRoom}
            className="btn btn-danger btn-lg"
          >DELETE THIS ROOM</button>
        </div>
      </div>
    </Div>
  </div>
)

export default OrganizeSettingContainer
