import { observable, action } from 'mobx'
import { validChar } from '../utils/validate'

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

  @action
  handleKeyup = (event) => {
    event.preventDefault()
    const keyValue = event.target.value

    const isValidChar = validChar(keyValue)
    const isBackspace = event.which === 8
    if (!isBackspace && !isValidChar) {
      return
    }

    const currentEl = event.target
    if (isValidChar) {
      const nextEl = event.target.nextElementSibling
      currentEl.value = keyValue.toUpperCase()
      if (nextEl) {
        nextEl.focus()
      } else {
        // completed last digit
        currentEl.blur()
        this.pin = getPin(this.formRef)
        this.error = true
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
