firstNumber = 0;
secondNumber = 0;
operator = "";

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

function operate(firstNumber, operator, secondNumber) {
    if (operator === "+") add(firstNumber, secondNumber);
    else if (operator === "-") subtract(firstNumber, secondNumber);
    else if (operator === "*") multiply(firstNumber, secondNumber);
    else if (operator === "/") divide(firstNumber, secondNumber);
}