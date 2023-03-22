let total: string | number = 200;
// total = "2000";

function isNumber(value: string | number) {
  if (typeof value === "string") return "é uma string";
  if (typeof value === "number") return "é um numero";
}

console.log(isNumber(total));