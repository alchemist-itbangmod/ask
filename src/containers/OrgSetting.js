import React from 'react'
import { compose, withState, withHandlers, lifecycle } from 'recompose'
import instance from '../libs/axios'
import swal from 'sweetalert2'

const OrgSetting = props => (
  <div className="container">
    <form className="row" onSubmit={props.onUpdateRoom}>
      <div className="col-12 h2 text-center">
        {props.title}
      </div>
      <div className="col-12">
        Title:
        <input
          type="text"
          value={props.title}
          onChange={e => props.onChangeTitle(e)}
        />
      </div>
      <div className="col-12">
        PIN
        <input type="text" value={props.pin} readOnly />
      </div>
      <div className="col-12">
        Open Sending
        <input type="checkbox" checked={props.openSending} />
      </div>
      <button type="submit" className="btn btn-primary" >send</button>
    </form>
  </div>
)

const SettingCompose = compose(
  withState('openSending', 'setOpenSending', false),
  withState('title', 'setTitle', ''),
  withState('pin', 'setPin', ''),
  withHandlers({
    onChangeTitle: props => (e) => {
      let title = e.target.value
      props.setTitle(title)
    },
    onUpdateRoom: props => (e) => {
      e.preventDefault()
      console.log('test')
      swal({
        title: 'text',
        text: 'test'
      })
    }
  }),
  lifecycle({
    async componentWillMount() {
      let roomId = this.props.match.params.id
      let room = await instance.get(`/rooms/${roomId}`)
        .then(resp => resp.data.data.room)
      this.props.setTitle(room.title)
      this.props.setOpenSending(room.openSending)
      this.props.setPin(room.code)
    }
  })
)(OrgSetting)
export default SettingCompose
