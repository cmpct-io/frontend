export const IS_VALID_URL = (text) => {
  const expression = /[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)?/gi
  const regex = new RegExp(expression)
  return text.match(regex)
}
