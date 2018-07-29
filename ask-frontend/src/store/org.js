import { observable, action } from 'mobx'
import 'babel-polyfill'

let org

class Org {
    @observable isLogin = false

    @action
    setAuth = (authStatus) => {
      this.isLogin = authStatus
    }
}
function createStore () {
  if (org) {
    return org
  }
  org = new Org()
  return org
}

export default createStore()