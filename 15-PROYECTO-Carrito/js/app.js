/************************** 
Variables 
**************************/
const carrito = document.querySelector("#carrito")
const contenedorCarrito = document.querySelector("#lista-carrito tbody")
const listaCursos = document.querySelector("#lista-cursos")
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito")
let articuloCarrito = []

/************************** 
Event listeners
**************************/
cargarEventListeners()

function cargarEventListeners() {
  // Cuando agregas un curso presionando "Agregar al carrito"
  listaCursos.addEventListener('click', agregarCurso)

  // Elimina cursos del carrito
  carrito.addEventListener('click', eliminarCurso)

  // Vaciar el carrito
  vaciarCarritoBtn.addEventListener('click', () => {
    
    articuloCarrito = [] // Reseteamos el arreglo

    limpiarHTML() // Eliminamos todo el HTML
    
  })

}

/************************** 
Funciones
**************************/
function agregarCurso(e) {
  // Prevenir el event del href por defecto
  e.preventDefault()
  // Prevenir el event bubbling
  if ( e.target.classList.contains("agregar-carrito") ) {

    // parentElement -> Seleccionamos al contenedor div padre
    const cursoSeleccionado = e.target.parentElement.parentElement

    leerDatosCurso(cursoSeleccionado)
    
  }
}

function eliminarCurso(e) {

  // console.log("Desde eliminar curso");

  // console.log(e.target.classList); // Asi sabremos a que clase apuntamos
  
  if ( e.target.classList.contains("borrar-curso") ) {

    // console.log("Desde la clase borrar-curso");
    
    // console.log( e.target.getAttribute("data-id") ) // Obtenemos el id del curso al que estamos seleccionando

    const cursoId = e.target.getAttribute("data-id")

    // Elimina del arreglo: articuloCarrito[] por el data-id
    // El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
    articuloCarrito = articuloCarrito.filter( cursoSeleccionado => cursoSeleccionado.id !== cursoId )

    console.log(articuloCarrito);

    carritoHTML() // Iterar sobre el carrito y mostrar el HTML
  
  }
  
}

// Lee el contenido del HTML al que le dimos click y extrae la informacion del curso
function leerDatosCurso(cursoSeleccionado) {

  // console.log(cursoSeleccionado);

  // crear un objeto con el contenido del curso actual
  const infoCurso = {
    imagen: cursoSeleccionado.querySelector('img').src,
    titulo: cursoSeleccionado.querySelector('h4').textContent,
    precio: cursoSeleccionado.querySelector('.precio span').textContent,
    id: cursoSeleccionado.querySelector('a').getAttribute('data-id'),
    cantidad: 1
  }

  // El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.

  // console.log(articuloCarrito);

  const existe = articuloCarrito.some( cursoSeleccionado => cursoSeleccionado.id === infoCurso.id )

  // console.log(existe);
  
  if (existe) {

    // Actualizamos la cantidad

    // El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
    const cursos = articuloCarrito.map( cursoSeleccionado => {

      if (cursoSeleccionado.id === infoCurso.id) {

        cursoSeleccionado.cantidad++

        return cursoSeleccionado // Retorn el objeto actualizado

      } else {

        return cursoSeleccionado // Retorna los objetos que no son los duplicados

      }
    })
    articuloCarrito = [...cursos]

  } else {

    // console.log(infoCurso);

    // Agrega elementos al carrito
    articuloCarrito = [...articuloCarrito, infoCurso]
  
}

  // console.log(articuloCarrito);

  carritoHTML()
  
}

// Muestra el carrito de compras en el HTML
function carritoHTML() {

  // Limpar el HTML para que los datos no se repitan
  limpiarHTML()

  // Recorre el carrito
  articuloCarrito.forEach(cursoSeleccionado => {
    // Destructuracion de un objeto
    const { imagen, titulo, precio, cantidad, id } = cursoSeleccionado
    // Creamos las filas con los datos de los cursos <tr>
    const row = document.createElement('tr')
    row.innerHTML = `
      
      <td>
        <img src="${imagen}" width="100px" >
      </td>

      <td> ${titulo} </td>
      
      <td> ${precio} </td>

      <td> ${cantidad} </td>

      <td>
        <a href="#" class="borrar-curso" data-id="${id}"> X </a>
      </td>

    `;

    // Agrega el HTML del carrito en el tbody
    contenedorCarrito.appendChild(row)

  });

}

function limpiarHTML() {
  // Forma lenta
  // contenedorCarrito.innerHTML = '';
  
  // Forma Recomendada
  // Si contenedor carrito tiene almenos 1 elemento adentro este codigo se sigue ejecutando, una vez que es limpiado ya no se ejecuta
  while (contenedorCarrito.firstChild) {

    contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    /*
    Si contenedorCarrito tiene hijos eliminara 1 por 1 para ir limpiando el HTML
    <div>
      <p>1</p> Se elimina
      <p>2</p> Se elimina
      <p>3</p> Se elimina
    </div>
    */
  }

}