/*************************** 
FOREACH PARA ITERAR UN ARREGLO
***************************/

const carrito = [
  { nombre: "Monitor de 20 pulgadas", precio: 500 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Mouse", precio: 20 },
  { nombre: "Televisor", precio: 300 },
];

/* 
  for loop
*/
for (let i = 0; i < carrito.length; i++) {
  const element = `${carrito[i].nombre} - Precio: ${carrito[i].precio}`;
  console.log(element);
  /* Monitor de 20 pulgadas - Precio: 500
  Teclado - Precio: 50
  Mouse - Precio: 20
  Televisor - Precio: 300 */
}

/* 
  forEach -> Metodo()

  Syntaxis -> forEach(function (nombre que deseamos) {
  console.log(`${nombre.nombre de la llave del objeto} - Precio: ${producto.nombre de la llave del objeto}`);
});
*/
carrito.forEach(function (producto) {
  console.log(`${producto.nombre} - Precio: ${producto.precio}`);
  /* Monitor de 20 pulgadas - Precio: 500
  Teclado - Precio: 50
  Mouse - Precio: 20
  Televisor - Precio: 300 */
});
