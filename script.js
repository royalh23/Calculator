function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  let result;
  switch (operator) {
    case "+":
      result = add(a, b);
      break;
    case "-":
      result = subtract(a, b);
      break;
    case "x":
      result = multiply(a, b);
      break;
    case "÷":
      result = divide(a, b);
      break;
  }
  return result;
}

function displayNumbers(e) {
  if (screenValue.textContent === "0") {
    screenValue.textContent = e.target.textContent;
  } else {
    screenValue.textContent += e.target.textContent;
    if (operatorSelected) {
      secondNumber = +screenValue.textContent
                                .replace(`${firstNumber} ${operator} `, "");
    }
  }
}

function displayOperator(e) { 
  operatorSelected = true;
  if (secondNumber != null) {
    firstNumber = operate(operator, firstNumber, secondNumber);
    if (!Number.isInteger(firstNumber)) firstNumber = +firstNumber.toFixed(6);
    operator = e.target.textContent;
    screenValue.textContent = `${firstNumber} ${operator} `;
  } else {
    firstNumber = +screenValue.textContent;
    operator = e.target.textContent;
    screenValue.textContent += ` ${operator} `;
  } 
}

function displayResult(e) {
  result = operate(operator, firstNumber, secondNumber);
  if (!Number.isInteger(result)) result = +result.toFixed(6);
  screenValue.textContent = result;
}

function clearDisplay() {
  result = null;
  firstNumber = null;
  secondNumber = null;
  operator = null;
  operatorSelected = false;
  screenValue.textContent = "0";
}

let result = null;
let firstNumber = null;
let secondNumber = null;
let operator = null;
let operatorSelected = false;

const screenValue = document.querySelector("#screen");

const numbers = document.querySelectorAll(".number");
numbers.forEach(number => number.addEventListener("click", displayNumbers));

const operators = document.querySelectorAll(".operator");
operators.forEach(operator => operator.addEventListener("click", displayOperator));

const equal = document.querySelector(".equal");
equal.addEventListener("click", displayResult);

const clear = document.querySelector("#clear");
clear.addEventListener("click", clearDisplay);