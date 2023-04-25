//#region Core variables
let firstNumber = '';
let secondNumber = '';
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

//array of operator buttons. Currently used in resetAllValues() and selectOperatorButton()
const operators = [buttonDivide, buttonPlus, buttonMinus, buttonMultiply];

//#region Button click events
//this covers all number buttons
for (let i = 0; i < 10; i++) {
    buttons[i].addEventListener('click', () => {
        display(i);
    });
}
//rest of buttons           ***Should these be in an array? The same array? Just the operators together??***
buttonClear.addEventListener('click', () => {
    resetAllValues();
});
buttonMultiply.addEventListener('click', () => {
    selectOperatorButton(buttonMultiply,'*');
});
buttonPlus.addEventListener('click', () => {
    selectOperatorButton(buttonPlus, '+');
});
buttonDecimal.addEventListener('click', () => {
    
});
buttonEqual.addEventListener('click', () => {
    if (operator === '' || firstNumber === '' || secondNumber === '') return;
    else operate(firstNumber, operator, secondNumber);
});
buttonMinus.addEventListener('click', () => {
    selectOperatorButton(buttonMinus, '-');
});
buttonDivide.addEventListener('click', () => {
    selectOperatorButton(buttonDivide, '/');
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



function resetAllValues() {
    firstNumber = 0;
    secondNumber = 0;
    operator = "";
    calcDisplay.textContent = "";
    displayValue = [];
    firstNumberEntered = false;
    secondNumberEntered = false;

    operators.forEach(element => {
        element.classList.add('off-color');
        element.classList.remove('selected');
    });
}

function display(value) {
    displayValue.push(value);
    calcDisplay.textContent = displayValue.join('');
}

function selectOperatorButton(element, operatorString) {
    if (displayValue.length > 0 || operator != "") 
    {
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
        if (firstNumberEntered === false) {
            firstNumber = parseInt(calcDisplay.textContent);
            operator = operatorString;
            firstNumberEntered = true;
        }
        else if (firstNumberEntered = true) operator = operatorString;
    }
    else return;
    
}

function operate(firstNumber, operator, secondNumber) {
    if (operator === "+") display(add(firstNumber, secondNumber));
    else if (operator === "-") display(subtract(firstNumber, secondNumber));
    else if (operator === "*") display(multiply(firstNumber, secondNumber));
    else if (operator === "/") display(divide(firstNumber, secondNumber));
    else console.error('The operate function is FLAWED!');
}