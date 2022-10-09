let search = document.querySelector("input");
let body = document.querySelector("body");
let li = document.querySelectorAll("li");
let buttonO = document.querySelectorAll(".button-o");

function putName(event) {
  event.preventDefault();
  for (let i = 0; i < li.length; i++) {
    if (search.value == li[i].textContent) {
      li[i].style.backgroundColor = "skyBlue";
    }
  }
}

let attendanceList1 = document.querySelector("#attendance-list1");
let attendanceList2 = document.querySelector("#attendance-list2");
let attendanceList3 = document.querySelector("#attendance-list3");
let absentList1 = document.querySelector("#absent-list1");
let absentList2 = document.querySelector("#absent-list2");

function attendanceO(i) {
  attendanceList1.append(buttonO[i].parentElement);
  if (attendanceList1.childNodes.length > 10) {
    attendanceList2.append(buttonO[i].parentElement);
    if (attendanceList2.childNodes.length > 10) {
      attendanceList3.append(buttonO[i].parentElement);
    }
  }
}

function attendanceX(i) {
  absentList1.append(buttonX[i].parentElement);
}

body.addEventListener("submit", putName);

for (let i = 0; i < buttonO.length; i++) {
  buttonO[i].addEventListener("click", function () {
    attendanceO(i);
  });
}

for (let i = 0; i < buttonX.length; i++) {
  buttonX[i].addEventListener("click", function () {
    attendanceX(i);
  });
}

// buttonX.addEventListener("click", attendanceX);
