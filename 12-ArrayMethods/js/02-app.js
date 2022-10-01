/***********************
.findindex para encontrar la posicion en un array
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

meses.forEach((mes,indice) => {
  if (mes == 'Abril') {
    console.log(`Encontrado en el indice ${indice}`)
  }
})

// Con .findindex en un array
// Si no existe retornara -1
const indice_array = meses.findIndex(mes => mes == 'Diciembre'); // Retornara el valor de la posicion del indice

if (indice_array > 0) {
  console.log("Si existe")
} else {
  console.log("No existe")
}

// Con .findindex en un objeto
const indice_objeto = carrito.findIndex(carro => carro.nombre == 'Celular')

console.log(indice_objeto)