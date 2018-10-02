'use strict'

const events = require('./events.js')

$(() => {
  $('.prediction').on('click', events.showPrediction)
  $('.train').on('click', events.showTraining)
  $('#prediction').on('submit', events.predict)
  $('.light').on('click', events.trainLight)
  $('.dark').on('click', events.trainDark)
})
