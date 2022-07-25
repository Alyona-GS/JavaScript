function Ship(color) {
  this.color = color;
  this.isBroken = false;
  this.isOld = false;
}

function MotorShip(power, material, color = "default") {
  Object.setPrototypeOf(Object.getPrototypeOf(this), new Ship(color));

  this.power = power;
  this.material = material;
}

function SailingShip(masts, sails_area, color = "default") {
  Object.setPrototypeOf(Object.getPrototypeOf(this), new Ship(color));

  this.masts = masts;
  this.sails_area = sails_area;
}

function ShipYard() {
  this.build = function(...params) { return new this.shipConstructor(...params) };

  this.repair = function(ship) {
    if (!ship.isBroken) { return console.log("Ship is not broken") };

    ship instanceof this.shipConstructor ? ship.isBroken = false : console.log("Type of ship is incorrect");
  }

  this.repaint = function(ship, color) { ship.color = color };

  this.exchange = function(ship, ...params) {
    if (!ship.isOld) { return console.log("Ship is not old") };
    if (!(ship instanceof this.shipConstructor)) { return console.log("Type of ship is incorrect") };

    Object.keys(ship).forEach(key => delete ship[key]);
    Object.assign(ship, new this.shipConstructor(...params));
  };
}

function MotorShipYard(ship) {
  Object.setPrototypeOf(Object.getPrototypeOf(this), new ShipYard());

  this.shipConstructor = MotorShip;
}

function SailingShipYard(ship) {
  Object.setPrototypeOf(Object.getPrototypeOf(this), new ShipYard());

  this.shipConstructor = SailingShip;
}