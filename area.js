const oneSide = document.querySelector('#one-side')
const twoSide = document.querySelector('#two-side')
const threeSide = document.querySelector('#three-side')
const areaButton = document.querySelector('#btn-check-area')
const outerText = document.querySelector('#output-text')

function area(a, b, c) {
  ;(s = (a + b + c) / 2), (area = Math.sqrt(s * (s - a) * (s - b) * (s - c)))
  return (
    "The triangle's area using Heron's formula is " +
    area.toFixed(4) +
    ' square cm'
  )
}

areaButton.addEventListener('click', areaHandler)
function areaHandler() {
  const a = oneSide.value
  const b = twoSide.value
  const c = threeSide.value
  if (parseFloat(a) > 0 && parseFloat(b) > 0 && parseFloat(c) > 0) {
    const res = area(parseFloat(a), parseFloat(b), parseFloat(c))
    outerText.innerText = res
  } else {
    outerText.innerText = 'Please enter valid details!'
  }
}
