const oneAngle = document.querySelector('#one-angle')
const twoAngle = document.querySelector('#two-angle')
const threeAngle = document.querySelector('#three-angle')
const isTriangleButton = document.querySelector('#btn-check-triangle')
const outerText = document.querySelector('#output-text')

function isTriangle(one, two, three) {
  return parseFloat(one) + parseFloat(two) + parseFloat(three) == 180
    ? 'Yayy, they form a triangle △'
    : 'Oh no, they do not form a triangle! 😕'
}

isTriangleButton.addEventListener('click', isTriangleHandler)
function isTriangleHandler() {
  const oneAngleVal = oneAngle.value
  const twoAngleVal = twoAngle.value
  const threeAngleVal = threeAngle.value

  if (
    parseFloat(oneAngleVal) > 0 &&
    parseFloat(oneAngleVal) < 180 &&
    parseFloat(twoAngleVal) > 0 &&
    parseFloat(twoAngleVal) < 180 &&
    parseFloat(threeAngleVal) > 0 &&
    parseFloat(threeAngleVal) < 180
  ) {
    const res = isTriangle(oneAngleVal, twoAngleVal, threeAngleVal)
    outerText.innerText = res
  } else {
    outerText.innerText = 'Please enter valid details!'
  }
}
