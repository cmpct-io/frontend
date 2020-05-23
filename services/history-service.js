const get = () => JSON.parse(localStorage.getItem('visited-history')) || []

const add = (shortcut, title) => {
  let history = get() || []

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

const deleteItem = (shortcut) => {
  let history = get() || []

  history = history.filter(item => item.shortcut !== shortcut)

  localStorage.setItem('visited-history', JSON.stringify(history))
}

const clear = () => localStorage.removeItem('visited-history')

export default {
  get,
  add,
  deleteItem,
  clear
}
