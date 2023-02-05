/***********************
Cambiando el CSS con JS
***********************/

const encabezado = document.querySelector('h1')

encabezado.style.backgroundColor = 'red'

// La mejor manera de usarlo es agregandole clases (add) y combinandolas con css, funciones o condicionales, tambien podemos remover las clases con (remove)

const card = document.querySelector('.card')

card.classList.add('nueva-clase', 'segunda-clase') // DOMTokenList(2) ['nueva-clase', 'segunda-clase', value: 'nueva-clase segunda-clase']

card.classList.remove('card')

console.log(card.classList)