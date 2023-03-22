"use strict";
fetchCursos();
async function fetchCursos() {
    const response = await fetch("https://api.origamid.dev/json/cursos.json");
    const data = await response.json();
    mostrarCursos(data);
}
function mostrarCursos(data) {
    data.forEach((curso) => {
        console.log(curso);
    });
}
