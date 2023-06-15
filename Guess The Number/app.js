let randomNumber = Math.floor(Math.random() * 100)
console.log(randomNumber)

const startGame = () => {

  let guessNumber = parseInt(document.querySelector('#guessNumber').value)
  let results = document.querySelector('#results')

  if (randomNumber === guessNumber) {
    results.innerHTML = `Congratulations, you win the game!`
    results.style.color = "#FFD700"
  } else if (guessNumber > randomNumber) {
    results.innerHTML = `The number is less then ${guessNumber}`
    results.style.color = "red"
  } else if (guessNumber < randomNumber) {
    results.innerHTML = `The number is greater then ${guessNumber}`
    results.style.color = "red"
  }

}

const resetGame = () => {
  window.location.reload()
}