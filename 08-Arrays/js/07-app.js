/*************************** 
ELIMINAR ELEMENTOS CON SPLICE
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

carritoCompras.push(producto);
carritoCompras.push(producto2);

const producto3 = {
  nombre: "Teclado",
  precio: 50,
};

carritoCompras.unshift(producto3);

/* 
  pop -> Elimina el ultimo elemento de un arreglo
*/

carritoCompras.pop();

/* 
  shift -> Elimina el primer elemento de un arreglo
*/

carritoCompras.shift();

/* 
  splice -> Elimina los demas elementos de un arreglo
*/

carritoCompras.splice(1, 2);
