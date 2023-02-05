/***********************
Eliminar elementos del DOM
***********************/

/*
const primerEnlace = document.querySelector('a')
primerEnlace.remove()
*/

// Eliminar desde el padre

const navegacion = document.querySelector('.navegacion')
/*
{
  "0": {},
  "1": {},
  "2": {}
}
*/
console.log(navegacion.children)

// Elimina el que se encuentre en la posicion 2
navegacion.removeChild(navegacion.children[2])