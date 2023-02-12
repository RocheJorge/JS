/***********************
Eventos submit a un formulario
***********************/

const formulario = document.querySelector("#formulario")

// preventDefault() -> Evita que se abra lo que esta en el action y envien los datos por el metodo POST

// 1 manera con arrow function
formulario.addEventListener('submit', (e) => {
  e.preventDefault()

  console.log('Buscando');
  
  console.log(e);

})

// 2 manera con function declarada
formulario.addEventListener('submit', validarFormulario)

function validarFormulario(e) {
  e.preventDefault()

  console.log('Buscando....');
  
  console.log(e.taget.action);
}