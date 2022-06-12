/*************************** 
LA DIFERENCIA ENTRE FUNCTION EXPRESSION Y DECLARATION
***************************/

/* 
  Declaracion de Funcion ( Function Declaration )

  funciona cuando se manda a llamar y luego es declarada debido al hoisting
  
  hoisting -> la 1ra vuelta es de preparacion y la 2da vuelta es de ejecucion
*/

sumar();
function sumar() {
  console.log(2 + 2); // 4
}

/* 
  Expresion de Funcion ( Function Expression )
  
  No funciona cuando se manda a llamar y luego es declarada debido al hoisting
*/

sumar2();
const sumar2 = function () {
  console.log(3 + 3); // Uncaught ReferenceError: Cannot access 'sumar2' before initialization
};
