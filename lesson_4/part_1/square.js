var Rectangle = function() {
  this.set = function(...sides) {
    this.sides = sides;
  }

  this.perimeter = function() {
    return (this.sides.reduce((a, b) => a + b, 0)) * 2
  }

  this.square = function() {
    return this.sides.reduce((a, b) => a * b)
  }
}

var Square = function() {};
Square.prototype = new Rectangle();

Square.prototype.set = function(side) {
  this.sides = [side, side]
}