const billInput = document.getElementById("bill-input");
const flatTipInput = document.getElementById("flat-tip-amount");
const customTipInput = document.getElementById("custom-tip");
const tenBtn = document.getElementById("ten-button");
const fifteenBtn = document.getElementById("fifteen-button");
const twentyBtn = document.getElementById("twenty-button");
const totalOutput = document.getElementById("total-output");
const calcBtn = document.getElementById("calculate-button");
const clearBtn = document.getElementById("clear-button");
const flatTipType = document.getElementById("flat-tip-radio");
const percentageTipType = document.getElementById("percentage-tip-radio");
const footer = document.getElementById("footer");


let flatTipTrue = false;
let percentageTipTrue = false;
//add symbol restrictions to input fields
//add round up/down buttons 

function onlyNumbers(inputfield) {
    inputfield.onkeydown = function(event) {
        if (isNaN(event.key) && event.key !== "Backspace" && event.key !== ".") {
            event.preventDefault();
        }
    }
}

onlyNumbers(billInput);

window.addEventListener("load", function() {
    percentageTipTrue = true; 
})

flatTipType.addEventListener("click", function() {
    flatTipTrue = true;
    percentageTipTrue = false;
})
flatTipInput.addEventListener("click", function(){
    onlyNumbers(flatTipInput);
    customTipInput.value = "";
    flatTipType.checked = true;
    flatTipTrue = true;
    percentageTipTrue = false;
})

percentageTipType.addEventListener("click", function() {
    percentageTipTrue = true;
    flatTipTrue = false;
}) 
customTipInput.addEventListener("click", function() {
    onlyNumbers(customTipInput)
    flatTipInput.value = "";
    percentageTipType.checked = true;
    percentageTipTrue = true;
    flatTipTrue = false;
})

tenBtn.addEventListener("click", function() {
    customTipInput.value = 10;
    percentageTipType.checked = true;
    flatTipInput.value = "";
    percentageTipTrue = true;
    flatTipTrue = false;
})

fifteenBtn.addEventListener("click", function() {
    customTipInput.value = 15;
    percentageTipType.checked = true;
    flatTipInput.value = "";
    percentageTipTrue = true;
    flatTipTrue = false;
})

twentyBtn.addEventListener("click", function() {
    customTipInput.value = 20;
    percentageTipType.checked = true;
    flatTipInput.value = "";
    percentageTipTrue = true;
    flatTipTrue = false;
})

calcBtn.addEventListener("click", function() {
    let totalBillOutput;
    let totalSum;
    
    let billAmount = parseFloat(billInput.value) || 0;
    let flatTipAmount = parseFloat(flatTipInput.value) || 0;
    let customTipPercent = parseFloat(customTipInput.value) || 0;

    if (flatTipTrue) {
        totalSum = billAmount + flatTipAmount;
        totalBillOutput = `<span id="resultCss">${totalSum}</span>`;

    } else if (percentageTipTrue) {
        totalSum = billAmount + ((billAmount*customTipPercent)/100)
        totalBillOutput = `<div><span id="resultCss">${totalSum}</span></div>`;
    }
    
    totalOutput.innerHTML = totalBillOutput
    thankYou();
    // let spanCss = document.getElementById("resultCss");
    // spanCss.style.fontSize = "20px"
    // spanCss.style.fontWeight = "600"
    // spanCss.style.fontFamily = "Orbitron, sans serif"
    // spanCss.style.border = "dotted 2px yellow"
    // spanCss.style.textDecoration = "none"

})

clearBtn.addEventListener("dblclick", function() {
    billInput.value = "";
    flatTipInput.value = "";
    customTipInput.value = "";
    totalOutput.innerHTML = "";
    footer.innerHTML = "Have a nice day!";

})

function thankYou() {
    footer.innerHTML = "Thank you for tipping! Your generosity is appreciated."
}


// things I struggled with or took time to figure out:
// - logging out consistently to check if things work
// - giving my values readable names 
// - adding boolean values manually to event listeners and buttons