export function headerComponent() {
  const header = document.createElement("header");
  header.classList.add("c-header");
  header.innerHTML = `
    <!-- Elementos ocultos -->
        <div class="c-header-menu-movil">
            <img onclick="openMenu()" src="assets/img/general/hamburguer.svg" alt="menu hamburguesa">
        </div>

        <div class="menu-movil">
            <div class="c-logo-icon">
                <a href="index.html">
                    <img class="logo-belisario-movil" src="assets/img/general/logo-belisario.png" alt="logo-belisario">
                </a>
                <img class="icono-cerrar" onclick="closeMenu()" src="assets/img/general/close.svg" alt="">
            </div>

            <div class="enlaces-movil">
                <a href="carta.html">Carta</a>
                <a href="nosotros.html">Nosotros</a>
                <a href="locales.html">Locales</a>
                <a href="contactos.html">Contactos</a>
            </div>
            <a class="telefono-movil" href="">
                <img src="assets/img/general/phone.png" alt="telefono">
                <p>01 - 600 - 2025</p>
            </a>
        </div>

        <div class="c-header-logo">
            <a href="index.html">
                <img class="logo-belisario-movil" src="assets/img/general/logo-belisario.png" alt="logo-belisario">
            </a>
        </div>
        <div class="c-header-menu">
            <a href="carta.html">Carta</a>
            <a href="nosotros.html">Nosotros</a>
            <a href="locales.html">Locales</a>
            <a href="contactos.html">Contactos</a>
        </div>

        <div class="c-header-otros-enlaces">
            <a href="inicio-sesion.html">
                <div class="item-enlaces">
                    <img title="Iniciar Sesión" src="assets/img/general/usser.png" alt="icon-header">
                    <p>Iniciar Sesión</p>
                </div>
            </a>
            <a href="contactos.html">
                <div class="item-enlaces">
                    <img title="telefono" src="assets/img/general/phone.png" alt="icon-header">
                    <p>01 - 600 - 2025</p>
                </div>
            </a>
            <a href="#3">
                <div class="item-enlaces">
                    <img title="carrito de compras" src="assets/img/general/car.png" alt="icon-header">
                    <span>S/0.00</span>
                </div>
            </a>
        </div>    
    `;

  return header;
}
