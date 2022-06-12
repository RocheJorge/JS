/*************************** 
SELLAR UN OBJETO
***************************/

const producto = {
  // llave: valor
  nombre: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true,
};

/* 
  Object.seal -> No se pueden agregar ni eliminar propiedades pero si se pueden modificar las existentes
*/
Object.seal(producto);
producto.disponible = false;
producto.imagen = "imagen.jpg";
delete producto.precio;

console.log(producto); // objeto producto

console.log(Object.isSealed(producto)); // true
