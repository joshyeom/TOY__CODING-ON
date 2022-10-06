const toDoForm = document.querySelector("#todo-form");
const input = document.querySelector("input");
console.dir(input);

function dateCalculator(event) {
  event.preventDefault();
  const value = input.value;
  console.dir(value);
  console.log(input.value);
}

toDoForm.addEventListener("submit", dateCalculator);
