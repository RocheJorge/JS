/*************************** 
EL OPERADOR && PARA REVISAR QUE SE CUMPLAN 2 O MAS CONDICIONES
***************************/

const usuario = false
const puede_pagar = false

if (usuario && puede_pagar) 
{
  console.log("Si puedes comprar")
} else if (!puede_pagar && !usuario) 
{
  console.log("No puedes comprar")
} else if (!usuario) 
{
  console.log("Inicia Sesion")
} else if (!puede_pagar) 
{
  console.log("Fondos insuficientes")
}
