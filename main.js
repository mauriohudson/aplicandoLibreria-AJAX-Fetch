let stockProductos = [
  {
    id: 1,
    nombre: "Cafe",
    cantidad: 1,
    precio: 110,
    imagen: "img/cafeleche.png",
  },
  {
    id: 2,
    nombre: "Capuccino",
    cantidad: 1,
    precio: 150,
    imagen: "img/capuccinoItaliano.png",
  },
  {
    id: 3,
    nombre: "Te",
    cantidad: 1,
    precio: 110,
    imagen: "img/teComun.png",
  },
  {
    id: 4,
    nombre: "Malteada",
    cantidad: 1,
    precio: 150,
    imagen: "img/img2.png",
  },
  {
    id: 5,
    nombre: "Muffin",
    cantidad: 1,
    precio: 70,
    imagen: "img/muffindulcedeleche.png",
  },
  {
    id: 6,
    nombre: "Medialunas",
    cantidad: 1,
    precio: 50,
    imagen: "img/medialunamanteca.png",
  },
];

const contenedorProductos = document.getElementById("contenedor-productos");

const botonVaciar = document.getElementById("vaciar-carrito")
const contadorCarrito = document.getElementById('contadorCarrito')

const precioTotal = document.getElementById('precioTotal')

document.addEventListener('DOMContentLoaded', ()=> {
  if(localStorage.getItem('carrito')){
    carrito = JSON.parse(localStorage.getItem('carrito'))
    actualizarCarrito()
  }
})

botonVaciar.addEventListener('click', ()=> {
  carrito.length = 0 
  actualizarCarrito()
})

stockProductos.forEach((producto) => {
  const div = document.createElement("div");
  div.className = "producto";
  div.innerHTML = `
    <img src=${producto.imagen} alt="">
    <h3> ${producto.nombre}</h3>
    <p class="precioProducto"> Precio: $ ${producto.precio}</p>
    <button onClick="agregarAlCarrito(${producto.id})" class="boton-agregar">Agregar</button>
    `;

  contenedorProductos.appendChild(div);
});

let carrito = [];

const agregarAlCarrito = (prodId) => {
  const existe = carrito.some (prod => prod.id === prodId)

  if (existe){
    const prod = carrito.map (prod => {
      if (prod.id === prodId){
        prod.cantidad++
      }
    })
  }else {
    
  

  const item = stockProductos.find((prod) => prod.id === prodId);
  carrito.push(item);
}
  actualizarCarrito();
};

const eliminarDelCarrito = (prodId) => {
  const item = carrito.find((prod)=> prod.id === prodId)
  const indice = carrito.indexOf(item)
  carrito.splice(indice, 1)
  actualizarCarrito()
}


const contenedorCarrito = document.getElementById("carrito-contenedor");
const actualizarCarrito = () => {
  contenedorCarrito.innerHTML = ""

  carrito.forEach((prod) => {
    const div = document.createElement("div");
    div.className = "productoEnCarrito";
    div.innerHTML = `
        <p>${prod.nombre}</p>
        <P>Precio: ${prod.precio}</P>
        <p>Cantidad: <span id=""cantidad>${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="ri-delete-bin-5-line"></i></button>
        `;

    contenedorCarrito.appendChild(div);

    localStorage.setItem('carrito', JSON.stringify(carrito))
  });
  contadorCarrito.innerText = carrito.length
  precioTotal.innerText = carrito.reduce((acc, prod)=> acc + prod.precio, 0)

};
