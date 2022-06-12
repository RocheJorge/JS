/*************************** 
DESTRUCTURING DE ARRAYS
***************************/

const producto = {
  // llave: valor
  nombre: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true,
};

/* 
  Destructuring con Arreglos
  sintaxis -> const [ llave del array ] = Array
*/
/* 
  1ra forma
*/
const numeros = [10, 20, 30, 40, 50];
const [a, b, c] = numeros; // 10,20,30
console.log(a, b, c); // 10

/* 
  2da forma
*/
const numeros2 = [10, 20, 30, 40, 50];
const [, , , cuarenta] = numeros2;
console.log(cuarenta); // 40

/* 
  3ra forma -> Muy usada en react js
*/
const numeros3 = [10, 20, 30, 40, 50];
const [primero, ...segundo] = numeros3;
console.log(primero, segundo); // 10 [20,30,40,50]
