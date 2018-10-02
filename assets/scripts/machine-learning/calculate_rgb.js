const calculate = function (r, g, b, lightOrDark) {
  const red = r / 255
  const green = g / 255
  const blue = b / 255
  let output = null
  if (lightOrDark === 'light') {
    output = `light: 1`
  } else {
    output = 'dark: 1'
  }
  return `{input: {r: ${red}, g: ${green}, b: ${blue}}, output:{${output}}`
}

module.exports = calculate
