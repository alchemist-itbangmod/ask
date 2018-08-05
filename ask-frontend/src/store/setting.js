import { observable, action } from 'mobx'
import api from '../utils/api'
import 'babel-polyfill'
import _ from 'lodash'
import { navigateTo } from 'gatsby-link'
import Alert from 'react-s-alert'

let setting

class Setting {
    @observable roomPin = ''
    @observable themeTemplate = ''
    @observable roomName = ''
    @observable roomId = 0
    @observable themeId = 0
    @observable canSend = false

    @action
    getRoomData = async ({ roomId }) => {
      const { data } = await api.get(`/rooms/${roomId}`)
      if (!_.isEmpty(data)) {
        this.roomId = roomId
        this.roomPin = data.roomPin
        this.roomName = data.roomName
        this.canSend = data.canSend
        this.themeTemplate = data.themeTemplate
      } else {
        navigateTo('/organizer')
      }
    }

    @action
    handleUpdateRoom = async () => {
      await api.put(`/rooms/${this.roomId}`, {
        roomName: this.roomName,
        canSend: this.canSend,
        themeTemplate: this.themeTemplate,
      }).then(() => {
        Alert.success('Success !', {
          position: 'top',
          effect: 'slide',
          timeout: 2000,
        })
        localStorage.setItem('roomName', this.roomName)
      })
    }

    @action
    changeInputName = async (e) => {
      this.roomName = e.target.value
    }

    @action
    handleToggleOpenSending = async (e) => {
      this.canSend = !this.canSend
    }

    @action
    handleThemeTemplate = e => {
      this.themeTemplate = e.target.value
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