/***********************
Traversing the DOM -> Es recorrer los nodos de cada elemento HTML para ser mas especificos con lo que necesitamos modificar, es decir, ir navegando por los diferentes elementos del HTML
***********************/

/*
const navegacion = document.querySelector('nav') // body > div > header > nav
console.log(navegacion)

console.log(navegacion.childNodes) // Los espacios en blanco son considerados elementos -> NodeList(9) [text, a, text, a, text, a, text, a, text]

console.log(navegacion.children) // Los espacios en blanco no son considerados elementos -> HTMLCollection(4) [a, a, a, a]

console.log(navegacion.children[1].nodeName) // Muestra la etiqueta -> A

console.log(navegacion.children[1].nodeType)// Muestra el tipo -> 1
*/

// Ejemplo
//OJO: con 'children' recorres los hijos

const card = document.querySelector('.card') // -> body > main > section:nth-child(1) > div > div:nth-child(1)

console.log(card.children) // -> [img, div.info]
/*
[img, div.info]
0: img
1: div.info
*/

console.log(card.children[1]) 
/* <div class="info">
<p class="categoria concierto">concierto</p>
<p class="titulo">Música electrónica 2021</p>
<p class="precio">$1,200 por persona</p>
</div>
*/

console.log(card.children[1].children)
/*
0: p.categoria.concierto
1: p.titulo
2: p.precio
*/

console.log(card.children[1].children[1]) // p.titulo

console.log(card.children[1].children[1].textContent = 'Nuevo Heading desde Traversing the DOM')

// Con una imagen
card.children[0].src = 'img/hacer3.jpg'

// Traversing the DOM del Hijo al Padre
//OJO: con 'parentElement' recorres los padres

console.log(card.parentElement.parentElement)
/*
body > main > section
*/

// Con 'nextElementSibling' permite seleccionar el siguiente elemento
console.log(card) // Selecciona el primer card
console.log(card.nextElementSibling) // Selecciona el segundo card
console.log(card.nextElementSibling.nextElementSibling) // Selecciona el tercer card

// Con 'previousElementSibling' permite seleccionar el ultimo elemento

const ultimoCard = document.querySelector('.card:nth-child(4)')
console.log(ultimoCard.previousElementSibling)

// Seleccionar el primer elemento en el menu navegacion
const navegacion = document.querySelector('nav') // body > div > header > nav
console.log(navegacion.firstElementChild) // <a href="#">Vender</a>
console.log(navegacion.lastElementChild) // <a href="#">Iniciar Sesión</a>