function colorFlipper() {
  const BG = document.querySelector("body");
  const colors = ["#F15025", "Red", "Green", "Rgba(133,122,200)"];
  const colorsInfo = document.querySelector("span");
  BG.style.backgroundColor = colors[Math.floor(colors.length * Math.random())];
  colorsInfo.innerText = BG.style.backgroundColor;
}
