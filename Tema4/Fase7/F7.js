// Estado del carrito
let carrito = [];

const btnAdd = document.getElementById("btnAdd");
const listaProductos = document.getElementById("listaProductos");
const totalContainer = document.getElementById("totalContainer");

// ================================
// Funciones principales
// ================================

// Añadir producto
const addProducto = () => {
    const nombre = document.getElementById('nombre').value.trim();
    const precio = parseFloat(document.getElementById('precio').value);

    if (!nombre || precio <= 0 || isNaN(precio)) {
        alert('❌ Introduce nombre y precio válido');
        return;
    }

    const nuevoProducto = {
        id: Date.now(),
        nombre,
        precio,
        cantidad: 1
    };

    carrito.push(nuevoProducto);
    document.getElementById('nombre').value = '';
    document.getElementById('precio').value = '';
    renderizarCarrito();
};

// Eliminar producto
const eliminarProducto = id => {
    carrito = carrito.filter(p => p.id !== id);
    renderizarCarrito();
};

// Cambiar cantidad
const cambiarCantidad = (id, cantidad) => {
    const prod = carrito.find(p => p.id === id);
    if (prod) {
        prod.cantidad = Math.max(1, Math.min(99, parseInt(cantidad) || 1));
    }
    renderizarCarrito();
};

// Vaciar carrito
const vaciarCarrito = () => {
    if (confirm('¿Vaciar todo el carrito?')) {
        carrito = [];
        renderizarCarrito();
    }
};

// Calcular totales
const calcularTotales = () => {
    const totalProductos = carrito.reduce((total, p) => total + p.cantidad, 0);
    const totalPrecio = carrito.reduce((total, p) => total + p.precio * p.cantidad, 0);
    return { totalProductos, totalPrecio };
};

// Renderizar carrito
const renderizarCarrito = () => {
    if (carrito.length === 0) {
        listaProductos.innerHTML = '<p style="text-align:center;color:#6c757d;">🛒 Carrito vacío. ¡Añade productos!</p>';
        totalContainer.innerHTML = '';
        return;
    }

    listaProductos.innerHTML = '';
    carrito.forEach(producto => {
        const div = document.createElement('div');
        div.className = 'producto';

        div.innerHTML = `
                    <strong>${producto.nombre}</strong>
                    <span style="float:right;">
                        ${producto.precio.toFixed(2)}€ x 
                        <input type="number" value="${producto.cantidad}" min="1" max="99" style="width:50px;text-align:center;">
                        = ${(producto.precio * producto.cantidad).toFixed(2)}€
                    </span>
                    <br><br>
                    <button class="eliminar">Eliminar</button>
                `;

        // Evento cambiar cantidad
        const inputCantidad = div.querySelector('input');
        inputCantidad.addEventListener('change', e => cambiarCantidad(producto.id, e.target.value));

        // Evento eliminar
        const btnEliminar = div.querySelector('.eliminar');
        btnEliminar.addEventListener('click', () => eliminarProducto(producto.id));

        listaProductos.appendChild(div); //Se añade el div creado en código a la vista
    });

    const totales = calcularTotales();
    totalContainer.innerHTML = `
                <p>Productos: ${totales.totalProductos}</p>
                <p class="total">💰 Total: ${totales.totalPrecio.toFixed(2)}€</p>
                <button id="btnVaciar" style="background:#ffc107;color:#212529;">Vaciar Carrito</button>
            `;

    document.getElementById('btnVaciar').addEventListener('click', vaciarCarrito);
};

btnAdd.addEventListener('click', addProducto);
