import { observable, action } from 'mobx'
import { navigateTo } from 'gatsby-link'

let name

class Name {
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
    console.log('name : ', this.name)
    localStorage.setItem('name', this.name)
    navigateTo('/ask-page')
  }
}

function createStore () {
  if (name) {
    return name
  }
  name = new Name()
  return name
}

export default createStore()