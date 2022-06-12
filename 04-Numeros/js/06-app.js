/*************************** 
CONVERTIR STRINGS A NUMEROS
***************************/

const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

/* 
  Convierte un String a Numero Entero
*/
console.log(Number.parseInt(numero1)); // 20

/* 
  Convierte un String a Numero Flotante
*/
console.log(Number.parseFloat(numero2)); // 20.2

/* 
  Revisa si un numero es entero o no
*/
console.log(Number.isInteger(numero4)); // true
