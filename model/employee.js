function Employee(
  account,
  fullName,
  email,
  passWord,
  startDay,
  salary,
  position,
  timeWork
) {
  this.account = account;
  this.fullName = fullName;
  this.email = email;
  this.passWord = passWord;
  this.startDay = startDay;
  this.salary = salary;
  this.position = position;
  this.timeWork = timeWork;

  this.totalSalary = function (position, salary) {
    if (position === "Sếp") {
      salary *= 3;
    } else if (position === "Trưởng phòng") {
      salary *= 2;
    } else {
      salary *= 1;
    }
    return salary;
  };

  this.employeeRank = function (position, timeWork) {
    var rank;
    if (position === "Nhân viên" && +timeWork >= "192") {
      rank = "xuất sắc";
    } else if (position === "Nhân viên" && +timeWork >= "176") {
      rank = "giỏi";
    } else if (position === "Nhân viên" && +timeWork >= "160") {
      rank = "khá";
    } else if (position === "Nhân viên" && +timeWork < "160") {
      rank = "Trung bình";
    } else rank = "";
    return rank;
  };
}
