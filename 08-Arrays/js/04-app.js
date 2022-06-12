/*************************** 
AGREGAR NUEVOS VALORES A UN ARRAY
***************************/

/* 
  OJO: Una variable const se pueden modificar sus valores en un arreglo y un objeto
*/

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

console.table(meses); // ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

meses[0] = "Nuevo Mes";

console.table(meses); // ["Nuevo Mes", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];
