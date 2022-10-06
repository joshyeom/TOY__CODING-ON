function colorFlipper() {
  const rgbNumber = Math.floor(Math.random() * 256);
  const hexNumber = rgbNumber.toString(16);
  const BG = document.querySelector("body");
  BG.style.backgroundColor = `#${Math.round(Math.random() * 0xffffff).toString(
    16
  )}`;
  const colorsInfo = document.querySelector("span");
  colorsInfo.innerText = BG.style.backgroundColor;
  console.log(1);
}
const rgbNumber = Math.floor(Math.random() * 256);
const hexNumber = rgbNumber.toString(16);
