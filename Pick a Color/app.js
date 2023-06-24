const pickColor = document.querySelector("#pick-color");
const inputFile = document.querySelector("#file-input");
const imgPreview = document.querySelector("#img-preview");
const resultElement = document.getElementById("hex-result");
const colorResult = document.getElementById('color-result')
const label = document.getElementById('label')

inputFile.addEventListener("change", () => {
  file = inputFile.files[0];
  if (file <= 0) {
    return;
  }

  let reader = new FileReader();

  reader.onload = () => {
    imgPreview.src = reader.result;
    imgPreview.style.display = 'block'
    label.style.display = 'none'
  };

  reader.readAsDataURL(file);
});

pickColor.addEventListener("click", () => {
  // If the browser not support this functionality
  if (!window.EyeDropper) {
    resultElement.textContent =
      "Your browser does not support the EyeDropper API";
    return;
  }

  const eyeDropper = new EyeDropper();

  eyeDropper
    .open()
    .then((result) => {
      // Do something with the color
      const color = result.sRGBHex;
      resultElement.innerHTML = color
      colorResult.style.backgroundColor = color
    })
    .catch((e) => {
      console.error(e);
    });
})
