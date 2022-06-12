/*************************** 
STRINGS METHODS - INCLUDES Y LENGTH
***************************/

const producto = "Monitor 20 pulgadas";

console.log(producto); // Monitor 20 pulgadas

/* 
  length -> Conocer la cantidad de letras de la cadena de texto
*/
console.log(producto.length); // 20

/* 
  indexOf -> Nos muestra la posicion en la que se encuentra la palabra
*/
console.log(producto.indexOf("Monitor")); // 0

/* 
  includes -> Determina si la palabra esta en la variable
*/
console.log(producto.includes("Tablet")); // true
