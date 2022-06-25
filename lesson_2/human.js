var human = Object.create({}, {
  fullName: {
    set: function(name) {
      [this.firstName, this.lastName] = name.split(' ');
      return name
    },
    get: function() {
      return this.firstName + ' ' + this.lastName
    }
  },
  dateOfBirth: {
    set: function(date){
      this.birthday = new Date(date);
      this.age = new Date().getFullYear() - this.birthday.getFullYear()
    },
    get: function() {
      return [this.birthday.getDate(),
              this.birthday.getMonth() + 1,
              this.birthday.getFullYear()].join('.')
    }
  }
});