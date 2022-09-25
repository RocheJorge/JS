/*************************** 
DETENER LA EJECUCION DE UN IF CON UNA CONDICION
***************************/

const autenticado = true

if(autenticado) {
  console.log("El usuario esta autenticado")
}

const puntaje = 450

function revisar_puntaje() {
  if(puntaje > 400) {
    console.log("Excelente")
    return
  }
  if(puntaje > 300) {
    console.log("Buen puntaje ..... Felicidades")
    return
  }
}

revisar_puntaje()