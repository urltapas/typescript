async function fetchProduct() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const data = await response.json();

  showProduct(data);
}

interface Empresa {
  nome: string;
  fundacao: number;
  pais: string;
}

interface Product {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidentes: boolean;
  empresaFabricante: Empresa;
  empresaMontadora: Empresa;
}

function showProduct(data: Product) {
  console.log(data);
}

fetchProduct();

const teclado: Product = {
  nome: "teclado",
  preco: 160,
  descricao: "teclado 65% ABNT",
  garantia: "12/03/2024",
  seguroAcidentes: false,
  empresaFabricante: {
    nome: "Finegy",
    fundacao: 2014,
    pais: "Brazil",
  },

  empresaMontadora: {
    nome: "Closenus",
    fundacao: 2011,
    pais: "Brazil",
  }
}
