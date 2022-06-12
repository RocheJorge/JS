/*************************** 
DESTRUCTURING DE OBJETOS

DESTRUCTURING -> Extraer el valor del objeto y crear la variable, todo en un mismo paso
***************************/

const producto = {
  // llave: valor
  nombre: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true,
};

/* 
  Ya esta manera no se usa
*/
// const nombre = producto.nombre;
// console.log(nombre);

/* 
  Destructuring
  sintaxis -> const { llave del objeto } = objeto
*/
const { nombre, precio, disponible } = producto;
console.log(nombre); // Monitor de 20 pulgadas
console.log(precio); // 300
console.log(disponible); // true
