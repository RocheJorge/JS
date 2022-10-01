/*************************** 
EL EJERCICIO FIZZ BUZZ

OJO: SIEMPRE QUE HAYA UN PROBLEMA QUE NO SE SABE COMO RESOLVERLO, DEBEMOS IR PASO A PASO

OJO: LA CONDICION MENOS PROBABLE SIEMPRE VA DE PRIMERA
***************************/

for (let i = 1; i < 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`El Numero ${i} es FIZZ BUZZ`)
  }
  if (i % 3 === 0) {
    console.log(`El Numero ${i} es FIZZ`)
  } else if (i % 5 === 0) {
    console.log(`El Numero ${i} es BUZZ`)
  }
}