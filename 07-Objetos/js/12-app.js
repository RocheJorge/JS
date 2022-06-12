/*************************** 
EL OBJECT CONSTRUCTOR
***************************/

/* 
  La palabra reservada this -> Hace referencia a que esta apuntando a los valores que se encuentran dentro del objeto, es decir,
  this: Este objeto o el valor de este objeto
*/

/* 
  Object literal -> Mas usado
*/

const producto = {
  // llave: valor
  nombre: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true,
};

/* 
  Object Constructor
*/

function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = true;
}

const producto2 = new Producto("Monitor de 20 pulgadas", 500);
console.log(producto2);

const producto3 = new Producto("Television", 300);
console.log(producto3);
