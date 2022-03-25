// GOING TO REMOVE CONSOLE.LOGS AFTER

const toggleBtn = document.querySelector("#toggleBtn");
console.log(toggleBtn);
const calculator = document.querySelector(".calculator");
console.log(calculator);
const operators = document.querySelectorAll(".calculator__operators");
console.log(operators);
const numbers = document.querySelectorAll(".calculator__numbers");
const total = document.querySelector("#total");
toggleBtn.addEventListener("click", () => {
    calculator.classList.toggle("calculator--light-mode");

    for (let i = 0; i < operators.length; i++) {
        operators[i].classList.toggle("calculator__operators--light-mode");
    }

    for (let i = 0; i < numbers.length; i++) {
        numbers[i].classList.toggle("calculator__numbers--light-mode");
    }
});
