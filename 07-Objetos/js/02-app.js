/*************************** 
COMO ACCEDER A LOS VALORES DE UN OBJETO
***************************/

const producto = {
  // llave: valor
  nombre: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true,
};

/* 
  1ra forma (La mas comun)
*/
console.log(producto.nombre); // Monitor de 20 pulgadas
console.log(producto.precio); // 300
console.log(producto.disponible); // true

/* 
  2da forma (ya no se usa)
*/
console.log(producto["nombre"]); // Monitor de 20 pulgadas
console.log(producto["precio"]); // 300
console.log(producto["disponible"]); // true
