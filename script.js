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
  firstNumber = +screenValue.textContent;
  operator = e.target.textContent;
  screenValue.textContent += ` ${operator} `;
}

function displayResult(e) {
  result = operate(operator, firstNumber, secondNumber);
  screenValue.textContent = result;
}

let result;
let firstNumber;
let secondNumber;
let operator;
let operatorSelected = false;

const screenValue = document.querySelector("#screen");

const numbers = document.querySelectorAll(".number");
numbers.forEach(number => number.addEventListener("click", displayNumbers));

const operators = document.querySelectorAll(".operator");
operators.forEach(operator => operator.addEventListener("click", displayOperator));

const equal = document.querySelector(".equal");
equal.addEventListener("click", displayResult);