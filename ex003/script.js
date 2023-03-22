"use strict";
let total = 200;
// total = "2000";
function isNumber(value) {
    if (typeof value === "string")
        return "é uma string";
    if (typeof value === "number")
        return "é um numero";
}
console.log(isNumber(total));
