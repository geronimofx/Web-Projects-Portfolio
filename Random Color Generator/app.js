let codeHex = document.querySelector('#btn-color')
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

codeHex.addEventListener('click', () => {
  document.querySelector("#container").style.backgroundColor = randomColor()
  colorDisplay.style.display = "block"
  colorDisplay.innerHTML = colorHex
  colorDisplay.style.backgroundColor = colorHex
  colorDisplay.style.color = "#FFFFFF"
})

const copyClipboard = () => {
  copyHex = colorDisplay.innerText

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyHex)

  alert (`Copied the Hex Color ${colorHex}`)
}