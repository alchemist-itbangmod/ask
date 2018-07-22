import { observable, action } from 'mobx'
import { navigateTo } from 'gatsby-link'

let join

class Join {
  @observable name = ''
  @observable themeTemplates = ''
  @observable roomName = ''

  @action
  initialJoin = () => {
    this.themeTemplates = localStorage.getItem('themeTemplates')
    this.roomName = localStorage.getItem('roomName')
  }

  @action
  changeInputName = e => {
    this[e.target.name] = e.target.value
  }

  @action
  handleSubmit = e => {
    e.preventDefault()
    localStorage.setItem('name', this.name)
    navigateTo('/ask')
  }
}

function createStore () {
  if (join) {
    return join
  }
  join = new Join()
  return join
}

export default createStore()