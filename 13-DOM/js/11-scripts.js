/***********************
Un ejemplo mas avanzado de lo que podemos hacer con JS
***********************/

const btnFlotante = document.querySelector('.btn-flotante')
const footer = document.querySelector('.footer')

btnFlotante.addEventListener('click', mostrarOcultarFooter)

function mostrarOcultarFooter() {
  // contains -> Verifica si el documento tiene esa clase
  if(footer.classList.contains('activo')) {
    footer.classList.remove('activo')
    // this apunta a la lo que crea el evento, en este caso es el: btnFlotante
    this.classList.remove('activo')
    this.textContent = 'Idioma y Moneda'
  }
  else {
    footer.classList.add('activo')
    this.classList.add('activo')
    this.textContent = 'x Cerrar'
  }
}