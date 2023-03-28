"use strict";
class Produto {
    constructor(nome, valor) {
        this.nome = nome;
        this.valor = valor;
    }
    valorReal() {
        return "R$" + this.valor;
    }
}
const livro = new Produto("A Guerra dos Tronos", 34.99);
console.log(livro instanceof Produto);
