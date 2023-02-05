/***********************
Seleccionar elementos con QuerySelector -> Su sintaxis es como la de css seleccionando las clases
***********************/

const card = document.querySelector('.card')
console.log(card)

// Podemos tener selectores especificos como en CSS
const info = document.querySelector('.premium .info')
console.log(info)

// Seleccionar el segundo card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)')
console.log(segundoCard)

// Seleccionar el formulario por id: OJO, seleccionara el primero que encuentre
const formulario = document.querySelector('#formulario')
console.log(formulario)

// Seleccionar elemento por su etiqueta html
const navegacion = document.querySelector('nav')
console.log(navegacion)