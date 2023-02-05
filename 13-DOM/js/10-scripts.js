/***********************
Generar HTML con Javascript
***********************/

/*
Creamos el elemento para agregarlo a nuestro sitio HTML con 
createElement('etiqueta HTML')
*/
const enlace = document.createElement('a')

// Agregando el texto
enlace.textContent = 'Nuevo Enlace'

// añadiendo href
enlace.href = '/nuevo_enlace'

// añadiendo target
enlace.target = '_blank'

// añadiendo atributo
enlace.setAttribute('data-enlace', 'nuevo-enlace')

// añadiendo nueva clase
enlace.classList.add('alguna-clase')

// añadiendo evento onclick
enlace.onclick = miFuncion;

// Seleccionamos la navegacion para agregar el enlace creado
const navegacion = document.querySelector('.navegacion')

// Con navegacion.appendChild(enlace) -> Se agregara al final del menu de navegacion
// navegacion.appendChild(enlace)

/* Con navegacion.insertBefore(enlace, navegacion.children[1])
 -> Se agregara antes de la posicion que le indiquemos
*/
 console.log(navegacion.children)
navegacion.insertBefore(enlace, navegacion.children[1])

function miFuncion() {
  alert('Enlace')
}

/*
Crear un CARD dinamicamente con Javascript
*/

const parrafo1 = document.createElement('p')
parrafo1.textContent = 'Concierto'
parrafo1.classList.add('categoria', 'concierto')

const parrafo2 = document.createElement('p')
parrafo2.textContent = 'Concierto de Rock'
parrafo2.classList.add('titulo')

const parrafo3 = document.createElement('p')
parrafo3.textContent = '$ 800 por persona'
parrafo3.classList.add('precio')

// Los 3 parrafos estan dentro de la clase info por lo tanto creamos un div con la clase info
const info = document.createElement('div')
info.classList.add('info')
// Agregamos los 3 parrafos al div con la clase info
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3)

// Creamos la imagen
const imagen = document.createElement('img')
imagen.src = 'img/hacer2.jpg'
imagen.alt = 'Texo Alternativo'

// El div info esta dentro de un div con la clase card por lo tanto creamos el div con la clase card y agregamos el div con la clase info
const card = document.createElement('div')
card.classList.add('card')
// Agregamos la imagen
card.appendChild(imagen)
// Agregamos el div con la clase info
card.appendChild(info)

console.log(card)

// Insertamos en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards')
contenedor.appendChild(card)