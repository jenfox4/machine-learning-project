const brain = require('brain.js')
const network = new brain.NeuralNetwork()
const colorsArray = require('./colors.js')
const store = require('../store.js')

const colorPredictor = function (r, g, b) {
  network.train(colorsArray)
  const result = network.run({r: r, g: g, b: b})
  store.prediction = result
  console.log(store.prediction)
}

module.exports = colorPredictor
