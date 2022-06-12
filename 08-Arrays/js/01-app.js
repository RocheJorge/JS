/*************************** 
CREAR ARREGLOS EN JAVASCRIPT
LOS ARREGLOS SE USAN PARA AGRUPAR ELEMENTOS DEL MISMO TIPO, UN ARREGLO PUEDE TENER MULTIPLES ELEMENTOS QUE SON IGUALES
***************************/

const numeros = [10, 20, 30]; // -> Mas usada
console.log(numeros); // [10, 20, 30]

const meses = new Array("Enero", "Febrero", "Marzo"); // -> No es muy comun
console.log(meses); // ['Enero', 'Febrero', 'Marzo']

/* 
  Un arreglo que contiene de todo tipo
*/

const deTodo = [
  "Hola",
  10,
  true,
  "si",
  null,
  { nombre: "Jorge", trabajo: "Programador" },
  [1, 2, 3],
];

console.log(deTodo); // ['Hola', 10, true, 'si', null, {…}, Array(3)]
