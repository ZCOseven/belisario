let productosCarrito = [];

function calcularPrecioTotal() {
  const precioTotal = productosCarrito.reduce((total, producto) => {
    return total + producto.precio * producto.cantidad;
  }, 0);

  const spanPrecio = document.querySelectorAll(".precio-dinamico");

  spanPrecio.forEach((span) => {
    span.textContent = `S/${precioTotal.toFixed(2)}`;
  });
}

function agregarProducto(boton) {
  const id = boton.getAttribute("data-id");
  const nombre = boton.getAttribute("data-nombre");
  const descripcion = boton.getAttribute("data-descripcion");
  const precio = parseFloat(boton.getAttribute("data-precio"));
  const link_img = boton.getAttribute("data-link_img");

  const producto = {
    id,
    nombre,
    descripcion,
    precio,
    link_img,
    cantidad: 1,
  };

  const productoEnCarrito = productosCarrito.find(
    (item) => item.id === producto.id
  );

  if (productoEnCarrito) {
    productoEnCarrito.cantidad += 1;
  } else {
    productosCarrito.push(producto);
  }

  calcularPrecioTotal();
  renderizarProductosCarrito();
}

function renderizarProductosCarrito() {
  const carritoCuerpo = document.querySelector(".carrito-cuerpo");
  carritoCuerpo.innerHTML = "";

  productosCarrito.forEach((producto) => {
    const productoHTML = `
      <article class="carrito-tarjet-producto" data-id="${producto.id}">
          <div class="carrito-detalle-producto">
              <img src="${producto.link_img}" alt="car-product-img">
              <div class="carrito-info">
                  <h3>${producto.nombre}</h3>
                  <p>${producto.descripcion}</p>
                  <span>S/${producto.precio.toFixed(2)}</span>
              </div>
          </div>
          <div class="carrito-detalle-cantidad">
              <button class="btn-eliminar">
                  <i class="fa-solid fa-trash"></i>
              </button>
              
              <button class="btn-reducir">
                  -
              </button>
              
              <span class="cantidad">${producto.cantidad}</span>

              <button class="btn-aumentar">
                  +
              </button>
          </div>
      </article>
    `;

    carritoCuerpo.insertAdjacentHTML("beforeend", productoHTML);
  });

  agregarEventListenersCarrito();
}

function agregarEventListenersCarrito() {
  document.querySelectorAll(".carrito-tarjet-producto").forEach((productoContainer) => {
      const btnEliminar = productoContainer.querySelector(".btn-eliminar");
      const btnReducir = productoContainer.querySelector(".btn-reducir");
      const btnAumentar = productoContainer.querySelector(".btn-aumentar");
      const spanCantidad = productoContainer.querySelector(".cantidad");

      const productId = productoContainer.getAttribute("data-id");
      const producto = productosCarrito.find((item) => item.id == productId);

      
      function actualizarVisibilidadEliminar() {
        if (producto.cantidad === 1) {
          btnEliminar.style.display = "inline-block"; 
          btnReducir.style.display = "none"; 
        } else {
          btnEliminar.style.display = "none"; 
          btnReducir.style.display = "inline-block"; 
        }
      }
      
      actualizarVisibilidadEliminar();
      
      btnAumentar.addEventListener("click", () => {
        producto.cantidad += 1;
        spanCantidad.textContent = producto.cantidad;
        actualizarVisibilidadEliminar(); 
        calcularPrecioTotal();
      });

      btnReducir.addEventListener("click", () => {
        if (producto.cantidad > 1) {
          producto.cantidad -= 1;
          spanCantidad.textContent = producto.cantidad;
          actualizarVisibilidadEliminar(); 
          calcularPrecioTotal();
        }
      });
      
      btnEliminar.addEventListener("click", () => {
        eliminarProducto(productId);
      });
    });
}

function eliminarProducto(productId) {
  const productoContainer = document.querySelector(
    `.carrito-tarjet-producto[data-id="${productId}"]`
  );

  if (productoContainer) {
    productoContainer.classList.add("animacion-desaparecer");

    productoContainer.addEventListener("animationend", () => {
        productoContainer.remove();
        productosCarrito = productosCarrito.filter(
          (producto) => producto.id != productId
        );
        calcularPrecioTotal(); 
      }, { once: true });
  }
}

window.addEventListener("load", () => {
  renderizarProductosCarrito();
});
