import { observable, action } from 'mobx'
import api from '../utils/api'

let present

class Present {
@observable roomName = ''

@action
getData = async () => {
  const { data } = await api.get('/rooms/5')
  this.roomName = data.roomName
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