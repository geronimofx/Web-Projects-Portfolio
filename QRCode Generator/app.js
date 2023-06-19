const input = document.querySelector("input")
const btnGenerator = document.getElementById("generator")
const bntDownload = document.getElementById("download")
const imgQRCode = document.getElementById("qrCodeImg")

btnGenerator.addEventListener("click", () => {
  const qrCode = `http://api.qrserver.com/v1/create-qr-code/?data=${input.value}!&size=250x250!&color=BE3455`
  imgQRCode.src = qrCode
  imgQRCode.alt = 'QR Code gerado a partir do input que foi inserido no campo de entrada'
})
