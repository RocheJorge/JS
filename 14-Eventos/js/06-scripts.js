/***********************
Que es el Event Bubbling -> Es cuando presionas un evento pero ese evento se propaga por varios lugares
***********************/

// e.stopPropagation() -> Previene que se propage el Event Bubbling por varios lugares

const cardDiv = document.querySelector(".card")
const infoDiv = document.querySelector(".info")
const titulo = document.querySelector(".titulo")

cardDiv.addEventListener('click', e => {
  e.stopPropagation()
  console.log('click en card');
})

infoDiv.addEventListener('click', e => {
  e.stopPropagation()
  console.log('click en info');
})

titulo.addEventListener('click', e => {
  e.stopPropagation()
  console.log('click en titulo');
})