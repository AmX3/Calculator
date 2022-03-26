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
let currResult = document.querySelector("#currentOperand");
console.log(currResult);

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
    currResult.classList.toggle("calculator__previous-result--light-mode");
});

// Node.textContent -> Returns / Sets the textual content of an element and all its descendants.
const calcResultDisplay = (result) =>{
    calcDisplay.textContent = result;
}
// alerting the user that they have reached the limit the calcDisplay can display
const limitCalcDisplay = (numlimit) =>{
    if (numlimit.length > 10){
        alert("Calculator display has reached its limits!")

    }
}

// getting single values to display on currentResult
numbers.forEach((btn) =>
    btn.addEventListener("click", () => (currResult.innerHTML = btn.value))
);

operators.forEach((btn) =>
    btn.addEventListener("click", () => (currResult.innerHTML = btn.value))
);

// WHEN TOTAL BUTTON IS CLICKED, CORRECT RESULT APPEARS 
// **NEEDS FIXING => ???????
total.addEventListener("click", () => {
    const totalArr = [];

    for (let i = 0; i < totalArr.length; i++) {
        totalArr[i].addEventListener("click", () => {
            if (calcResultDisplay(currResult) === "0") {
                currResult.innerHTML = "";
            } else {
                totalArr.push(currResult.innerHTML) = currResult.innerHTML + numbers[i].value;
            }
        });
    }
    // removes values if exceeds one. Only displays one line on currentResult display
    if (currResult.childNodes.length > 0) {
        currResult.removeChild(currResult.firstChild);
    }
    createElementWithText("p", currResult.value, currResult);
});
