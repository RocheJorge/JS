/*************************** 
EL OBJETO MATH
***************************/

let resultado;

/* 
  PI
*/
resultado = Math.PI; // 3.141592653589793

/* 
  Redondear
*/
resultado = Math.round(2.8); // 3
resultado = Math.round(2.2); // 2
resultado = Math.round(2.6); // 3
resultado = Math.round(2.5); // 3
resultado = Math.round(2.4); // 2

/* 
  Redondear hacia arriba
*/
resultado = Math.ceil(2.1); // 3

/* 
  Redondear hacia abajo
*/
resultado = Math.floor(2.9); // 2

/* 
  Raiz Cuadrada
*/
resultado = Math.sqrt(144); // 12

/* 
  Absoluto
*/
resultado = Math.abs(-500); // +500

/* 
  Potencia
*/
resultado = Math.pow(2, 4); // 16

/* 
  Minimo
*/
resultado = Math.min(3, 5, 6, 7, 3, 1); // 1

/* 
  Maximo
*/
resultado = Math.max(3, 5, 6, 7, 3, 1); // 7

/* 
  Aleatorio
*/
resultado = Math.random() * 20; // numero aleatorio dentro del rango con decimales

/* 
  Aleatorio dentro de un rango
*/
resultado = Math.floor(Math.random() * 30); // numero aleatorio dentro del rango sin decimaeles

console.log(resultado);
