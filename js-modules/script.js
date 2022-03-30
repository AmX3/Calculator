// IMPORT JS FILES INCL. OPERATIONS CALCULATIONS
import { addition } from "./operators.js";
import { subtraction } from "./operators.js";
import { multiplication } from "./operators.js";
import { division } from "./operators.js";
import { remainder } from "./operators.js";
import { convertToPercentage } from "./operators.js";

// TOGGLE + CALCULATOR DISPLAY
const toggleBtn = document.querySelector("#toggleBtn");
const calculator = document.querySelector(".calculator");
const operators = document.querySelectorAll(".calculator__operators");
const numbers = document.querySelectorAll(".calculator__numbers");
const prevResult = document.querySelector("#previousOperand");
const currResult = document.querySelector("#currentOperand");

// OPERATORS AND SPECIAL OP
const total = document.querySelector("#total");
const float = document.querySelector("#decimal");
const clear = document.querySelector("#clear");
const deleteNum = document.querySelector("#delete");
const percentBtn = document.querySelector("#percentage");
console.log(percentBtn);

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
    // changing currentResult and prevResult text color
    prevResult.classList.toggle("calculator__previous-result--light-mode");
    currResult.classList.toggle("calculator__current-result--light-mode");
    deleteNum.classList.toggle("fa-delete-left--light-mode");
});

// // Node.textContent -> Returns / Sets the textual content of an element and all its descendants.

// Alerting the user that they have reached the limit (> 10) the calcDisplay can display
// Also removing repeated error messages
const limitCalcDisplay = (numlimit) => {
    if (numlimit.length > 10) {
        alert(`Number limit has been reached`);
    }
};

// If currentResult.length is greater than 10, error warning should appear else numbers concatenate
const currentResult = (num) => {
    let currentResult = currResult.textContent;
    if (currentResult.length > 10) {
        limitCalcDisplay(currentResult);
    } else {
        currResult.textContent += num;
    }
};

// getting single numbers (btn value from HTML) to display on currentResult
numbers.forEach((btn) =>
    btn.addEventListener("click", () => currentResult(btn.value))
);

//  previous result will show current value and clicked operation. current result will display as an empty string
const clickedOp = (clickedOperation) => {
    prevResult.textContent = currResult.textContent + clickedOperation;
    currResult.textContent = "";
};

// getting single operators (btn value from HTML) to display on currentResult
operators.forEach((btn) =>
    btn.addEventListener("click", () => clickedOp(btn.value))
);

const calculations = () => {
    const prevOp = prevResult.textContent;
    // only retrieving previous number and exluding operator
    const prevNum = prevOp.slice(0, -1);
    // selecting currentNumber
    const currNum = currResult.textContent;
    // retrieving the selected operator in display
    const operations = prevOp.charAt(prevOp.length - 1);

    // Storing nums as prevnum or currnum which will be used in our calculations
    const number1 = +prevNum;
    const number2 = +currNum;

    // Setting total = 0;
    let total;

    switch (operations) {
        case "*":
            total = multiplication(number1, number2);
            break;
        case "÷":
            total = division(number1, number2);
            break;
        case "-":
            total = subtraction(number1, number2);
            break;
        case "+":
            total = addition(number1, number2);
            break;
        case "%":
            total = convertToPercentage(number1);
            break;
        case "/":
            total = remainder(number1, number2);
            break;
        default:
            console.log(`Invalid Operation`);
            break;
    }

    // if number value is greater than 10, error warning displays => convert to string to get .length value
    const convertResultToStr = total.toString();
    if (convertResultToStr.length > 12) {
        limitCalcDisplay(convertResultToStr);
    } else {
        currResult.textContent = convertResultToStr;
    }
};
total.addEventListener("click", calculations);

// SPECIAL OPERATORS FUNCTIONS AND EVENT LISTENERS

// alerting user that only one decimal point can be used => no reoccuring decimal points
// Need Fix
const decimal = (num) => {
    if (currResult.textContent.includes(".")) {
        return alert("Number already contains a decimal point");
    } else {
        currResult.textContent += num;
    }
};
float.addEventListener("click", decimal);

// Deleting a number -> if currentResult is truthy, return currentResult content that shows one less value else return error message if there is nothing to delete.
const deleteANum = () => {
    let currentResult = currResult.textContent;
    if (currentResult) {
        return (currResult.textContent = currentResult.slice(0, -1));
    } else {
        alert(`Error! Enter a number.`);
    }
};
deleteNum.addEventListener("click", deleteANum);

// clear button - removes current result, previous result and warning msg
const clearAll = () => {
    currResult.textContent = "";
    prevResult.textContent = "";
};
clear.addEventListener("click", clearAll);
