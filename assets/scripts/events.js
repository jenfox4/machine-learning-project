const getFormFields = require('../../lib/get-form-fields.js')

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
  console.log(data)
}
module.exports = {
  showPrediction,
  showTraining,
  predict
}
