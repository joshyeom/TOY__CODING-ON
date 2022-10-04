const number = document.querySelector(".number");
number.innerText = 0;

function decrease() {
  number.innerText = `${Number(number.textContent) - 1}`;
  if (Number(number.textContent) > 0) {
    number.style.color = "green";
  } else if (Number(number.textContent) < 0) {
    number.style.color = "red";
  } else {
    number.style.color = "black";
  }
}

function reset() {
  number.innerText = 0;
  number.style.color = "black";
}

function increase() {
  number.innerText = `${Number(number.textContent) + 1}`;
  if (Number(number.textContent) > 0) {
    number.style.color = "green";
  } else if (Number(number.textContent) < 0) {
    number.style.color = "red";
  } else {
    number.style.color = "black";
  }
}
