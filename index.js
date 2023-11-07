let operator;
let previousNum;
let currentNum;

document.addEventListener("DOMContentLoaded", () => {
    //storing all components when document is loaded
    let display = document.querySelector(".display");
    let clear = document.querySelector(".clear");
    let decimal = document.querySelector(".decimal");
    let equal = document.querySelector(".equals");

    let numbers = document.querySelectorAll("number");
    let operators = document.querySelectorAll("operator");

    let previousDisplay = document.querySelector("previous");
    let currentDisplay = document.querySelector("current");

    numbers.forEach((number) => {
        number.addEventListener("click", (event) => {
            handleClick(event.target.textContent);
            //handleClick(e.target.textContent);
        });
    });

});

function handleClick(button) {
    alert(button);
}