import { observable, action } from 'mobx'

let allRoom

class AllRoom {
    @observable collapse = false
    @observable roomName = ''

    @action
    changeInputRoomName = async (e) => {
      this.roomName = e.target.value
    }

    @action
    handleCreateRoom = async (e) => {
      e.preventDefault()
      localStorage.setItem('roomName', this.roomName)
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