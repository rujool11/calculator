let operator="";
let previousValue="";
let currentValue="";

document.addEventListener("DOMContentLoaded", () => {
    //storing all components when document is loaded
    let clear = document.querySelector(".clear");
    let decimal = document.querySelector(".decimal");
    let equal = document.querySelector(".equals");

    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");

    let previousDisplay = document.querySelector(".previous");
    let currentDisplay = document.querySelector(".current");

    numbers.forEach((number) => {
        number.addEventListener("click", (event) => {
            handleNumber(event.target.textContent);
            currentDisplay.textContent = currentValue;
        });
    });

    operators.forEach((op) => {
        op.addEventListener("click", (event) => {
            handleOperator(event.target.textContent);
            previousDisplay.textContent = previousValue + " " + operator;
            currentDisplay.textContent = currentValue;
        });
    });

    clear.addEventListener("click", () => {
        operator = "";
        previousValue = "";
        currentValue = "";
        previousDisplay.textContent = previousValue;
        currentDisplay.textContent = currentValue;
    });

    decimal.addEventListener("click", () => {
        currentValue += "."
        currentDisplay.textContent = currentValue;
    });

    equal.addEventListener("click", () => {
        let ans = calculate();

        if (ans.toString().length>=10){
            ans = ans.toFixed(3);
        }

        previousDisplay.textContent = previousValue + " " + operator + " " + currentValue;
        currentDisplay.textContent = ans.toString();
        currentValue = currentDisplay.textContent;
        operator = "";
        previousValue = "";

    });

});

function handleNumber(button) {
    if (currentValue.length>=5){return;}
    currentValue += button; 
}

function handleOperator(button) {
    operator = button;
    previousValue = currentValue;
    currentValue = ""
}

function calculate() {
    let num1 = Number(previousValue);
    let num2 = Number(currentValue);
    let ans;
    
    switch (operator) {
        case "/":
            ans = num1/num2; 
            break;
        case "x":
            ans = num1*num2;
            break;
        case "+":
            ans = num1+num2;
            break;
        case "-":
            ans = num1-num2;
            break;
        default:
            alert("please enter valid value and operator"); 
            break;
    }
    return ans;
}