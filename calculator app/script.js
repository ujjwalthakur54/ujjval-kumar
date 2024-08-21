let currentInput = '';
let operator = '';
let operand1 = null;
let operand2 = null;

function appendNumber(number) {
    if (operator && !operand2) {
        currentInput = number;
        operand2 = currentInput;
    } else {
        currentInput = currentInput === '0' ? number : currentInput + number;
    }
    updateDisplay();
}

function appendOperator(op) {
    if (operand1 === null) {
        operand1 = currentInput;
        operator = op;
        currentInput = '';
    } else if (operator && operand2) {
        calculateResult();
        operator = op;
        operand1 = currentInput;
        currentInput = '';
    } else {
        operator = op;
    }
}

function calculateResult() {
    if (operand1 === null || !operator || currentInput === '') return;

    operand2 = currentInput;
    let result;
    const num1 = parseFloat(operand1);
    const num2 = parseFloat(operand2);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = '';
    operand1 = null;
    operand2 = null;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    operator = '';
    operand1 = null;
    operand2 = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').textContent = currentInput;
}
