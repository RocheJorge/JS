/***********************
Modificar Textos o Imagenes con JS
***********************/

/* 
<div class="contenido-hero contenedor">
            <h1>Encuentra <span> hospedaje  </span>para tus próximas vacaciones</h1>
*/
const encabezado = document.querySelector('.contenido-hero h1')

console.log(encabezado.innerText) // Si en el CSS - visibility:hidden, no lo va a encontrar
console.log(encabezado.textContent) // Si en el CSS - visibility:hidden, si lo va a encontrar 
console.log(encabezado.innerHTML) // Se trae el HTML

const nuevoHeading = 'Nuevo Heading'
document.querySelector('.contenido-hero h1').textContent = nuevoHeading

// Modificar imagenes
const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg'