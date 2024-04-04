let currentOperation = '+';

function buttonPlus() {
    let div = document.getElementById('sign');
    var character = '+';
    div.textContent = character;
    currentOperation = character;
}

function buttonMinus() {
    let div = document.getElementById('sign');
    var character = '-';
    div.textContent = character;
    currentOperation = character;
}

function buttonMultiply() {
    let div = document.getElementById('sign');
    var character = '*';
    div.textContent = character;
    currentOperation = character;
}

function buttonDivide() {
    let div = document.getElementById('sign');
    var character = '/';
    div.textContent = character;
    currentOperation = character;
}

function buttonClick() {
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;

    let result;

    switch (currentOperation) {
        case '+':
            result = parseFloat(num1) + parseFloat(num2);
            break;
        case '-':
            result = parseFloat(num1) - parseFloat(num2);
            break;
        case '*':
            result = parseFloat(num1) * parseFloat(num2);
            break;
        case '/':
            result = parseFloat(num1) / parseFloat(num2);
            break;
        default:
            result = 'Invalid Operation';
    }
    console.log(result);
}

