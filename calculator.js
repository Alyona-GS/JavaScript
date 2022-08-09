const display = document.querySelector(".display");
const buttonsBlock = document.querySelector(".btn-group");

var input,
    counter = 0,
    typesetting_mode = false,
    op_hist = [],
    operands = [null, null],
    sign = null,
    operations = { "+": (a, b) => a + b,
                   "-": (a, b) => a - b,
                   "*": (a, b) => a * b,
                   "/": (a, b) => a / b };

const addOperation = (input) => {
  counter++;
  switch (counter) {
    case 1:
      sign = display.innerHTML;
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

  if (Number.isInteger(+keyValue)) {
    operands[1] = operands[1] === null ? keyValue : operands[1] + keyValue;
    display.textContent = operands[1];

    console.log("integer", sign, operands);
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
      console.log("=/enter",sign, operands);
      performAction(sign, operands);
      break;
  }
}

const typesetting = keyValue => {
  switch (keyValue) {
    case "C":
      display.textContent = "";
      break;
    case "Backspace":
      display.textContent = display.textContent.slice(0, -1);
      break;
    case "Enter":
      addOperation(input);
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
  console.log("keyup",keyValue,sign, operands);
  typesetting_mode ? typesetting(keyValue) : performInputOperation(keyValue);
});

buttonsBlock.addEventListener("click", event => {
  const buttonValue = event.target.textContent;
  console.log("click", buttonValue,sign, operands);
  typesetting_mode ? typesetting(buttonValue) : performInputOperation(buttonValue);
});