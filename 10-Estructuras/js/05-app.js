/*************************** 
SWITCH PARA EVALUAR MULTIPLES CONDICIONES
***************************/

const metodo_pago = "Efectivo";

switch (metodo_pago) {
  case "Efectivo":
    console.log("Pagaste con Efectivo");
    break;
  case "Cheque":
    console.log("Pagaste con Cheque");
    break;
  case "Tarjeta":
    pagar();
    break;
  default:
    console.log("Seleccione un metodo de pago correcto");
    break;
}

function pagar() {
  console.log("Pagando....");
}
