export function footerComponent() {
  const footer = document.createElement("footer");
  footer.classList.add("c-footer");
  footer.innerHTML = `
      <div class="c-footer-logo">
            <img src="./assets/img/general/logo-belisario.png" alt="logo belisario">
            <div class="siguenos">
                <h2>Siguenos en:</h2>
                <div class="redes">
                    <a href="#">
                        <img src="./assets/img/general/icon-facebook.png" alt="icon-footer">
                    </a>
                    <a href="#">
                        <img src="./assets/img/general/icon-instagram.png" alt="icon-footer">
                    </a>
                    <a href="#">
                        <img src="./assets/img/general/icon-twitter.png" alt="icon-footer">
                    </a>
                    <a href="#">
                        <img src="./assets/img/general/icon-youtube.png" alt="icon-footer">
                    </a>
                </div>
            </div>
        </div>
        <div class="c-footer-productos">
            <h2>Nuestros productos</h2>
            <a href="#">Promociones</a>
            <a href="#">Clasicos</a>
            <a href="#">Aconpañamiento</a>
            <a href="#">Piqueos</a>
            <a href="#">Bebidas</a>
        </div>
        <div class="c-footer-ubicanos">
            <h2>Ubícanos</h2>
            <a href="#">Alcanfores: <br>
                Av. Benavides con Alcanfores, Miraflores (frente al Casino Fiesta), Miraflores, Lima, Lima, 150122, PE
                Teléfono 611 - 3333</a>
        </div>
        <div class="c-footer-metodos">
            <div class="metodos">
                <h2>Métodos de pago</h2>
                <div class="icon-metodos">
                    <a href="#">
                        <img src="./assets/img/general/metodo-visa.png" alt="icono-metodo-footer">
                    </a>
                    <a href="#">
                        <img src="./assets/img/general/metodo-mastercard.png" alt="icono-metodo-footer">

                    </a>
                    <a href="#">
                        <img src="./assets/img/general/metodo-mir.png" alt="icono-metodo-footer">
                    </a>
                    <a href="#">
                        <img src="./assets/img/general/metodo-paypal.png" alt="icono-metodo-footer">

                    </a>
                </div>
            </div>
            <div class="reclamacion">
                <h2>Libro de reclamaciones</h2>
                <a href="#">
                    <img src="./assets/img/general/icon-book.png" alt="icono-reclamaciones-footer">
                </a>
            </div>
        </div>
      `;

  return footer;
}
