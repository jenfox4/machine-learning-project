const displayPrediction = function (lightOrDark, confidence) {
  $('.results').show()
  $('.results').html("<p>Hmmmm...I'm " + confidence + "% sure this color is a " + lightOrDark + " hue </p>")
}

module.exports = {
  displayPrediction
}
