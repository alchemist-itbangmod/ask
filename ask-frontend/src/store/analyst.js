import { observable, action } from 'mobx'
import api from '../utils/api'
import XLSX from 'xlsx'

let analy

class Analy {
  @observable allQuestion = 0
  @observable selectionQuestion = 0
  @observable allUser = 0

  @action
  getAnalystData = async (roomId) => {
    const { data } = await api.get(`/rooms/${roomId}/analyst`)
    this.allUser = data.countUser
    this.allQuestion = data.countQuestion
  }

  @action
  exportToExcel = async (roomId) => {
    const { data } = await api.get(`/questions/${roomId}/rooms`)
    const newData = data.map(item => {
      const name = item.anonymous ? 'anonymous' : item.name
      const isAnswer = item.isAnswer ? 'ตอบแล้ว' : 'ยังไม่ได้ตอบ'
      return {
        roomId: item.roomId,
        questionId: item.questionId,
        question: item.question,
        name: name,
        isAnswer: isAnswer,
      }
    })
    let ws = XLSX.utils.json_to_sheet(newData)
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