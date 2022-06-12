/*************************** 
RECORRER UN ARRAY
***************************/

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

console.log(meses); // ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio']
console.table(meses[2]); // Marzo
console.table(meses[3]); // Abril

/* 
  Tenemos que saber cuanto mide el arreglo para recorrerlo
  length -> Nos dice la longitud del arreglo y empieza a contar desde 1
*/

console.log(meses.length); // 7

/*
  Recorremos el arreglo con for

  for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}
    - let -> Variable
    - index -> Indice desde donde emepezara a recorrer
    - < -> Donde el indece sea menor a la longitud del arreglo
    - array.length -> La longitud del arreglo
    - index++ -> Iterara por cada vuelta que de
    - const element -> Variable donde se guardara el valor 
    - array[index] -> Mostrara el valor que contiene el arreglo
*/

for (let i = 0; i < meses.length; i++) {
  const element = meses[i];
  console.log(element);
}
// Enero
// Febrero
// Marzo
// Abril
// Mayo
// Junio
// Julio
