const getHistory = () => JSON.parse(localStorage.getItem('history'))

const addToHistory = (item) => {
  let history = getHistory()

  if (!history) {
    history = []
  }

  if (!history.includes(item)) {
    history.push(item)
    localStorage.setItem('history', JSON.stringify(history))
  }
}

export default {
  getHistory,
  addToHistory
}
