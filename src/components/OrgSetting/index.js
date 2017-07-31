import React from 'react'
import { compose, withState, withHandlers, lifecycle } from 'recompose'
// import { QuestionCard, Question } from '../../styles/Global'
import swal from 'sweetalert2'
import Toggle from 'react-toggle'
import '../../static/toggle.css'
import instance from '../../libs/axios'
import { Button } from '../../styles/Global'

const PrimaryColor = '#1BB7BF'

const RoomSetting = props => (
  <div>
    <div className="card col-8 offset-2">
      <div className="card-block">
        <form className="row">
          <div className="col-3">
            <b>Title :</b>
          </div>
          <div className="col-9">
            <input
              type="text"
              className="col-12"
              value={props.title}
              style={{
                backgroundColor: 'rgba(211,211,211,0.8)',
                borderRadius: 10,
                border: 0,
                padding: '5px 15px'
              }}
              onChange={e => props.onChangeTitle(e)}
             />
          </div>
          <div className="col-3">
            <b>Pin :</b>
          </div>
          <div
            className="col-9"
            style={{
              letterSpacing: '5px',
              textTransform: 'uppercase',
              paddingLeft: '30px'
            }}>
            { props.pin }
          </div>
          <div className="col-3">
            <b>openSending :</b>
          </div>
          <div className="col-9">
            <Toggle
              checked={props.openSending}
              onChange={props.toggleOpenSending}
            />
          </div>
          <div
            className="col-12 text-right"
            style={{ marginTop: 10 }}
          >
            <Button
              type="submit"
              className="btn"
              onClick={(e) => props.onSubmit(e)}
            >
              Update
            </Button>
          </div>
        </form>
      </div>
    </div>
  </div>
)

const RoomSettingCompose = compose(
  withState('title', 'setTitle', ''),
  withState('openSending', 'setOpenSending', false),
  withState('pin', 'setPin', ''),
  lifecycle({
    async componentWillMount() {
      let id = this.props.match.params.id
      let room = await instance.get(`/rooms/${id}`)
        .then(resp => resp.data.data.room)
      this.props.setTitle(room.title)
      this.props.setPin(room.code)
      this.props.setOpenSending(room.openSending)
    }
  }),
  withHandlers({
    toggleOpenSending: props => () => {
      props.setOpenSending(!props.openSending)
    },
    onChangeTitle: props => (e) => {
      props.setTitle(e.target.value)
    },
    onSubmit: props => (e) => {
      e.preventDefault()
      let opSend = props.openSending
      let roomName = props.title
      let roomId = props.match.params.id
      swal({
        title: 'Comfirm update',
        text: `Are you sure to update these setting`,
        showCancelButton: true,
        reverseButtons: true,
        confirmButtonText: 'Confirm',
        confirmButtonColor: PrimaryColor,
        customClass: 'Button',
        showLoaderOnConfirm: true,
        preConfirm: () => {
          return new Promise((resolve, reject) => {
            instance.put(`/rooms/${roomId}`, {
              id: roomId,
              title: roomName,
              openSending: opSend
            }).then(data => {
              resolve(data.data)
            })
          })
        }
      }).then(async (data) => {
        if (data.status) {
          swal({
            title: 'Sucess',
            text: `Update room success`,
            type: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: PrimaryColor
          })
          let id = props.match.params.id
          let room = await instance.get(`/rooms/${id}`)
            .then(resp => resp.data.data.room)
          props.setRoom(room)
        } else {
          swal({
            title: 'Failed',
            text: `Sorry, cannot delete question. please try again.`,
            type: 'warning',
            confirmButtonText: 'OK',
            confirmButtonColor: PrimaryColor
          })
        }
      })
    }
  })
)(RoomSetting)

export default RoomSettingCompose
