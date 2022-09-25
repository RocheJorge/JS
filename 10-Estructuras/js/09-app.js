/*************************** 
EL OPERADOR TERNARIO
***************************/

// condicion ? "Si se cumple" : "No se cumple"

const autenticado = true
const puede_pagar = true

// ternario
ternario = autenticado ? "Si esta autenticado" : "No esta autenticado"

console.log("🚀 ~ file: 09-app.js ~ line 10 ~ ternario", ternario)

// ternario_condicional
ternario_condicional = autenticado && puede_pagar ? "Esta autenticado y puede pagar" : "No esta autenticado"

console.log("🚀 ~ file: 09-app.js ~ line 15 ~ ternario_condicional", ternario_condicional)

// ternario_anidado
ternario_anidado = autenticado ? puede_pagar ? "Puede Pagar" : "No puede pagar" : "Esta autenticado"

console.log("🚀 ~ file: 09-app.js ~ line 22 ~ ternario_anidado", ternario_anidado)