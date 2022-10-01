/*************************** 
.forEach -> Se va a ejecutar almenos 1 vez por cada vez que haya elementos en el array, es decir, si en el array hay 20 elementos, se va a ejecutar 20 veces
***************************/

/*
Sintaxis:

  array.forEach((element,index) => {
    
  });

  array -> Nombre del array
  element -> Nombre que le deseamos poner para imprimir el arrego
  index -> Nos mostrara el indice del arreglo

*/

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar']

pendientes.forEach((pendiente,index) => {
  console.log(`${index} ${pendiente}`)
});

const carrito = [
  { nombre: "Monitor de 20 pulgadas", precio: 500 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Mouse", precio: 20 },
  { nombre: "Televisor", precio: 300 },
];

carrito.forEach(carrito => console.log(carrito.nombre));

/*************************** 
.map -> Igual que el forEach pero este nos retornara un nuevo arreglo y el forEach no
***************************/

const carrito2 = [
  { nombre: "Monitor de 20 pulgadas", precio: 500 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Mouse", precio: 20 },
  { nombre: "Televisor", precio: 300 },
];

const nuevoArregloCarrito = carrito2.map((carrito) => carrito.nombre);

console.log(nuevoArregloCarrito)