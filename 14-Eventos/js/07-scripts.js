/***********************
Prevenir el Event Bubbling con Delegation
***********************/

const cardDiv = document.querySelector(".card")

cardDiv.addEventListener('click', (e) => {
  // e.target -> Me indica donde estoy apuntado
  // e.target.classList -> Me indica el nombre de la clase donde estoy apuntado
  // e.target.classList.contains -> Le indico el lo que contiene esa clase

  // Delegation:

  if (e.target.classList.contains("titulo")) {
    console.log('Diste Click en titulo');
  }

  if (e.target.classList.contains("precio")) {
    console.log('Diste Click en precio');
  }

  if (e.target.classList.contains("card")) {
    console.log('Diste Click en card');
  }
  
})