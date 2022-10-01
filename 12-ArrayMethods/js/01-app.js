/***********************
 Comprobar si un valor existe en un arreglo con .includes
 ***********************/

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

// con forEach
meses.forEach(mes => {
    if (mes == 'Enero') {
        console.log("Si Existe Enero")
    }
});

// Con un arrayMethod
const resultado = meses.includes('Enero') // Retorna true o false
console.log(resultado)

/***********************
Comprobar si un valor existe en objetos y arreglos con .some
***********************/

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Con objetos
const existe = carrito.some(carro => carro.nombre == 'Television') // retorna true o false

console.log(existe)

// Con arreglos
const existe2 = meses.some(mes => mes == 'Marzo') // retorna true o false

console.log(existe2)