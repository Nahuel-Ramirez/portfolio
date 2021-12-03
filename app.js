// Carga de pagina

window.onload = function () {
  let container = document.getElementById("load-container");

  container.style.visibility = "hidden";
  container.style.opacity = "0";
};

// Animaciones

const imagenCv = document.getElementById("imagencv");
const titulo = document.getElementById("titulo");
const tituloDescripcion = document.getElementById("titulo-descripcion");
const sobreMi = document.getElementById("sobre-mi");
const portfolio = document.getElementById("portfolio");

const animarContenido = (entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visible");
    } else {
      entrada.target.classList.remove("visible");
    }
  });
};

const observador = new IntersectionObserver(animarContenido, {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.3,
});

observador.observe(imagenCv);
observador.observe(titulo);
observador.observe(tituloDescripcion);
observador.observe(sobreMi);
observador.observe(portfolio);
