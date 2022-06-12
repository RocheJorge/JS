/*************************** 
ACCEDER A LOS VALORES DE UN ARREGLO
***************************/

const numeros = [10, 20, 30, 40, 50, [1, 2, 3]];

console.log(numeros); // [10, 20, 30, 40, 50]
console.table(numeros); // Tabla de [10, 20, 30, 40, 50]

/* 
  Acceder al arreglo
*/

console.log(numeros[0]); // 10
console.log(numeros[3]); // 40
console.log(numeros[4]); // 50
console.log(numeros[5]); // [1,2,3]
console.log(numeros[5][2]); // 3
