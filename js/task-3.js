"use strict";
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

let password = prompt("Enter the password");


if (password === null) {
    message = "canceled by user";
} else if (password === ADMIN_PASSWORD) {
    message = "welcome";

} else {
    message = "Wrong password. Acces is forbidden";

}

// alert(message);
console.log(message);