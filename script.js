console.log('Hello World');
"use strict";

const rangeInput = document.getElementById("rangeInput");
const numberResult = document.querySelector(".number-result");
const number = document.querySelector(".number");
const body = document.body;
const numberArray = document.querySelectorAll('.number');
const deleteBtn = document.querySelector('.del');
const resetBtn = document.querySelector('.reset-btn');
const equalBtn = document.querySelector('.equal');
let resultOfNumber = "";

rangeInput.addEventListener("input", (event) => {
    if (event.target.value === "1") {
        body.classList.remove("theme-3");
        body.classList.remove("theme-2");    
    }
    if (event.target.value === "2") {
        body.classList.remove("theme-3");
        body.classList.add("theme-2");
    } 
    if (event.target.value === "3") {
        body.classList.remove("theme-2");    
        body.classList.add("theme-3");
    }
});

numberArray.forEach(element => {
    element.addEventListener('click', ()=> {
        // console.log(resultOfNumber);
        if (resultOfNumber.length <=13) {
            const buttonText = element.textContent;
            resultOfNumber += buttonText;
            numberResult.textContent = resultOfNumber;
        }
    })
});
  
equalBtn.addEventListener('click', () => {
    const resultNum = eval(resultOfNumber);
    resultOfNumber = resultNum.toString();
    numberResult.textContent = resultNum;
});
  
deleteBtn.addEventListener("click", () => {
    resultOfNumber = resultOfNumber.slice(0, -1);
    numberResult.textContent = resultOfNumber;
    if (resultOfNumber === "") {
        numberResult.textContent = 0;
    }
});

resetBtn.addEventListener('click', ()=> {
    resultOfNumber = "";
    numberResult.textContent = 0;
})



