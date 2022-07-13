function MoneyBox() {
  var coins = 0;

  this.addCoin = function() {
    coins++
  };
  this.getAmount = function() {
    return coins
  }
}