let randomNumber = Math.floor(Math.random() * 100)
const playBtn = document.getElementById('enterBtn')
console.log(randomNumber)

const startGame = () => {

  let guessNumber = parseInt(document.querySelector('#guessNumber').value)
  let results = document.querySelector('#results')

  if (randomNumber === guessNumber) {
    results.innerHTML = `Congratulations, you win the game!`
    results.style.color = "green"
    results.style.fontWeight = "bold"
  } else if (guessNumber > randomNumber) {
    results.innerHTML = `The number is less then ${guessNumber}`
    results.style.color = "red"
    results.style.fontWeight = "bold"
  } else if (guessNumber < randomNumber) {
    results.innerHTML = `The number is greater then ${guessNumber}`
    results.style.color = "red"
    results.style.fontWeight = "bold"
  }

}

const handleKeyPress = (event) => {
  if (event.key === 'Enter') {
    playBtn.click(); // Dispara o evento de clique do botão
  }
}

// Adiciona um ouvinte de eventos para o evento "keydown" no documento
document.addEventListener('keydown', handleKeyPress);

const resetGame = () => {
  window.location.reload()
}