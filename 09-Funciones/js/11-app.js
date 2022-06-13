/*************************** 
LAS VENTAJAS DE LOS ARROW FUNCTIONS
***************************/

/* 
  Pasarle 1 parametro a los Arrow Functions
*/

const aprendiendo = (tecnologia) => `Aprendiendo ${tecnologia}`;

console.log(aprendiendo("Javascript"));

/* 
  Pasarle 2 o mas parametros a los Arrow Functions
*/

const aprendiendo2 = (tecnologia, tecnologia2) =>
  `Aprendiendo ${tecnologia} y ${tecnologia2}`;

console.log(aprendiendo("Javascript", "Node JS"));
