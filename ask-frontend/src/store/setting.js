import { observable, action } from 'mobx'
import api from '../utils/api'

let setting

class Setting {
    @observable roomPin = ''
    @observable themeTemplate = ''
    @observable roomName = ''
    @observable roomId = 0
    @observable themeId = 0
    @observable canSend = false

    @action
    getRoomData = async () => {
      const { data } = await api.get(`/rooms/5`)
      this.roomPin = data.roomPin
      this.roomName = data.roomName
      this.canSend = data.canSend
    }
    // submit button
    @action
    handleUpdateRoom = async (e) => {
      e.preventDefault()
      localStorage.setItem('roomName', this.roomName)
      await api.put('/rooms/5', {
        roomName: this.roomName,
        canSend: this.canSend,
      })
      // console.log(this.canSend)
    }

    @action
    changeInputName = async (e) => {
      this.roomName = e.target.value
      // await api.put()
    }

    @action
    handleToggleOpenSending = async (e) => {
      this.canSend = !this.canSend
    }

    @action
    handleThemeTemplate = param => {
      if (param === '0') {
        this.themeTemplate = 'blue'
      } else {
        this.themeTemplate = 'red'
      }
    }
}
function createStore () {
  if (setting) {
    return setting
  }
  setting = new Setting()
  return setting
}
export default createStore()