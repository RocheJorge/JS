/*************************** 
CORTAR ESPACIOS EN BLANCO DE UN STRING
***************************/

const producto = "                    Monitor de 20 pulgadas           ";

console.log(producto); //                     Monitor de 20 pulgadas
console.log(producto.length);

/* 
  Elimina el espacio en blanco al inicio
*/
console.log(producto.trimStart()); // Monitor de 20 pulgadas

/* 
  Elimina el espacio en blanco al final
*/
console.log(producto.trimEnd()); //                     Monitor de 20 pulgadas

/* 
  Al mismo tiempo 2 metodos
*/
console.log(producto.trimStart().trimEnd()); // Monitor de 20 pulgadas

/* 
  Elimina el espacio de los 2 lados (Este metodo es mas viejo)
*/
console.log(producto.trim()); // Monitor de 20 pulgadas
