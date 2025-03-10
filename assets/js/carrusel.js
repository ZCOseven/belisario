let indiceImg = 0;
const carruselImagenes = document.querySelector(".c-carrusel-imagenes");
const totalImages = document.querySelectorAll(
  ".c-carrusel-imagenes img"
).length;

function monstrarBanner(indice) {
  const nroTraslado = -indice * 100;
  carruselImagenes.style.transform = `translateX(${nroTraslado}%)`;
}

function btnPrev() {
  indiceImg = (indiceImg - 1 + totalImages) % totalImages;
  monstrarBanner(indiceImg);
}

function btnNext() {
  indiceImg = (indiceImg + 1) % totalImages;
  monstrarBanner(indiceImg);
}


function goCarta(){
  window.location.href = "carta.html";
}
