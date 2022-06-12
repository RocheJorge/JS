/*************************** 
EJEMPLO CON MULTIPLES FUNCIONES QUE SE PASAN VALORES
***************************/

function sumar(a, b) {
  return a + b;
}

const resultado = sumar(2, 3); // 5

/* 
  Ejemplo mas avanzado
*/

let total = 0;

function agregarCarrito(precio) {
  return (total += precio); // 0 + 300 -> 300 + 100 -> 400 + 600 = 1000
}

function calcularImpuesto(total) {
  return total * 1.15; // 1000 * 1.15
}

total = agregarCarrito(300); // 300
total = agregarCarrito(100); // 300 + 100 = 400
total = agregarCarrito(600); // 600 + 400 = 1000

const totalPagar = calcularImpuesto(total); // 1150

console.log(`El total a pagar es de: ${totalPagar}`); // El total a pagar es de: 1150

console.log(total); // 1000
