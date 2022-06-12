/*************************** 
PARAMETROS POR DEFAULT

= "" -> Se le pasa un parametro por defecto
***************************/

function saludar(nombre = "Desconocido", apellido = "") {
  console.log(`Hola ${nombre} ${apellido}`);
}

saludar("Jorge");
