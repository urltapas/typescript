"use strict";
const numbers = [10, 20, 40, 60, 50, 90];
const valores = [10, 40, "Taxas", 80, "Produto", 70, 50];
const dados = [
    ["senhor dos aneis", 80],
    ["a guerra dos tronos", 90],
];
function maiorQue20(data) { }
function maiorQue10(data) {
    return data.filter((n) => n > 30);
}
function filterValores(data) {
    return data.filter((item) => typeof item === "number");
}
function filterLivros(data) { }
// console.log(maiorQue10(numbers));
// console.log(filterValores(valores));
console.log(filterLivros(dados));
