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
    case "*":
      multiply(a, b);
      break;
    case "/":
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

let firstNumber;
let secondNumber;
let operator;

const screenValue = document.querySelector("#screen");

const numbers = document.querySelectorAll(".number");
numbers.forEach(number => number.addEventListener("click", populateDisplay));