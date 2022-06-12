/*************************** 
BUENAS PRACTICAS A LA HORA DE EVALUAR UN BOOLEAN
***************************/

const autenticado = true;

if (autenticado) {
  console.log("Puedes ver Netflix"); // Puedes ver Netflix
} else {
  console.log("No puedes ver Netflix");
}

/* 
  Operador ternario
  sintaxis -> condicion ? "valor if" : "valor else"
*/
console.log(autenticado ? "Si esta autenticado" : "No esta autenticado"); // Si esta autenticado
