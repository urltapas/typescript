const input = document.querySelector("input");
input.addEventListener("keyup", totalMudou);

function totalMudou() {
  const value = Number(input.value);
  localStorage.setItem("total", value);
}

const total = localStorage.getItem("total");
input.value = total;
calcularGanho(input.value);

function calcularGanho(value) {
  const p = document.querySelector("p");
  p.innerHTML = `ganho total: ${value + 100 - value * 0.2}`;
}
