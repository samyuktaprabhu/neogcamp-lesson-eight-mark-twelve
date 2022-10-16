const base = document.querySelector('#base')
const height = document.querySelector('#height')
const hypButton = document.querySelector('#btn-check-hyp')
const outerTexthyp = document.querySelector('#output-text-hyp')

function calculateHypotenuse(b, h) {
  return (
    'Hypotenuse of the triangle is ' +
    Math.hypot(parseFloat(b), parseFloat(h)).toFixed(2) +
    ' cms'
  )
}
hypButton.addEventListener('click', hypHandler)

function hypHandler() {
  const baseVal = base.value
  const heightVal = height.value
  console.log(heightVal, baseVal)
  if (parseFloat(baseVal) > 0 && parseFloat(heightVal) > 0) {
    const res = calculateHypotenuse(baseVal, heightVal)
    outerTexthyp.innerText = res
  } else {
    outerTexthyp.innerText = 'Please enter valid details!'
  }
}
