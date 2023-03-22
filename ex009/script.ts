interface Curso {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  tags: string[];
  idAulas: number[];
  nivel: "iniciante" | "avancado";
}

fetchCursos();
async function fetchCursos() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const data = await response.json();

  mostrarCursos(data);
}

function mostrarCursos(data: Curso[]) {
  data.forEach((curso) => {
    console.log(curso);
  });
}
