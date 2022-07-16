function Ship(color) {
  this.color = color;
  this.isBroken = false;
  this.isOld = false;
}

function MotorShip(power, material, color = "default") {
  Ship.call(this, color);

  this.power = power;
  this.material = material;
}

function SailingShip(masts, sails_area, color = "default") {
  Ship.call(this, color);

  this.masts = masts;
  this.sails_area = sails_area;
}

function ShipYard() {
  this.build = function(...params) {
    return this instanceof MotorShipYard ? new MotorShip(...params) : new SailingShip(...params)
  }

  this.repair = function(ship) {
    if (!ship.isBroken) { return console.log("Ship is not broken") };

    if (this instanceof MotorShipYard && ship instanceof MotorShip ||
        this instanceof SailingShipYard && ship instanceof SailingShip) {

      ship.isBroken = false

    } else {
      console.log("Type of ship is incorrect");
    }
  }

  this.repaint = function(ship, color) {
    ship.color = color;
  };

  this.exchange = function(ship, ...params) {
    if (!ship.isOld) { return console.log("Ship is not old") };

    new_ship = ship instanceof MotorShip ? new MotorShip(...params) : new SailingShip(...params);

    Object.keys(ship).forEach(function(key) { delete ship[key] });
    return new_ship
  };
}

function MotorShipYard(ship) {
  ShipYard.call(this, ship)
}

function SailingShipYard(ship) {
  ShipYard.call(this, ship)
}

MotorShipYard.prototype   = Object.create(ShipYard.prototype);
SailingShipYard.prototype = Object.create(ShipYard.prototype);

MotorShip.prototype   = Object.create(Ship.prototype);
SailingShip.prototype = Object.create(Ship.prototype);