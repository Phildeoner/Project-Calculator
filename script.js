let operator = "";
let operatorSet = false;
let firstNumber = "";
let secondNumber = "";
let previousOperator = "";
let previousResult = 0;
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

function performEvent(buttons) {
    const value = buttons.target.value;
    if (!isNaN(value) || value === ".") {
      if (!operatorSet) {
        firstNumber += value;
        display.value = firstNumber;
      } else {
        secondNumber += value;
        display.value = secondNumber;
      }
    } else if (value === "clear") {
      operator = "";
      operatorSet = false;
      firstNumber = "";
      secondNumber = "";
      previousOperator = "";
      previousResult = 0;
      display.value = "";
    } else if (value === "=") {
        if (secondNumber === "" && operator !== "") {
          display.classList.add("error");
          setTimeout(() => {
            display.classList.remove("error");
          }, 1000);
          return;
        }
        performOperation();
        previousOperator = "";
        previousResult = 0;
      } else {
        operator = value;
        operatorSet = true;
    }
}

function performOperation() {
    let result = 0;
    let currentNumber = parseFloat(firstNumber);
    if (previousOperator !== "") {
        currentNumber = previousResult;
    }
    if (operator === "+") {
        result = currentNumber + parseFloat(secondNumber);
    } else if (operator === "-") {
        result = currentNumber - parseFloat(secondNumber);
    } else if (operator === "*") {
        result = currentNumber * parseFloat(secondNumber);
    } else if (operator === "/") {
        if (secondNumber == 0) {
            display.classList.add("error");
            setTimeout(() => {
            display.classList.remove("error");
            }, 1000);
            return;
        }
        result = currentNumber / parseFloat(secondNumber);
    }
    previousOperator = operator;
    previousResult = result;
    firstNumber = "";
    secondNumber = "";
    operatorSet = false;
    operator = "";
    display.value = result;
}

buttons.forEach((button) => {button.addEventListener("click", performEvent)});
