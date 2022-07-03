/*************************** 
ARROW FUNCTIONS EN UN FOREACH Y UN MAP

MAP -> CREA UN NUEVO ARRAY QUE SE PUEDE GUARDAR EN UNA VARIABLE
FOREACH -> NO CREA UN NUEVO ARRAY
***************************/

const carrito = [
  { nombre: "Monitor de 20 pulgadas", precio: 500 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Mouse", precio: 20 },
  { nombre: "Televisor", precio: 300 },
];

/* 
  map -> Metodo()
*/

const nuevoArray = carrito.map(
  (producto) => `${producto.nombre} - Precio: ${producto.precio}`
);

console.log(nuevoArray); // ['Monitor de 20 pulgadas - Precio: 500', 'Teclado - Precio: 50', 'Mouse - Precio: 20', 'Televisor - Precio: 300']

/* 
  forEach -> Metodo()
*/

carrito.forEach(
  (producto) => `${producto.nombre} - Precio: ${producto.precio}`
);
