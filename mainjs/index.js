var employeeList = [];

function createEmployee() {
  // lấy input
  var account = document.getElementById("tknv").value;
  var fullName = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var passWord = document.getElementById("password").value;
  var startDay = document.getElementById("datepicker").value;
  var salary = document.getElementById("luongCB").value;
  var position = document.getElementById("chucvu").value;
  var timeWork = +document.getElementById("gioLam").value;

  // kiểm tra tài khoản

  // tạo 1 employee mới

  var newEmployee = new Employee(
    account,
    fullName,
    email,
    passWord,
    startDay,
    salary,
    position,
    timeWork
  );
  // push employee mới vào danh sách

  employeeList.push(newEmployee);

  //   rendertable ra giao diện

  renderTable();

  //   lưu local
  saveData();
}

// function totalSalary(position, salary) {
//   if (position === "Sếp") {
//     salary *= 3;
//   } else if (position === "Trưởng phòng") {
//     salary *= 2;
//   } else {
//     salary *= 1;
//   }
//   return salary;
// }

// function employeeRank(position, timeWork) {
//   var rank;
//   if (position === "Nhân viên" && +timeWork >= "192") {
//     rank = "xuất sắc";
//   } else if (position === "Nhân viên" && +timeWork >= "176") {
//     rank = "giỏi";
//   } else if (position === "Nhân viên" && +timeWork >= "160") {
//     rank = "khá";
//   } else if (position === "Nhân viên" && +timeWork < "160") {
//     rank = "Trung bình";
//   } else rank = "";
//   return rank;
// }

function renderTable() {
  // debugger

  var html = "";
  for (var i = 0; i < employeeList.length; i++) {
    var currentEmployee = employeeList[i];
    html += ` <tr>
    <td>${currentEmployee.account}</td>
    <td>${currentEmployee.fullName}</td>
    <td>${currentEmployee.email}</td>
    <td>${currentEmployee.startDay}</td>
    <td>${currentEmployee.position}</td>
    <td>${totalSalary(currentEmployee.position, currentEmployee.salary)}</td>
    <td>${employeeRank(currentEmployee.position, currentEmployee.timeWork)}</td>
  </tr>`;
  }
  document.getElementById("tableDanhSach").innerHTML = html;
}
function saveData() {
  localStorage.setItem("list", JSON.stringify(employeeList));
}

function getData() {
  var enmployeeListStr = localStorage.getItem("list");
  if (!enmployeeListStr) {
    return;
  }
  employeeList = JSON.parse(enmployeeListStr);
  renderTable();
}
getData();
