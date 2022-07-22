function Person(data) {
  this.name        = data['name'];
  this.lastName    = data['lastName'];
  this.location    = data['location'];
  this.phoneNumber = data['phoneNumber'];

  this.eat        = function() {};
  this.sleep      = function() {};
  this.callFriend = function() {};
}

function Employee(data) {
  Object.setPrototypeOf(Object.getPrototypeOf(this), new Person(data));

  this.position       = data['position'];
  this.startDate      = data['startDate'];
  this.baseSalary     = data['baseSalary'];
  this.salaryCurrency = data['salaryCurrency'];
  this.department     = data['department'];
}

function Current(data) {
  Object.setPrototypeOf(Object.getPrototypeOf(this), new Employee(data));

  this.writeReport     = function() {};
  this.organizeMeeting = function() {};
  this.retire          = function() {};
  this.startVacation   = function() {};
};

function Retired({endDate, ...data} = {}) {
  Object.setPrototypeOf(Object.getPrototypeOf(this), new Employee(data));
  
  this.endDate = endDate;
};