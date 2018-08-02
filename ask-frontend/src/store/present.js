import { observable, action } from 'mobx'
import api from '../utils/api'

let present

class Present {
@observable roomName = ''
@observable roomPin = ''
@observable questions = []
@observable roomId = ''
@action
getRoomData = async () => {
  const { data } = await api.get('/rooms/1')
  this.roomName = data.roomName
  this.roomPin = data.roomPin
  this.roomId = data.roomId
}
@action
getQuestion = async () => {
  const { data } = await api.get('/rooms/1/questions')
  this.questions = data
}
}

function createStore () {
  if (present) {
    return present
  }
  present = new Present()
  return present
}
export default createStore()