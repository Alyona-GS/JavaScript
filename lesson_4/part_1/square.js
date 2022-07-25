var Rectangle = function() {
  this.set = function(...sides) {
    sides = [...new Set(sides)];

    sides.length == 2 ? this.sides = sides : console.log("This is not a rectangle")
  }

  this.perimeter = function() {
    return (this.sides.reduce((a, b) => a + b, 0)) * 2
  }

  this.square = function() {
    return this.sides.reduce((a, b) => a * b)
  }
}

var Square = function() {
  this.set = function(...sides) {
    sides = [...new Set(sides)];

    sides.length == 1 ? this.sides = sides.concat(sides) : console.log("This is not a square")
  }
};

Square.prototype = new Rectangle();