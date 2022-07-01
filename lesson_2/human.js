var human = Object.create({}, {
  fullName: {
    set: function(name) {
      [this.firstName, this.lastName] = name.split(' ');
      return name
    },
    get: function() {
      return [this.firstName, this.lastName].join(' ').trim()
    }
  },
  dateOfBirth: {
    set: function(date){
      let [day, month, year] = date.split(/[.:/-]/);
      date = [month, day, year].join('.');

      this.birthday = new Date(date);
      this.age = new Date().getFullYear() - year
    },
    get: function() {
      return new Intl.DateTimeFormat().format(this.birthday)
    }
  }
});