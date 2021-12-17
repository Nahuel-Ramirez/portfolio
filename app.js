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

const icono = document.querySelector("#btn-menu");
const menuEnlaces = document.querySelector("#menuResponsive");
const homeResponsive = document.getElementById("home-enlace");
const sobreMiResponsive = document.getElementById("sobreMi-enlace");
const portfolioResponsive = document.getElementById("portfolio-enlace");
const contactoResponsive = document.getElementById("contacto-enlace");

icono.addEventListener("click", () => {
  menuEnlaces.classList.toggle("show");
});

homeResponsive.addEventListener("click", () => {
  if (homeResponsive.addEventListener == "click") {
    menuEnlaces.classList.add("show");
  } else {
    menuEnlaces.classList.remove("show");
  }
});

sobreMiResponsive.addEventListener("click", () => {
  if (sobreMiResponsive.addEventListener == "click") {
    menuEnlaces.classList.add("show");
  } else {
    menuEnlaces.classList.remove("show");
  }
});

portfolioResponsive.addEventListener("click", () => {
  if (portfolioResponsive.addEventListener == "click") {
    menuEnlaces.classList.add("show");
  } else {
    menuEnlaces.classList.remove("show");
  }
});

contactoResponsive.addEventListener("click", () => {
  if (contactoResponsive.addEventListener == "click") {
    menuEnlaces.classList.add("show");
  } else {
    menuEnlaces.classList.remove("show");
  }
});
