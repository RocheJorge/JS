/*************************** 
DO WHILE LOOP -> SE VA A EJECUTAR MIENTRAS UNA CONDICION SEA VERDADERA Y VA A ENTRAR POR LO MENOS 1 VEZ AL CICLO
***************************/

let i = 1

do {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`El Numero ${i} es FIZZ BUZZ`)
  }
  if (i % 3 === 0) {
    console.log(`El Numero ${i} es FIZZ`)
  } else if (i % 5 === 0) {
    console.log(`El Numero ${i} es BUZZ`)
  }

  i++
} while (i < 100);