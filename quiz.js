const quizForm = document.querySelector('.quiz-form')
const quizButton = document.querySelector('#btn-check-quiz')
const outerText = document.querySelector('#output-text')

quizButton.addEventListener('click', quizHandler)

const correctAnswers = [
  '90°',
  'right',
  '5',
  'false',
  'true',
  '85°',
  '10°',
  'a + b + c',
  'no',
]

function quizHandler() {
  let score = 0
  const formResult = new FormData(quizForm)
  for (let ans of formResult.values()) {
    var ind = correctAnswers.indexOf(ans)
    if (ans == correctAnswers[ind]) {
      score++
    }
    ind++
  }
  outerText.innerText = 'Your final score is ' + score + ' 🙂'
}
