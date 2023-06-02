var num = 0;
var isFirst = true;
var current = "";
var display = "";
var operator = "";
var output = document.getElementById("display");

function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
}

function numClicked(value) {
    current += value;
    display += value;
    output.innerHTML = display;
    console.log("Current: ",current, "Display: ", display, "Operator:  ", operator, "Num: ",num);
}

function opClicked(value) {

    display += value;
    output.innerHTML = display;

    if (isFirst) {
        if (current != "") {
            num = parseFloat(current);
        }
        isFirst = false;
    } else {
        num = operate(operator, num, parseFloat(current));
    }
    current = "";
    operator = value;
    console.log("Current: ",current, "Display: ", display, "Operator:  ", operator, "Num: ",num);
}

function eqClicked() {

    if (current != "") {
        opClicked(operator);
    }

    display = num;
    operator = "";
    output.innerHTML = display;
    isFirst = true;
    console.log("Current: ",current, "Display: ", display, "Operator:  ", operator, "Num: ",num);
}

function cClicked() {
    num = 0;
    isFirst = true;
    current = "";
    display = "";
    output.innerHTML = display;
    operator = "";
    console.log("Current: ",current, "Display: ", display, "Operator:  ", operator, "Num: ",num);
}

function backClicked() {
    if(current != "" && !isNaN(current[current.length - 1])) {
        current = current.slice(0, -1);
    } else {
        operator = "";
        isFirst = true;
    }
    display = display.slice(0,-1);
    output.innerHTML = display;
    console.log("Current: ",current, "Display: ", display, "Operator:  ", operator, "Num: ",num);
}