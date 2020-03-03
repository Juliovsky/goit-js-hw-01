"use strict";

let total = Number("0");
let input;
let message;


while (true){ 
    console.log(total);
    let input = prompt("Please put the number");
    if (input === null){
        break;
    }

    if(!Number.isNaN(Number(input))){
        total = total+ Number(input);
        message=`general sum is ${total}.`;
    }
    //    alert ("Is not a number.Please try again");}
    else {
        alert ("Is not a number.Please try again");
    }

   
}
alert(message);
