/*************************** 
CREAR UN NUEVO ARREGLO CON EL SPREAD OPERATOR
FORMA DECLARATIVA -> NO MODIFICA EL OBJETO ACTUAL
***************************/

const carritoCompras = [];

const producto = {
  nombre: "Monitor",
  precio: 400,
};

const producto2 = {
  nombre: "Celular",
  precio: 800,
};

const producto3 = {
  nombre: "Teclado",
  precio: 50,
};

let resultado;

resultado = [...carritoCompras, producto];
resultado = [...resultado, producto2];
resultado = [producto3, ...resultado];

console.log(resultado); // [{nombre: 'Teclado', precio: 50}, {nombre: 'Monitor', precio: 400}, {nombre: 'Celular', precio: 800}]
