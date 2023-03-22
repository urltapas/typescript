"use strict";
let produto = "Livro";
const valor = 200;
const carro = {
    marca: "Audi",
    portas: 4
};
const barato = valor < 200 ? true : "produto carro!";
function somar(a, b) {
    // return a + b; => retorna um number
    return `${a + b}`; // retorna uma string
}
somar(4, 2);
const videogame = {
    nome: "nintendo switch",
    valor: "2000"
};
function transformarValor(produto = videogame) {
    produto.valor = 'R$' + produto.valor;
    return produto;
}
console.log(transformarValor());
