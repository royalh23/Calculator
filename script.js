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
  switch (operator) {
    case "+":
      add(a, b);
      break;
    case "-":
      subtract(a, b);
      break;
    case "x":
      multiply(a, b);
      break;
    case "÷":
      divide(a, b);
      break;
  }
}

function populateDisplay(e) {
  if (screenValue.textContent === "0") {
    screenValue.textContent = e.target.textContent;
  } else {
    screenValue.textContent += e.target.textContent;
  }
}

function drawOperator(e) { 
  operatorSelected = true;
  firstNumber = screenValue.textContent;
  operator = e.target.textContent;
  screenValue.textContent += ` ${operator} `;
}

let firstNumber;
let secondNumber;
let operator;
let operatorSelected = false;

const screenValue = document.querySelector("#screen");

const numbers = document.querySelectorAll(".number");
numbers.forEach(number => number.addEventListener("click", populateDisplay));

const operators = document.querySelectorAll(".operator");
operators.forEach(operator => operator.addEventListener("click", drawOperator));