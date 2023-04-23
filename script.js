//#region Global variables
let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let displayValue = [];
let firstNumberEntered = false;
let secondNumberEntered = false;
//#endregion


//#region Set querySelectors
const calcDisplay = document.querySelector('#display');
const buttons = [];
for (let i = 0; i < 17; i++) {
    buttons[i] = document.querySelector('#btn' + i);
}
const buttonClear = buttons[10];
const buttonMultiply = buttons[11];
const buttonPlus = buttons[12];
const buttonDecimal = buttons[13];
const buttonEqual = buttons[14];
const buttonMinus = buttons[15];
const buttonDivide = buttons[16];
//#endregion


//#region Button click events
//this covers all number buttons
for (let i = 0; i < 10; i++) {
    buttons[i].addEventListener('click', () => {
        display(i);
    });
}
//rest of buttons           ***Should these be in an array? The same array? Just the operators together??***
buttonClear.addEventListener('click', () => {
    firstNumber = 0;
    secondNumber = 0;
    operator = "";
    calcDisplay.textContent = "";
    displayValue = [];
    firstNumberEntered = false;
    secondNumberEntered = false;
});
buttonMultiply.addEventListener('click', () => {
    selectOperatorButton(buttonMultiply);
});
buttonPlus.addEventListener('click', () => {
    selectOperatorButton(buttonPlus);
});
buttonDecimal.addEventListener('click', () => {
    
});
buttonEqual.addEventListener('click', () => {
    
});
buttonMinus.addEventListener('click', () => {
    selectOperatorButton(buttonMinus);
    /*if (displayValue.length > 0 || operator === "+" || operator === "-" 
        || operator === "*" || operator === "/") 
    {
        selectOperatorButton(buttonMinus);
        if (firstNumberEntered === false) {
            firstNumber = parseInt(calcDisplay.textContent);
            operator = "-";
            firstNumberEntered = true;
        }
        else if (firstNumberEntered = true) operator = "-";
    }
    else return; */
    
});
buttonDivide.addEventListener('click', () => {
    selectOperatorButton(buttonDivide);
});
//#endregion

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

function display(number) {
    displayValue.push(number);
    calcDisplay.textContent = displayValue.join('');
}
/*
function selectOperatorButton(element) {
    const operators = [buttonDivide, buttonPlus, buttonMinus, buttonMultiply];
    for (i = 0; i < operators.length; i++) {
        if (element === operators[i]) {
            operators[i].classList.add('selected');
            operators[i].classList.remove('off-color');
        }
        else {
            operators[i].classList.add('off-color');
            operators[i].classList.remove('selected');
        }
    };
}
*/
function selectOperatorButton(element) {
    const operators = [buttonDivide, buttonPlus, buttonMinus, buttonMultiply];
    operators.forEach(operator => {
        if (operator === element) {
            operator.classList.add('selected');
            operator.classList.remove('off-color');
        }
        else {
            operator.classList.add('off-color');
            operator.classList.remove('selected');
        }
    });
}
/* leaving for example
function selectOperatorButtonTEST(element) {
        if (buttonDivide === element) {
            buttonDivide.classList.add('selected');
            buttonDivide.classList.remove('off-color');
            buttonMinus.classList.add('off-color');
            buttonMinus.classList.remove('selected');
            buttonPlus.classList.add('off-color');
            buttonPlus.classList.remove('selected');
            buttonMultiply.classList.add('off-color');
            buttonMultiply.classList.remove('selected');
        }
        else if (buttonMultiply === element) {
            element.classList.add('off-color');
            element.classList.remove('selected');
        }
        else if (buttonPlus === element) {
            element.classList.add('off-color');
            element.classList.remove('selected');
        }
        else if (buttonMinus === element) {
            element.classList.add('off-color');
            element.classList.remove('selected');
        }
}
*/

function operate(firstNumber, operator, secondNumber) {
    if (operator === "+") add(firstNumber, secondNumber);
    else if (operator === "-") subtract(firstNumber, secondNumber);
    else if (operator === "*") multiply(firstNumber, secondNumber);
    else if (operator === "/") divide(firstNumber, secondNumber);
    else console.error('The operate function is FLAWED!');
}