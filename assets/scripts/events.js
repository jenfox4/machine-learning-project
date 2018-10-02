const getFormFields = require('../../lib/get-form-fields.js')
const makePrediction = require('./machine-learning/brain.js')
const calculate = require('./machine-learning/calculate_rgb.js')

const showPrediction = function () {
  console.log('show prediction')
  $('.make-prediction').show()
  $('.color-container').hide()
}

const showTraining = function () {
  console.log('show training')
  $('.color-container').show()
  $('.make-prediction').hide()
}

const predict = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('data', data)
  console.log('red', data.color.red)
  const red = data.color.red
  console.log('green', data.color.green)
  const green = data.color.green
  console.log('blue', data.color.blue)
  const blue = data.color.blue
  const computerReadable = calculate(red, green, blue)
  console.log(computerReadable)
}
module.exports = {
  showPrediction,
  showTraining,
  predict
}
