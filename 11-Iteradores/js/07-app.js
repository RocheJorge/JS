/*************************** 
for of -> Version mas compacta de for, forEach, itera sobre arreglos
***************************/

/* 
Sintaxis:

  for (const iterator of object) {
    console.log(iterator)
  }

  iterador -> Nombre para iterar el array
  object -> Nombre del array
*/

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar'];

for (const iterador of pendientes) {
  console.log(iterador)
}

const carrito = [
  { nombre: "Monitor de 20 pulgadas", precio: 500 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Mouse", precio: 20 },
  { nombre: "Televisor", precio: 300 },
];

for (const iterator of carrito) {
  console.log(iterator)
}