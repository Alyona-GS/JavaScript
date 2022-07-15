function Person(personData) {
  this.name        = personData[0];
  this.lastName    = personData[1];
  this.location    = personData[2];
  this.phoneNumber = personData[3];

  this.eat        = function() {};
  this.sleep      = function() {};
  this.callFriend = function() {};
}

function Employee(personData, employeeData) {
  Person.call(this, personData);

  this.position       = employeeData[0];
  this.startDate      = employeeData[1];
  this.baseSalary     = employeeData[2];
  this.salaryCurrency = employeeData[3];
  this.department     = employeeData[4];
}

function Current(personData, employeeData) {
  Employee.call(this, personData, employeeData);

  this.writeReport     = function() {};
  this.organizeMeeting = function() {};
  this.retire          = function() {};
  this.startVacation   = function() {};
};

function Retired(personData, employeeData, endDate) {
  Employee.call(this, personData, employeeData);

  this.endDate = endDate;
};

Employee.prototype = Object.create(Person.prototype);

Current.prototype = Object.create(Employee.prototype);
Retired.prototype = Object.create(Employee.prototype);