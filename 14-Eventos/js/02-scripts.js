/***********************
Eventos con el Mouse
***********************/

// mousedown -> Similar al click
// mouseenter -> Cuando entramos en el div
// mouseout -> Cuando evento cuando salimos del div
// click -> Cuando hacemos click
// dblclick -> doble click
// mouseup -> Cuando sueltas el click

const nav = document.querySelector('.navegacion')

// Registrar un evento cuando se le da click
nav.addEventListener('click', () => {
  console.log('click en nav');
})

// Registrar un evento cuando entramos en el div
nav.addEventListener('mouseenter', () => {
  console.log('entrando en la navegacion');
  
  nav.style.backgroundColor = "transparent"
})

// Registrar un evento cuando salimos del div
nav.addEventListener('mouseout', () => {
  console.log('Saliendo de la navegacion');

  nav.style.backgroundColor = "white"
})