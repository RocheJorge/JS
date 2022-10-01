/*************************** 
for in -> Itera sobre los valores de un objeto
***************************/

const carrito = {
  nombre: "Monitor de 20 pulgadas",
  marca: "Samsung",
  modelo: "Unico",
};

for (let [llave, valor] of Object.entries(carrito)) {
  console.log(valor)
}