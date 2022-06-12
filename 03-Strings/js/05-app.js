/*************************** 
STRINGS METHODS - REPLACE, SLICE, SUBSTRING
***************************/

const producto = "Monitor de 20 Pulgadas";
console.log(producto); // Monitor de 20 Pulgadas

/* 
  replace -> Me reemplaza el valor
*/
console.log(producto.replace("Pulgadas", '"')); // Monitor de 20"
console.log(producto.replace("Monitor", "Monitor Curvo")); // Monitor Curvo de 20 Pulgadas

/* 
  slice -> Corta un pedazo de la cadena de texto
*/
console.log(producto.slice(0, 10)); // Monitor de
console.log(producto.slice(8)); // de 20 Pulgadas
/* 
  OJO: si a slice le pasas un valor mayor no mostrara nada
*/
console.log(producto.slice(2, 1)); // vacio

/* 
  substring -> Alternativa a .slice
*/
console.log(producto.substring(0, 10)); // Monitor de
console.log(producto.substring(2, 1)); // o

/* 
  Mostrara una sola letra
*/
const usuario = "Jorge";
console.log(usuario.substring(0, 1)); // J
console.log(usuario.charAt(0)); // J
