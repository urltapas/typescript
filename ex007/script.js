"use strict";
async function fetchProduct() {
    const response = await fetch("https://api.origamid.dev/json/notebook.json");
    const data = await response.json();
    showProduct(data);
}
function showProduct(data) {
    console.log(data);
}
fetchProduct();
