document.getElementById("cashout-btn").addEventListener("click", function() {
    // 1 - Get the agent numbr & validae 
    const cashoutNumber = getValueFromInput("cashout-number"); 
    // console.log(cashoutNumber); 
    if (cashoutNumber.length != 11) {
        alert("invaid number"); 
        return; 
    }

    // 2 - get the amount 
    const cashoutAmount = getValueFromInput("cashout-amount"); 

    // 3 - get the current balance 
    const balanceElement = document.getElementById("balance"); 
    const balance = balanceElement.innerText; 
    console.log(balance); 

    // 4 - Calculate balance 
    const newBalance = Number(balance) - Number(cashoutAmount); 
    console.log(newBalance); 

    if (newBalance < 0) {
        alert("Invalid Amount"); 
        return; 
    }
    const pin = getValueFromInput("cashout-pin"); 
    if (pin === "1234") {
        alert("Cashout Successfull"); 
        balanceElement.innerText = newBalance; 
    } else {
        alert("Invalid Pin"); 
        return; 
    }
}); 


// document.getElementById("cashout-btn").addEventListener("click", function() {
//     // 1 - get the agent number & validate 
//     const cashoutNumberInput = document.getElementById("cashout-number"); 
//     const cashoutNumber = cashoutNumberInput.value; 
//     console.log(cashoutNumber);

//     if (cashoutNumber.length != 11){
//         alert("Invalid Agent Number"); 
//         return; 
//     }

//     // 2 - get the amount, validate, convert to number 
//     const cashoutAmountInput = document.getElementById("cashout-amount");
//     const cashoutAmount = cashoutAmountInput.value; 
//     console.log(cashoutAmount)

//     // 3 - get the current balance, validate, convert to number 
//     const balanceElement = document.getElementById("balance"); 
//     const balance = balanceElement.innerText; 
//     console.log(balance); 

//     // 4 - Calculate new balance 
//     const newBalance = Number(balance) - Number(cashoutAmount);  

//     if (newBalance < 0) {
//         alert("Invalid Amount"); 
//         return;
//     }

//     // 5 - Get the pin and verify 
//     const cashoutPinInput = document.getElementById("cashout-pin"); 
//     const pin = cashoutPinInput.value; 
//     if (pin === "1234") {
//         // 5.1 - true:: show an alert > set Balance
//         alert("cashout successful"); 
//         console.log("New balance", newBalance);
//         balanceElement.innerText = newBalance; 
//     } else {
//         // 5.2 - true:: show anerror alert > return
//         alert("Invalid pin"); 
//         return; 
//     }
     
     
// })