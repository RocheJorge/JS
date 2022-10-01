/***********************
.every -> Todos los elementos del arreglo deben cumplir la condicion para que retorne true
***********************/

const carrito = [
  { nombre: 'Monitor 27 Pulgadas', precio: 500 },
  { nombre: 'Television', precio: 100 },
  { nombre: 'Tablet', precio: 200 },
  { nombre: 'Audifonos', precio: 300 },
  { nombre: 'Teclado', precio: 400 },
  { nombre: 'Celular', precio: 700 },
]

// Todos deben cumplir la condicion para que retorne true
const resultado = carrito.every(producto => producto.precio < 500);

console.log(resultado)

// Al menos 1 debe cumplir la condicion para que retorne true
const resultado2 = carrito.some(producto => producto.precio < 1000);

console.log(resultado2)