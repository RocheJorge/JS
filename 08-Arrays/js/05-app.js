/*************************** 
AÑADIR NUEVOS ELEMENTOS AL FIN O AL INICIO DE UN ARRAY
FORMA IMPERATIVA -> MODIFICA EL OBJETO ACTUAL
***************************/

const meses = ["Enero", "Febrero", "Marzo"];

/* 
  .push() -> Agrega al final del carrito de compras
  .unshift() -> Agrega al inicio del arreglo y colocara al primero en la segunda posicion
*/

meses.push("Abril"); // ["Enero", "Febrero", "Marzo", "Abril"];
meses.push("Mayo"); // ["Enero", "Febrero", "Marzo", , "Abril"];

console.table(meses);

/* 
  Ejemplo con carrito de compras
  [] -> Inicializamos sin ningun valor porque se le iran agregando a medida que el usuario agregue
*/

const carritoCompras = [];

/* 
  Definir un producto
*/

const producto = {
  nombre: "Monitor",
  precio: 400,
};

const producto2 = {
  nombre: "Celular",
  precio: 800,
};

carritoCompras.push(producto);
carritoCompras.push(producto2);

const producto3 = {
  nombre: "Teclado",
  precio: 50,
};

carritoCompras.unshift(producto3);

console.log(carritoCompras); // [{nombre: 'Teclado', precio: 50}, {nombre: 'Monitor', precio: 400}, nombre: 'Celular', precio: 800}]
