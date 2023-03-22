"use strict";
const total = localStorage.getItem("total");
const input = document.querySelector("input");
if (input && total) {
    input.value = total;
    calcularGanho(Number(input.value));
}
function calcularGanho(value) {
    const p = document.querySelector("p");
    if (p)
        p.innerHTML = `ganho total: ${value + 100 - value * 0.2}`;
}
function totalMudou() {
    if (input) {
        const value = Number(input.value);
        localStorage.setItem("total", input.value);
        calcularGanho(Number(value));
    }
}
if (input)
    input.addEventListener("keyup", totalMudou);
