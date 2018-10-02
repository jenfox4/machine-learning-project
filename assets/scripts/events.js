const getFormFields = require('../../lib/get-form-fields.js')
const makePrediction = require('./machine-learning/brain.js')
const ui = require('./ui.js')
// const calculate = require('./machine-learning/calculate_rgb.js')
const store = require('./store.js')

const showPrediction = function () {
  console.log('show prediction')
  $('.make-prediction').show()
  $('.color-container').hide()
}

const showTraining = function () {
  console.log('show training')
  $('.color-container').show()
  $('.make-prediction').hide()
  randomColor()
}

const randomColor = function () {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)
  store.colorTraining = `rgb(${red}, ${green}, ${blue})`
  $('.color-box').css('background', store.colorTraining)
}

const predict = function (event) {
  event.preventDefault()
  $('.results').empty()
  const data = getFormFields(event.target)
  const red = data.color.red
  const green = data.color.green
  const blue = data.color.blue
  const changeFontColor = `rgb(${red}, ${green}, ${blue})`
  store.changeFontColor = changeFontColor
  const prediction = (makePrediction(red, green, blue))
  const darkConfidence = prediction.dark
  const lightConfidence = prediction.light
  displayPrediction(darkConfidence, lightConfidence)
}

const displayPrediction = function (dark, light) {
  let confidence = null
  if (dark > light) {
    confidence = Math.round(dark * 100)
    ui.displayPrediction('dark', confidence)
  } else {
    confidence = Math.round(light * 100)
    ui.displayPrediction('light', confidence)
  }
}
// const train = function () {
//   const trainingData = calculate(red, green, blue)
//    create request in database
// }

module.exports = {
  showPrediction,
  showTraining,
  predict
}
