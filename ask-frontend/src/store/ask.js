import { observable, action } from 'mobx'
import api from '../utils/api'

let ask

const statusCallback = {
  SUCCESS: 'SUCCESS',
  CLOSED: 'CLOSED',
  ERROR: 'ERROR',
}

class Ask {
    @observable themeTemplate=''
    @observable question=''
    @observable anonymous=false
    @observable roomId=0
    @observable showNoti=false
    @observable status=''
    @observable roomName=''
    @observable name=''

    @action
    changeInputQuestion = e => {
      this.question = e.target.value
    }

    @action
    toggleAnonymous = () => {
      this.anonymous = !this.anonymous
    }

    @action
    handleQuestion = async (e) => {
      e.preventDefault()
      const { data } = await api.post('/questions', {
        roomId: this.roomId,
        question: this.question,
        anonymous: this.anonymous,
        name: this.name,
      })
      if (data.status === statusCallback.SUCCESS) {
        this.question = ''
      }
      this.status = data.status
      this.showNoti = true
      setTimeout(() => {
        this.showNoti = false
      }, 3000)
      alert(this.status)
    }
    @action
    getRoomData = () => {
      this.roomId = parseInt(localStorage.getItem('roomId'))
      this.roomName = localStorage.getItem('roomName')
      this.themeTemplate = localStorage.getItem('themeTemplate')
      this.name = localStorage.getItem('name')
    }
}
function createStore () {
  if (ask) {
    return ask
  }
  ask = new Ask()
  return ask
}

export default createStore()