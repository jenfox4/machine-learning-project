const calculate = function (r, g, b) {
  const red = r / 255
  const green = g / 255
  const blue = b / 255
  let output = null
  if (red + blue + green >= 1.5) {
    output = `light: 1`
  } else {
    output = 'dark: 1'
  }
  return `{input: {r: ${red}, g: ${green}, b: ${blue}}, output:{${output}}`
}

module.exports = calculate
