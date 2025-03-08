import { headerComponent } from "./components/header.js";

function renderHeader() {
  let $body = document.querySelector("body");
  $body.insertAdjacentElement('afterbegin', headerComponent());
}

// Funciones para abrir y cerrar el menú
function openMenu() {
    const menu = document.querySelector(".menu-movil");
    if (menu) {
      menu.style.transform = "translateX(0)";
      menu.style.boxShadow = "4px 0px 4px rgba(0, 0, 0, 0.25)";
    }
  }
  
  function closeMenu() {
    const menu = document.querySelector(".menu-movil");
    if (menu) {
      menu.style.transform = "translateX(-100%)";
      setTimeout(() => {
        menu.style.boxShadow = "none";
      }, 400);
    }
  }

// Asigna las funciones al objeto window para que estén disponibles globalmente
window.openMenu = openMenu;
window.closeMenu = closeMenu;

window.addEventListener('DOMContentLoaded', () => {
    renderHeader();   
});