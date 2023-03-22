"use strict";
function toNumber(a) {
    if (typeof a === "number") {
        return a;
    }
    else if (typeof a === "string") {
        return Number(a);
    }
    else {
        throw "O valor deve ser um numero ou uma string";
    }
}
console.log(toNumber(112));
