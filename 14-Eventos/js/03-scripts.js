/***********************
Eventos sobre los Inputs - Teclado
***********************/

// keydown -> Cuando presionas una tecla
// keyup -> Cuando presionas una tecla pero la levantas
// blur -> Cuando entramos, no tocamos ninguna tecla pero se activa cuando damos click afuera del input
// copy -> Cuando copiamos el texto
// paste -> Cuando pegamos el texto
// cut -> Cuando cortamos el texto
// input -> Todos en 1 pero el blur no funciona


const busqueda = document.querySelector('.busqueda')

busqueda.addEventListener('copy', () => {
  console.log('escribiendo...');
})

// Con eventos capturando lo que el usuario escribe

// e -> evento de escucha
// target -> capturamos todo el HTML del input
// value -> Capturamos el valor de lo que el usuario escribe
busqueda.addEventListener('input', (e) => {
  if (e.target.value == "") {
    console.log('fallo la validacion');
  }
})