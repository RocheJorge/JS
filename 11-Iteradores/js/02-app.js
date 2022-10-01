/*************************** 
BREAK Y CONTINUE EN UN FOR LOOP
break -> Detiene la ejecucion
continue -> Continua la ejecucion
***************************/

/*
for (let i = 0; i <= 10; i++) {
  if (i === 5){
    console.log("Cinco")
    // break
    continue
  }
  console.log(i)
}
*/

const carrito = [
  { nombre: "Monitor de 20 pulgadas", precio: 500 },
  { nombre: "Teclado", precio: 50, descuento: true },
  { nombre: "Mouse", precio: 20 },
  { nombre: "Televisor", precio: 300 },
];

for (let i = 0; i < carrito.length; i++) {
  if (carrito[i].descuento) {
    console.log(`El articulo ${carrito[i].nombre} Esta en Descuento`)
    continue
  }
  console.log(carrito[i].nombre)
}