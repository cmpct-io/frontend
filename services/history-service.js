const getHistory = () => JSON.parse(localStorage.getItem('visited-history'))

const addToHistory = (shortcut, title) => {
  let history = getHistory() || []

  // Remove item from history if it already exists
  history = history.filter(item => item.shortcut !== shortcut)

  // Add item to the top of history
  history = [{
    shortcut,
    title
  },
  ...history
  ]

  localStorage.setItem('visited-history', JSON.stringify(history))
}

const deleteHistory = () => localStorage.removeItem('visited-history')

export default {
  getHistory,
  addToHistory,
  deleteHistory
}
