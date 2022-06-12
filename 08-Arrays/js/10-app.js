/*************************** 
MAP PARA ITERAR UN ARRAY, Y SUS DIFERENCIAS CON FOREACH

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

  Syntaxis -> map(function (nombre que deseamos) {
  console.log(`${nombre.nombre de la llave del objeto} - Precio: ${producto.nombre de la llave del objeto}`);
});
*/

const nuevoArray = carrito.map(function (producto) {
  return `${producto.nombre} - Precio: ${producto.precio}`;
});

console.log(nuevoArray); // ['Monitor de 20 pulgadas - Precio: 500', 'Teclado - Precio: 50', 'Mouse - Precio: 20', 'Televisor - Precio: 300']

/* 
  forEach -> Metodo()
*/
const nuevoArray2 = carrito.forEach(function (producto) {
  return `${producto.nombre} - Precio: ${producto.precio}`;
});

console.log(nuevoArray2); // undefined
