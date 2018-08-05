import { observable, action } from 'mobx'
import api from '../utils/api'
import 'babel-polyfill'

let present

class Present {
@observable roomName = ''
@observable roomPin = ''
@observable questions = []
@observable roomId = 0
@action
getRoomData = async (roomId) => {
  const { data } = await api.get(`/rooms/${roomId}`)
  this.roomName = data.roomName
  this.roomPin = data.roomPin
  this.roomId = data.roomId
}
@action
getQuestion = async () => {
  const { data } = await api.get(`/rooms/${this.roomId}/questions`)
  this.questions = data
}

  @action
  setQuestions = (questions) => {
    this.questions = questions
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