let search = document.querySelector("input");
let body = document.querySelector("body");
let ol = document.querySelectorAll("ol");
let buttonAttendance = document.querySelectorAll(".button-attendance");
let buttonAbsent = document.querySelectorAll(".button-absent");

let attendanceList1 = document.querySelector("#attendance-list1");
let attendanceList2 = document.querySelector("#attendance-list2");
let attendanceList3 = document.querySelector("#attendance-list3");
let absentList1 = document.querySelector("#absent-list1");
let absentList2 = document.querySelector("#absent-list2");

function attendance(i) {
  attendanceList1.append(buttonAttendance[i].parentElement);
  if (attendanceList1.childNodes.length > 6) {
    attendanceList2.append(buttonAttendance[i].parentElement);
    if (attendanceList2.childNodes.length > 6) {
      attendanceList3.append(buttonAttendance[i].parentElement);
    }
  }
}

for (let i = 0; i < buttonAttendance.length; i++) {
  buttonAttendance[i].addEventListener("click", function () {
    attendance(i);
  });
}

function absent(i) {
  absentList1.append(buttonAbsent[i].parentElement);
  if (absentList1.childNodes.length > 10) {
    absentList2.append(buttonAbsent[i].parentElement);
    if (absentList2.childNodes.length > 10) {
      absentList3.append(buttonAbsent[i].parentElement);
    }
  }
}

function absent(i) {
  absentList1.append(buttonAbsent[i].parentElement);
}

for (let i = 0; i < buttonAbsent.length; i++) {
  buttonAbsent[i].addEventListener("click", function () {
    absent(i);
  });
}

// buttonAbsent.addEventListener("click", absent);
