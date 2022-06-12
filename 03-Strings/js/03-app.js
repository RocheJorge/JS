/*************************** 
CONCATENAR STRINGS Y TEMPLATE STRINGS
***************************/

const producto = "Monitor 20 Pulgadas";
const precio = "30 USD";

/* 
  concat -> 1ra Forma
*/
console.log(producto.concat(precio)); // Monitor 20 Pulgadas 30 USD

/* 
  + -> 2da Forma
*/
console.log(producto + "Con un precio de: " + precio); // Monitor 20 Pulgadas Con un precio de: 30 USD

/* 
  `${variable}` -> 3ra Forma con template string
*/
console.log(`${producto} Con un precio de ${precio}`);
