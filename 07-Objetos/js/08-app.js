/*************************** 
CONGELAR UN OBJETO PARA NO PODER MODIFICARLO
***************************/

/* 
"use strict" -> Permite ser estricto con el uso de las variables y con todo dentro del codigo javascript
*/

const producto = {
  // llave: valor
  nombre: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true,
};

/* 
  Object.freeze -> No permite modificar nada dentro del objeto que se le asigne
*/

Object.freeze(producto);
producto.disponible = false;
producto.imagen = "imagen.jpg";
delete producto.precio;

console.log(producto); // objeto producto
console.log(Object.isFrozen(producto)); // true
