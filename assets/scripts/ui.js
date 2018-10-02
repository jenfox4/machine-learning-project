const store = require('./store.js')

const displayPrediction = function (lightOrDark, confidence) {
  $('.results').show()
  $('.results').html("<p>Hmmmm...I'm " + confidence + "% sure this color is a " + lightOrDark + " hue </p>")
  $('.results').css('color', store.changeFontColor)
}

module.exports = {
  displayPrediction
}
