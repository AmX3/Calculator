import { createElementWithText } from "./js-modules/dom.js";

import { addition } from "./js-modules/operators.js";
import { subtraction } from "./js-modules/operators.js";
import { multiplication } from "./js-modules/operators.js";
import { division } from "./js-modules/operators.js";

// TOGGLE + CALCULATOR DISPLAY

const toggleBtn = document.querySelector("#toggleBtn");
const calculator = document.querySelector(".calculator");
const operators = document.querySelectorAll(".calculator__operators");
const numbers = document.querySelectorAll(".calculator__numbers");

const calcDisplay = document.querySelector("#calculatorDisplay");
const prevResult = document.querySelector("#previousOperand");
const currResult = document.querySelector("#currentOperand");
const limitWarning = document.querySelector(".calculator__limit-warning");
const deleteNum = document.querySelector("#delete");

// SELECTING NUMBERS
// const zero = document.querySelector("#num0");
// const one = document.querySelector("#num1");
// const two = document.querySelector("#num2");
// const three = document.querySelector("#num3");
// const four = document.querySelector("#num4");
// const five = document.querySelector("#num5");
// const six = document.querySelector("#num6");
// const seven = document.querySelector("#num7");
// const eight = document.querySelector("#num8");
// const nine = document.querySelector("#num9");

// OPERATORS AND SPECIAL OP
const total = document.querySelector("#total");
const add = document.querySelector("#addition");
const subtract = document.querySelector("#subtract");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#division");
const float = document.querySelector("#decimal");
const plusMinus = document.querySelector("#additionMinus");
const clear = document.querySelector("#clear");
const clearNone = document.querySelector(".calculator__delete-warning");
console.log(clearNone);

// DARK MODE & LIGHT MODE
toggleBtn.addEventListener("click", () => {
    calculator.classList.toggle("calculator--light-mode");
    // changing colors of btn
    operators.forEach((btn) =>
        btn.classList.toggle("calculator__operators--light-mode")
    );
    numbers.forEach((btn) =>
        btn.classList.toggle("calculator__numbers--light-mode")
    );
    prevResult.classList.toggle("calculator__previous-result--light-mode");
    currResult.classList.toggle("calculator__current-result--light-mode");
    deleteNum.classList.toggle("fa-delete-left--light-mode");
});

// Default current result calcdisplay to 0 -> Fix
if ((currResult.textContent = "0")) {
    currResult.textContent = "";
}

// Node.textContent -> Returns / Sets the textual content of an element and all its descendants.
const calcResultDisplay = (result) => {
    calcDisplay.textContent = result;
};

// alerting the user that they have reached the limit the calcDisplay can display
const limitCalcDisplay = (numlimit) => {
    if (numlimit.length > 10) {
        if (limitWarning.childNodes.length > 0) {
            limitWarning.removeChild(limitWarning.firstChild);
        }
        createElementWithText(
            "p",
            `Number limit has been reached`,
            limitWarning
        );
    }
};

// if numbers value is greater than 10, error warning should appear else numbers concatenate
const currentResult = (num) => {
    let currentResult = currResult.textContent;
    if (currentResult.length > 10) {
        limitCalcDisplay(currentResult);
    } else {
        currResult.textContent += num;
    }
};

// previousResult-fix
const previousResult = (num) => {
    let prevValue = prevResult.textContent;
    prevValue += currentResult.textContent;
    return prevValue;
};

// getting single values to display on currentResult
numbers.forEach((btn) =>
    btn.addEventListener("click", () => currentResult(btn.value))
);

operators.forEach((btn) =>
    btn.addEventListener("click", () => currentResult(btn.value))
);

// needs fixing
const calculations = () => {
    let operations = currResult.textContent;
    console.log(operations);
    // parseFloat first converts the string into numbers and stops when it reaches a value that is not a number
    const prevNum = parseFloat(currResult.textContent);
    console.log(prevNum);
    const currNum = parseFloat(currResult.textContent);
    // if (isNaN(prevNum) || isNaN(currNum)) return;
    console.log(currNum);
    let result;
    switch (operations) {
        case multiply:
            result = createElementWithText(
                "p",
                `${multiplication(prevNum.value, currNum.value)}`,
                currResult
            );
            console.log(result);
            break;
        case divide:
            result = createElementWithText(
                "p",
                `${division(prevNum.value, currNum.value)}`,
                currResult
            );
            break;
        case subtract:
            result = createElementWithText(
                "p",
                `${subtraction(prevNum.value, currNum.value)}`,
                currResult
            );
            break;
        case add:
            result = createElementWithText(
                "p",
                `${addition(prevNum.value, currNum.value)}`,
                currResult
            );
        default:
            console.log(`Invalid Inputs`);
    }
    // removes values if exceeds one. Only displays one line on currentResult display
    if (currResult.childNodes.length > 0) {
        currResult.removeChild(currResult.firstChild);
    }
    createElementWithText("p", currResult.value, currResult);
};

total.addEventListener("click", calculations);

// SPECIAL OPERATORS FUNCTIONS AND EVENT LISTENERS

const appendNum = (num) => {
    if (num === "." && currResult.includes(".")) {
        return num;
    }
};
float.addEventListener("click", appendNum);

// Deleting a number -> if currentResult is truthy, return currentResult content that shows one less value else return error message if there is nothing to delete
const deleteANum = () => {
    let currentResult = currResult.textContent;
    if (currentResult) {
        return (currResult.textContent = currentResult.slice(0, -1));
    } else {
        if (clearNone.childNodes.length > 0) {
            clearNone.removeChild(clearNone.firstChild);
        }
        createElementWithText("p", `Error! Enter a number.`, clearNone);
    }
};
deleteNum.addEventListener("click", deleteANum);

// clear button - removes current result, previous result and warning msg
const clearAll = () => {
    currResult.textContent = "";
    prevResult.textContent = "";
    limitWarning.textContent = "";
};

clear.addEventListener("click", clearAll);
