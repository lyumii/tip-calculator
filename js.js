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
const wantToSplit = document.getElementById("to-split");
const tipDivider = document.getElementById("tip-divider");
const splitCalculation = document.getElementById("split-calculation");    

let party;
let partySize = 2;
let splitResult;
let flatTipTrue = false;
let percentageTipTrue = false;       

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
})

clearBtn.addEventListener("dblclick", function() {
    billInput.value = "";
    flatTipInput.value = "";
    customTipInput.value = "";
    totalOutput.innerHTML = "";
    footer.innerHTML = "Have a nice day!"
    wantToSplit.checked = false
    tipDivider.innerHTML = "";
    splitCalculation.innerHTML = "";

})

wantToSplit.addEventListener("change", function() {
    if (wantToSplit.checked) {
        tipDivider.innerHTML = `Size of party: <input id="party-size-value" type="number" value="2">`;
    } else {
        tipDivider.innerHTML = "";
        splitCalculation.innerHTML = "";
    } 
    party = document.getElementById("party-size-value");
    partySize = party.value;

    divideTheTip();

    party.addEventListener("input", function() {
    partySize = party.value;
    divideTheTip();
    })
})



function thankYou() {
    footer.innerHTML = "Thank you for tipping! Your generosity is appreciated."
}

function divideTheTip() {
    let billAmount = parseFloat(billInput.value) || 0;
    let flatTipAmount = parseFloat(flatTipInput.value) || 0;
    let customTipPercent = parseFloat(customTipInput.value) || 0;
        if (partySize <= 0 || isNaN(partySize)) {
        splitCalculation.innerHTML = `Amount per person:`;
        return;
        }

        if (flatTipTrue) {
            splitResult = flatTipAmount / partySize
        } else if (percentageTipTrue) {
            splitResult =  ((billAmount*customTipPercent)/100) / partySize;
        }
        splitCalculation.innerHTML = `Amount per person: ${splitResult.toFixed(2)}`;      
}

// things I struggled with or took time to figure out:
// - logging out consistently to check if things work
// - giving my values readable names 
// - adding boolean values manually to event listeners and buttons