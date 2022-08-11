const display = document.querySelector(".display");
const buttonsBlock = document.querySelector(".btn-group");

var counter = 0,
    typesetting_mode = false,
    operands = [null, null],
    sign = null,
    operations = { "+": (a, b) => a + b,
                   "-": (a, b) => a - b,
                   "*": (a, b) => a * b,
                   "/": (a, b) => a / b };

const addOperation = () => {
  counter++;
  switch (counter) {
    case 1:
      input = display.innerHTML;
      if (input == "C") {
        counter = 0;
        throw 'C is a special function';
      } else {
        sign = display.innerHTML;
      }
      display.innerHTML = "";
      alert (`Your sign: ${sign}\r\nInput the formula like: a * b`);
      break;
    case 2:
      operations[sign] = "(a, b) => ".concat(display.innerHTML);
      display.innerHTML = "";
      typesetting_mode = false;

      button = document.createElement('div');
      button.className = "button";
      button.textContent = sign;
      buttonsBlock.append(button);
      break;
  }
};

const performAction = (sign, operands) => {
  operands = operands.map(e => +e );
  let result = eval(operations[sign]).apply(Object, operands);
  operands[1] = result;
  display.innerHTML = operands[1];
  sign = null;
  operands[0] = null;
}

const performInputOperation = keyValue => {
  if (Object.keys(operations).includes(keyValue)) {
    operands[0] = display.innerHTML;
    operands[1] = null;
    sign = keyValue;
    display.innerHTML = "";
  }

  switch (keyValue) {
    case "C":
      operands = [null, null];
      sign = null;
      display.innerHTML = "";
      break;
    case "Backspace":
      operands[1] = display.innerHTML.slice(0, -1);
      display.innerHTML = operands[1];
      break;
    case "New":
      alert("Input the operation sign");
      typesetting_mode = true;
      counter = 0;
      break;
    case "=":
    case "Enter":
      performAction(sign, operands);
      break;
    default:
      if (Number.isInteger(+keyValue)) {
        operands[1] = operands[1] === null ? keyValue : operands[1] + keyValue;
        display.textContent = operands[1];
      }
      break;
  }
}

const typesetting = keyValue => {
  if (keyValue == "C" && event.type == "click") { display.innerHTML = "" };

  switch (keyValue) {
    case "Backspace":
      display.textContent = display.textContent.slice(0, -1);
      break;
    case "Enter":
      addOperation();
      break;
    default:
      if (keyValue.length == 1) {
        display.textContent = display.textContent + keyValue;
      }
      break;
  }
}

document.addEventListener("keyup", event => {
  const keyValue = event.key;
  typesetting_mode ? typesetting(keyValue) : performInputOperation(keyValue);
});

buttonsBlock.addEventListener("click", event => {
  const buttonValue = event.target.textContent;
  typesetting_mode ? typesetting(buttonValue) : performInputOperation(buttonValue);
});