const capaTransparente = document.getElementById("overlay");
const contCarrito = document.getElementById("carrito");

function abrirCarrito() {
  console.log("carrito presionado");

  capaTransparente.style.display = "block";
  contCarrito.style.display = "visible";

  setTimeout(() => {
    capaTransparente.classList.add("overlay--aparecer");
    contCarrito.classList.add("c-carrito--deslizamientoIn");
  }, 10);
}

function cerrarCarrito() {
  capaTransparente.classList.remove("overlay--aparecer");
  contCarrito.classList.remove("c-carrito--deslizamientoIn");

  setTimeout(() => {
    capaTransparente.style.display = "none";
    contCarrito.style.display = "hidden";
  }, 450);
}

function closeCar() {
  cerrarCarrito();
}

capaTransparente.addEventListener("click", cerrarCarrito);
