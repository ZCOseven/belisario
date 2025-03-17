import { tarjetaProductos } from './components/tarjetaProductos.js';
import { ProductosData } from './data/productos.js';

// Función genérica para renderizar cualquier categoría
function renderProductos(categoria, sectionId) {
    const section = document.getElementById(sectionId);
    const productos = ProductosData[categoria];

    // validaciones
    if (!section) {
        console.error(`No se encontró el contenedor con ID: ${sectionId}`);
        return;
    }

    if (!productos || productos.length === 0) {
        section.innerHTML = `<p>No hay productos disponibles en ${categoria}.</p>`;
        return;
    }


    section.innerHTML = "";
    productos.forEach((producto, index) => {
        const tarjetaHTML = tarjetaProductos(producto, index); //pasamos el indice como identificador
        section.insertAdjacentHTML("beforeend", tarjetaHTML);
    });
}

// Renderizar todas las categorías al cargar la página
window.addEventListener("load", () => {
    renderProductos("promociones", "categoria-promociones");
    renderProductos("clasicos", "categoria-clasicos");
    renderProductos("acompañamientos", "categoria-acompañamiento");
    renderProductos("piqueos", "categoria-piqueos");
    renderProductos("bebidas", "categoria-bebidas");
});