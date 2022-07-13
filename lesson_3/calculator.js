function Calc() {
  var op_history = [],
      operations = { "+": (a, b) => a + b,
                     "-": (a, b) => a - b };

  this.operation = function(str) {
    
    var sign = str.trim().split(/\s+/)[1];
    var operands = str.split(sign).map(parseFloat);

    op_history.push({ "operation": sign, "operands": operands});
    
    return operations[sign] ? operations[sign].apply(Object, operands) : operands[0]
  },

  this.addOperation = function(sign, f) { operations[sign] = f },

  this.history = function() { console.log(op_history) },

  this.clearHistory = function() { op_history = [] }
}