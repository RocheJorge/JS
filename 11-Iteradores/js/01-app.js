/*************************** 
FOR LOOP
***************************/

// Sintaxis
/* 
  for (let i = 0; i <= 10; i++) {
    console.log(`El numero es ${i}`)
  }
*/

// Si un numero es par o impar
/*
for (let i = 1; i <= 20; i++) {
  if(i % 2 === 0) {
    console.log(`El numero ${i} es PAR`)
  } else {
    console.log(`El numero ${i} es IMPAR`)
  }
}
*/

// Recorriendo un Array

const carrito = [
  { nombre: "Monitor de 20 pulgadas", precio: 500 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Mouse", precio: 20 },
  { nombre: "Televisor", precio: 300 },
];

console.log(carrito.length)

for (let i = 0; i < carrito.length; i++) {
  console.log(carrito[i].nombre)
}