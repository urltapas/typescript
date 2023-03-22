type Categoria = "Maquiagem" | "Acessorio" | "TI";
type Produto = {
  nome: string;
  preco: number;
  estoque: boolean;
  categoria: Categoria;
};

const teclado: Produto = {
  nome: "Teclado Razor",
  preco: 240,
  estoque: true,
  categoria: "TI",
};


console.log(teclado);
