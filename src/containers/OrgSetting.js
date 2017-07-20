import React from 'react'
import { compose, withState, withHandlers, lifecycle } from 'recompose'
import instance from '../libs/axios'
import swal from 'sweetalert2'
import { SettingContainer, Dropdown, Openbtn, Closebtn } from '../styles/Global'

const OrgSetting = props => (
  <SettingContainer className="text-right">
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        onClick={props.toggleDropdrown}
      >
        <i className="fa fa-cog" /> room setting
      </button>
      <Dropdown onSubmit={props.onUpdateRoom}
        className="dropdown-menu" aria-labelledby="dropdownMenuButton"
        active={props.ddSetting}
      >
        <div className="dropdown-item">
          <div className="row">
            <div className="col-4">
              title:
            </div>
            <div className="col-8">
              <input
                className="col-12" type="text"
                value={props.title}
                onChange={props.onChangeTitle}
              />
            </div>
          </div>
        </div>
        <div className="dropdown-item">
          <div className="row">
            <div className="col-4">
              pin:
            </div>
            <div className="col-8">
              <input
                className="col-12" type="text"
                value={props.pin}
                disabled={() => true}
              />
            </div>
          </div>
        </div>
        <div className="dropdown-item">
          <div className="row">
            <div className="col-4">
              openSending:
            </div>
            <div className="btn-group col-8" role="group" aria-label="Basic example">
              <Openbtn
                type="button"
                className="btn col-6 btn-outline-secondary"
                active={props.openSending}
                onClick={props.onOpenSending}
              >
                Open
              </Openbtn>
              <Closebtn
                type="button"
                className="btn col-6 btn-outline-secondary"
                active={!props.openSending}
                onClick={props.onCloseSending}
              >
                Close
              </Closebtn>
            </div>
          </div>
        </div>
        <div className="dropdown-item">
          <button
            type="submit"
            className="btn btn-success btn-block"
          >
            update setting
          </button>
        </div>
      </Dropdown>
    </div>
  </SettingContainer>
)

const SettingCompose = compose(
  withState('openSending', 'setSending', false),
  withState('title', 'setTitle', ''),
  withState('pin', 'setPin', ''),
  withState('ddSetting', 'setDD', false),
  withHandlers({
    toggleDropdrown: props => async (e) => {
      props.setDD(!props.ddSetting)
      if (props.ddSetting) {
        let roomId = props.match.params.id
        let room = await instance.get(`/rooms/${roomId}`)
          .then(resp => resp.data.data.room)
        props.setTitle(room.title)
        props.setSending(room.openSending)
        props.setPin(room.code)
      }
    },
    onChangeTitle: props => (e) => {
      let title = e.target.value
      props.setTitle(title)
    },
    onOpenSending: props => (e) => {
      props.setSending(true)
    },
    onCloseSending: props => (e) => {
      props.setSending(false)
    },
    onUpdateRoom: props => (e) => {
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
        confirmButtonColor: '#FF4312',
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
            confirmButtonColor: '#FF4312'
          })
          props.setDD(false)
        } else {
          swal({
            title: 'Failed',
            text: `Sorry, cannot delete question. please try again.`,
            type: 'warning',
            confirmButtonText: 'OK',
            confirmButtonColor: '#FF4312'
          })
        }
      })
    }
  }),
  lifecycle({
    async componentWillMount() {
      let roomId = this.props.match.params.id
      let room = await instance.get(`/rooms/${roomId}`)
        .then(resp => resp.data.data.room)
      this.props.setTitle(room.title)
      this.props.setSending(room.openSending)
      this.props.setPin(room.code)
    }
  })
)(OrgSetting)
export default SettingCompose
