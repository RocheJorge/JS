/*************************** 
PARAMETROS Y ARGUMENTOS EN FUNCIONES
***************************/

// a y b son parametros
function sumar(a, b) {
  console.log(a + b);
}

sumar(2, 3); // 2 y 3 son argumentos
sumar(180, 200);

function saludar(nombre, apellido) {
  console.log(`Hola ${nombre} ${apellido}`);
}

saludar("Jorge", "Roche"); // Hola Jorge Roche

saludar(); // Hola undefined undefined
