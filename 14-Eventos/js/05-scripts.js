/***********************
Eventos al dar Scroll con el mouse
***********************/

// getBoundingClientRect() -> Nos dice a que distancia esta ese elemento

window.addEventListener('scroll', () => {
  
  const premium = document.querySelector('.premium')
  
  const ubicacion = premium.getBoundingClientRect()

  console.log(ubicacion);
  
  if (ubicacion.top < 620) {
    console.log('El elemento esta visible');
  } else {
    console.log('Aun el elemento no esta visible');
  }

})