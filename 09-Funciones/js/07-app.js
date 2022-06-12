/*************************** 
COMO SE COMUNICAN LAS FUNCIONES
***************************/

iniciarApp();

function iniciarApp() {
  console.log("Iniciando app........."); // Iniciando app.........
  segundaFuncion();
}

function segundaFuncion() {
  console.log("Desde la segunda funcion"); // Desde la segunda funcion
  usuarioAutenticado("Jorge");
}

function usuarioAutenticado(usuario) {
  console.log("Autenticando Usuario por favor espere.....");
  console.log(`Usuario Autenticado Exitosamente: ${usuario}`); // Usuario Autenticado Exitosamente: Jorge
}
