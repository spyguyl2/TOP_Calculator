let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let displayValue = "";
//aquire buttons
const buttons = [];
for (let i = 0; i < 16; i++) {
    buttons[i] = document.querySelector('#btn' + i);
}
const buttonClear = buttons[10];
const buttonMultiply = buttons[11];
const buttonPlus = buttons[12];
const buttonDecimal = buttons[13];
const buttonEqual = buttons[14];
const buttonMinus = buttons[15];
//#region Basic operation functions
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
//#endregion

function operate(firstNumber, operator, secondNumber) {
    if (operator === "+") add(firstNumber, secondNumber);
    else if (operator === "-") subtract(firstNumber, secondNumber);
    else if (operator === "*") multiply(firstNumber, secondNumber);
    else if (operator === "/") divide(firstNumber, secondNumber);
}