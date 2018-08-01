import { observable, action } from 'mobx'
import api from '../utils/api'

let present

class Present {
@observable roomName = ''
@observable roomPin = ''
@observable questionshow = []
@action
getRoomData = async () => {
  const { data } = await api.get('/rooms/5')
  this.roomName = data.roomName
  this.roomPin = data.roomPin
}
getQuestion = async () => {
  const { data } = await api.get('/rooms/6/questions')
  console.log(data)
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