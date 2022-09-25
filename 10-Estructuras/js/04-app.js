/*************************** 
COMPARADOR MAYOR O IGUAL Y ELSE IF
***************************/

const dinero = 100
const total_pagar = 300
const tarjeta = true
const cheque = true

if (dinero > total_pagar) 
{
  console.log("Si podemos pagar con efectivo")
} 
else if (tarjeta) 
{
  console.log("Podemos pagar por tarjeta")
} 
else if ("") 
{
  console.log("Podemos pagar con cheque")
} 
else 
{
  console.log("No podemos pagar")
}