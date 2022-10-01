/***********************
Spread operator para agregar al arreglo o objetos sin alterar el arreglo o objeto original
***********************/

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Spread con arreglo de indices
const meses2 = [...meses, 'Agosto']
console.log(meses2)

const producto = { nombre: 'Disco Duro', precio: 1000}

const carrito2 = [...carrito, producto]

console.log(carrito2)