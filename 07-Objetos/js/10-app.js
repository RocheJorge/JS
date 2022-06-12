/*************************** 
COPIAR 2 OBJETOS
***************************/

const producto = {
  // llave: valor
  nombre: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true,
};

const medidas = {
  // llave: valor
  peso: "1kg",
  medida: "1m",
};

/* 
  1ra forma
*/

const resultado = Object.assign(producto, medidas);

console.log(resultado); // {nombre: 'Monitor de 20 pulgadas', precio: 300, disponible: true, peso: '1kg', medida: '1m'}
// disponible: true
// medida: "1m"
// nombre: "Monitor de 20 pulgadas"
// peso: "1kg"
// precio: 300

/* 
  2da forma con spread operator o rest operator:
    ... -> Los 3 puntos significan que estan copiando el objeto
*/

const resultado2 = { ...producto, ...medidas };

console.log(resultado2); // {nombre: 'Monitor de 20 pulgadas', precio: 300, disponible: true, peso: '1kg', medida: '1m'}
// disponible: true
// medida: "1m"
// nombre: "Monitor de 20 pulgadas"
// peso: "1kg"
// precio: 300
