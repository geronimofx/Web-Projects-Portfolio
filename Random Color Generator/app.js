let btn = document.querySelector('#btn-color')
let colorDisplay = document.querySelector('#color-code')
let colorHex

let randomColor = () => {
  colorHex = "#"
  let hexadecimal = "0123456780ABCDEF" 
  for (let i = 0; i <= 5; i++) {
    colorHex = colorHex + hexadecimal[Math.floor(Math.random() * 16)]
  }

  return colorHex
}

btn.addEventListener('click', () => {
  document.querySelector("#container").style.backgroundColor = randomColor()
  colorDisplay.innerHTML = colorHex
})