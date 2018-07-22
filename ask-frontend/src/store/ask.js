import { observable, action } from 'mobx'
import api from '../utils/api'
import statusCallback from '../config/statusCallback'

let ask
let timeout

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
      clearTimeout(timeout)
      this.showNoti = false
      let status = ''
      if (this.question.trim().length < 4) {
        this.message = 'Must fill question more than 4 characters !'
      } else {
        const { data } = await api.post('/questions', {
          roomId: this.roomId,
          question: this.question,
          anonymous: this.anonymous,
          name: this.name,
        })
        if (data.status === statusCallback.SUCCESS) {
          this.question = ''
        }
        status = data.status
      }
      this.status = status
      setTimeout(() => {
        this.showNoti = true
        timeout = setTimeout(() => {
          this.showNoti = false
        }, 2500)
      }, 500)
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