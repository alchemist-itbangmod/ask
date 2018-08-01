import { observable, action } from 'mobx'
// import api from '../utils/api'
import XLSX from 'xlsx'

let analy

class Analy {
  @observable allQuestion = [
    { id: 1, question: 'Hi1' },
    { id: 2, question: 'Hi2' },
    { id: 3, question: 'Hi3' },
    { id: 4, question: 'Hi4' },
    { id: 5, question: 'Hi5' },
  ]
  @observable selectionQuestion = [
    1,
    23,
  ]
  @observable allUser = 1000

  @action
  exportToExcel = () => {
    let ws = XLSX.utils.json_to_sheet(this.allQuestion)
    let wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Question')
    XLSX.writeFile(wb, 'test-export-excel.xlsx')
  }
}
function createStore () {
  if (analy) {
    return analy
  }
  analy = new Analy()
  return analy
}

export default createStore()