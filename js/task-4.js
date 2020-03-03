"use strict";

let credits = 23580;
const pricePerDroid = 3000;

let message;

let DroidQuantityToBuy = prompt("Please enter the quantity of droids you want to buy");

console.log(DroidQuantityToBuy);

let totalPrice = (pricePerDroid*DroidQuantityToBuy);
 
if(DroidQuantityToBuy===null){
    message="cancelled by user";
}
else{
    if(totalPrice>credits)
    {
        message= "Not enought money on your account";
    }else{
        let balanse =(credits-totalPrice);
        message=`You have bought ${DroidQuantityToBuy} droids and you have ${balanse} credits on your balance`;
    }
}

console.log (message);
