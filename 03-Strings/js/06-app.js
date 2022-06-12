/*************************** 
STRINGS METHODS - REPEAT, SLICE
***************************/

const producto = "Monitor de 20 pulgadas";

/* 
  repeat -> Te va a permitir repetir una cadena de texto
*/
const texto = " En promocion".repeat(2.4); // 2.4 lo redondeara a 2
console.log(texto); // En promocion En promocion
console.log(`${producto} ${texto}`); // Monitor de 20 pulgadas En promocion En promocion

/* 
  Split, permite dividir un string
*/
const actividad = "Estoy aprendiendo JavaScript Moderno";
console.log(actividad.split(" ")); // ['Estoy', 'aprendiendo', 'JavaScript', 'Moderno']

const hobbies =
  "leer, caminar, escuchar musica, escribir, aprender a programar";
console.log(hobbies.split(",")); // ['leer', ' caminar', ' escuchar musica', ' escribir', ' aprender a programar']
