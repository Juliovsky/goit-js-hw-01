"use strict";

let country = prompt("Please, enter the country we need to deliver");
let cost;
let message;


switch (country.toLowerCase()){
    case 'China'.toLowerCase():
        cost=100;
        message=`Delivery in ${country} will be costed ${cost} credites`;
        break;

    case 'Chilly'.toLowerCase():
        cost=250;
        message= `Delivery in ${country} will be costed ${cost} credites`;
        break;

    case 'Australia'.toLowerCase():
        cost=170;
        message= `Delivery in ${country} will be costed ${cost} credites`;
        break;

    case 'India'.toLowerCase():
        cost=80;
        message= `Delivery in ${country} will be costed ${cost} credites`;
        break;

    case 'Jamaika'.toLowerCase():
        cost=120;
        message= `Delivery in ${country} will be costed ${cost} credites`;
        break;
    
    default:
        message= "Delivery in your country is not available";
}

alert(message);