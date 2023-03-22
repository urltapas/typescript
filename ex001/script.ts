let produto: string = "Livro";
const valor: number = 200;

const carro: {
  marca: string;
  portas: number;
} = {
  marca:"Audi",
  portas: 4
}

const barato = valor < 200 ? true : "produto carro!";

function somar(a: number, b: number){
  // return a + b; => retorna um number
  return `${a + b}`; // retorna uma string
}
somar(4,2);

const videogame = {
  nome: "nintendo switch",
  valor: "2000"
}

function transformarValor( produto:{nome: string, valor: string} = videogame ){
  produto.valor = 'R$' + produto.valor;
  return produto;
}

console.log(transformarValor())