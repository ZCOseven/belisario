function tarjetaProductos(dataProductos) {
    let { nombre, descripcion, precio, link_img } = dataProductos;
    let html = `
        <div class="tarjeta-producto">
            <div class="tarjeta-c-img">
                <img src="${link_img}" alt="img-producto">
            </div>
            <div class="tarjeta-c-info">
                <div>
                    <h3>${nombre}</h3>
                    <p>${descripcion}</p>
                </div>
                <div class="c-precio-btn">
                    <span>S/${precio}</span>
                    <button onclick="btnAdd()" class="btn-add">+</button>
                </div>
            </div>
        </div>
    `;

    return html;
}

export {tarjetaProductos};