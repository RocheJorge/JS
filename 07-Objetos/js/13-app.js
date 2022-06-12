/*************************** 
OBJECT
KEYS
VALUES
ENTRIES 
***************************/

const producto = {
  // llave: valor
  nombre: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true,
};

/* 
  KEYS -> Nos retorna un objeto con las llaves del objeto
*/
const key = Object.keys(producto);
console.log(key); // ['nombre', 'precio', 'disponible']

/* 
  VALUES -> Nos retorna un objeto con los valores del objeto
*/
const value = Object.values(producto);
console.log(value); // ['Monitor de 20 pulgadas', 300, true]

/* 
  ENTRIES -> Nos retorna un objeto con sus llaves y sus valores
*/

const entri = Object.entries(producto);
console.log(entri);
