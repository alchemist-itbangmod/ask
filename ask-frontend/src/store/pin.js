import { observable, action } from 'mobx'
import { validChar } from '../utils/validate'
import api from '../utils/api'
import _ from 'lodash'
import { navigateTo } from 'gatsby-link'

let pin
const getPin = (node) => {
  let pinCode = ''
  node
    .querySelectorAll(`input`)
    .forEach(ech => {
      pinCode += ech.value
    })
  return pinCode
}

class Pin {
  @observable pin = ''
  @observable formRef = null
  @observable firstInputElement = null
  @observable error = false
  @observable loading = false

  @action
  setFormRef = (element) => {
    this.formRef = element
  }

  @action
  setFirstInput = (element) => {
    this.firstInputElement = element
  }

  @action
  clearPin = (node) => {
    node
      .querySelectorAll(`input`)
      .forEach(ech => {
        ech.value = null
      })
    this.pin = ''
  }

  submitForm = async () => {
    this.loading = true
    const { data } = await api.get(`/rooms/pin/${this.pin}`)
    this.loading = false
    if (_.isEmpty(data)) {
      this.error = true
      this.clearPin(this.formRef)
      this.firstInputElement.focus()
    } else {
      localStorage.setItem('roomId', data.roomId)
      localStorage.setItem('roomName', data.roomName)
      localStorage.setItem('themeTemplate', data.themeTemplate)
      navigateTo('/join')
    }
  }

  @action
  handleKeyup = (event) => {
    event.preventDefault()
    const keyValue = event.target.value

    const isValidChar = validChar(keyValue)
    const isBackspace = event.which === 8
    const currentEl = event.target
    if (!isBackspace && !isValidChar) {
      currentEl.value = ''
      return
    }

    if (isValidChar) {
      const nextEl = event.target.nextElementSibling
      currentEl.value = keyValue.toUpperCase()
      if (nextEl) {
        nextEl.focus()
      } else {
        // completed last digit
        currentEl.blur()
        this.pin = getPin(this.formRef)
        this.submitForm()
      }
    }

    if (isBackspace) {
      const previousEl = event.target.previousElementSibling
      currentEl.value = ''
      if (previousEl) {
        previousEl.focus()
      }
    }
  }
}

function createStore () {
  if (pin) {
    return pin
  }
  pin = new Pin()
  return pin
}

export default createStore()
