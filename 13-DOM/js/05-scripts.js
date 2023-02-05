/***********************
Seleccionar elementos con QuerySelectorAll -> Se usa como las clases en css y como QuerySelector, la diferencia es que QuerySelectorAll retornara todos los elementos que contengan ese id o clase
***********************/

const card = document.querySelectorAll('.card')
console.log(card)

// Si un elemento no existe retornara un NodeList vacio
const noExiste = document.querySelectorAll('no-existe')
console.log(noExiste)