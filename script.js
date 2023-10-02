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
    case "×":
      result = multiply(a, b);
      break;
    case "÷":
      result = divide(a, b);
      break;
  }
  return result;
}

function roundDown(number, decimals) {
  if (!Number.isInteger(number)) {
    return +number.toFixed(decimals);
  } else {
    return number;
  }
}

function displayNumbers(e) {
  if (resultShown) {
    clearDisplay();
  }
  if (screenValue.textContent === "0") {
    screenValue.textContent = e.target.textContent;
  } else {
    // Disable click event on decimal point after one point
    if (e.target.textContent === ".") point.removeEventListener("click", displayNumbers);
    screenValue.textContent += e.target.textContent;
    if (operatorSelected) {
      secondNumber = +screenValue.textContent
                                .replace(`${firstNumber} ${operator} `, "");
    }
  }
}

function displayOperator(e) { 
  // Add event listener to decimal point for the second number
  point.addEventListener("click", displayNumbers);

  // Set resultShown to false so users can input second number without having
  // the display cleared
  resultShown = false;

  // Set operatorSelected to true so that the second number after the operator
  // can be saved in a variable
  operatorSelected = true;
  if (secondNumber != null) {
    firstNumber = operate(operator, firstNumber, secondNumber);
    firstNumber = roundDown(firstNumber, 6);
    operator = e.target.textContent;
    screenValue.textContent = `${firstNumber} ${operator} `;
  } else {
    firstNumber = +screenValue.textContent;
    operator = e.target.textContent;
    screenValue.textContent += ` ${operator} `;
  } 
}

function displayResult(e) {
  resultShown = true;
  if (secondNumber == 0) {
    screenValue.textContent = "Bruh...";
  } else {  
    result = operate(operator, firstNumber, secondNumber);
    result = roundDown(result, 6);
    screenValue.textContent = result;
  }
}

function clearDisplay() {
  result = null;
  firstNumber = null;
  secondNumber = null;
  operator = null;
  operatorSelected = false;
  resultShown = false;
  screenValue.textContent = "0";
  point.addEventListener("click", displayNumbers);
}

let result = null;
let firstNumber = null;
let secondNumber = null;
let operator = null;
let operatorSelected = false;
// Set a flag for starting afresh after equal key has been pressed
let resultShown = false;

const screenValue = document.querySelector("#screen");

const numbers = document.querySelectorAll(".number");
numbers.forEach(number => number.addEventListener("click", displayNumbers));

const operators = document.querySelectorAll(".operator");
operators.forEach(operator => operator.addEventListener("click", displayOperator));

const equal = document.querySelector(".equal");
equal.addEventListener("click", displayResult);

const clear = document.querySelector("#clear");
clear.addEventListener("click", clearDisplay);

const point = document.querySelector("#point");