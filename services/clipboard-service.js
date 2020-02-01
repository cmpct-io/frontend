const hasAccess = () =>
  (typeof (navigator) !== 'undefined' && navigator.clipboard)

const copy = (text) => {
  if (hasAccess()) {
    return navigator.clipboard.writeText(text).then(() => true)
  }

  return false
}

const paste = async () => {
  let text = ''

  if (hasAccess()) {
    await navigator.clipboard.readText().then((clipboardText) => {
      text = clipboardText
    })
  }

  return text
}

export default {
  hasAccess,
  copy,
  paste
}
