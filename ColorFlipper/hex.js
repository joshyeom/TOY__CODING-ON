function colorFlipper() {
  const colors = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  const rgbNumber = Math.floor(Math.random() * 256);
  const hexNumber = rgbNumber.toString(16);
  const BG = document.querySelector("body");
  BG.style.backgroundColor = `${colors[hexNumber]}`;
  const colorsInfo = document.querySelector("span");
  colorsInfo.innerText = BG.style.backgroundColor;
  console.log(1);
}
const rgbNumber = Math.floor(Math.random() * 256);
const hexNumber = rgbNumber.toString(16);
