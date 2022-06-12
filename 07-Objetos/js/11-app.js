/*************************** 
FUNCIONES EN OBJETOS Y ACCEDER A SUS VALORES
***************************/

/* 
  La palabra reservada this -> Hace referencia a que esta apuntando a los valores que se encuentran dentro del objeto, es decir,
  this: Este objeto o el valor de este objeto
*/

const producto = {
  // llave: valor
  nombre: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true,
  mostrarInfo: function () {
    console.log(
      `El producto: ${this.nombre} tiene un precio de: ${this.precio}`
    );
  },
};
const producto2 = {
  // llave: valor
  nombre: "Tablet",
  precio: 3000,
  disponible: true,
  mostrarInfo: function () {
    console.log(
      `El producto: ${this.nombre} tiene un precio de: ${this.precio}`
    );
  },
};

producto.mostrarInfo();
producto2.mostrarInfo();
