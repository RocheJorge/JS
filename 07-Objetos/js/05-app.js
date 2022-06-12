/*************************** 
OBJETOS DENTRO DE OBJETOS
***************************/

const producto = {
  // llave: valor
  nombre: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true,
  informacion: {
    medidas: {
      peso: "1kg",
      medida: "1m",
    },
    fabricacion: {
      pais: "China",
    },
  },
};

console.log(producto); // Objeto producto

console.log(producto.informacion.medidas.peso); // 1kg
console.log(producto.informacion.fabricacion.pais); // China
