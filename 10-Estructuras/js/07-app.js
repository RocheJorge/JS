/*************************** 
EL OPERADOR OR PARA REVISAR QUE SE CUMPLA ALMENOS 1 CONDICION
***************************/

const efectivo = 300
const credito = 400
const disponible = efectivo + credito
const total_pagar = 600

if (efectivo > total_pagar || credito > total_pagar || disponible > total_pagar) 
{
  console.log("Si podemos pagar")
} 
else 
{
  console.log("No podemos pagar")
}