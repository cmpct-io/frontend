const generateRandomNumber = (maximumNumber, minimumNumber) =>
  Math.floor(Math.random() * (maximumNumber - minimumNumber + 1) + minimumNumber)

export default {
  generateRandomNumber
}
