/*************************** 
DESTRUCTURING DE OBJETOS ANIDADOS
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

// Destructurando objetos anidados
const {
  nombre,
  informacion,
  informacion: {
    fabricacion,
    fabricacion: { pais },
  },
} = producto;

console.log(nombre); // Monitor de 20 pulgadas
console.log(informacion); // Objeto medidas
console.log(fabricacion); // Objeto fabricacion
console.log(pais); // China
