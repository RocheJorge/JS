/*************************** 
AGREGAR O ELIMINAR PROPIEDADES DE UN OBJETO
***************************/

const producto = {
  // llave: valor
  nombre: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true,
};

/* 
  Agregar nuevas propiedades al objeto
*/
producto.imagen = "imagen.jpg";

/* 
  delete -> Eliminar propiedades del objeto
*/
delete producto.disponible;
console.log(producto); // objeto producto sin disponible
