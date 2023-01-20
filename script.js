let operator = "";
let operatorSet = false;
let firstNumber = "";
let secondNumber = "";
let previousOperator = "";
let previousResult = 0;
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

//Create a performEvent Function to be called on click
function performEvent(e) {
    const value = e.target.value;
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
    } else {
        operator = value;
        operatorSet = true;
    }
}