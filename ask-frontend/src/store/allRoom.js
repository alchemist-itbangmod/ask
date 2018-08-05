import { observable, action } from 'mobx'
import api from '../utils/api'
import 'babel-polyfill'
import _ from 'lodash'

let allRoom

class AllRoom {
    @observable collapse = false
    @observable roomName = ''
    @observable allRooms = []

    @action
    changeInputRoomName = async (e) => {
      this.roomName = e.target.value
    }

    @action
    handleCreateRoom = async (e) => {
      e.preventDefault()
      const { data } = await api.post(`/rooms`, {
        roomName: this.roomName,
      })
      if (data && data.status === 'success') {
        this.getRooms()
        this.roomName = ''
        this.collapse = !this.collapse
      }
    }

    @action
    getRooms = async () => {
      const { data } = await api.get(`/rooms`)
      if (_.isArray(data)) {
        this.allRooms = data.reverse()
      }
    }

    @action
    toggle = () => {
      this.collapse = !this.collapse
    }
}

function createStore () {
  if (allRoom) {
    return allRoom
  }
  allRoom = new AllRoom()
  return allRoom
}

export default createStore()