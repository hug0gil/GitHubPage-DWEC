/*
9. Escriba una función de JavaScript para poner en mayúscula la primera letra
de cada palabra en una cadena
 */

function ponerMayus(palabras) {
  finalSentence = ""
  partes = palabras.split(" ")
  for (i = 0; i < partes.length; i++) {
    finalSentence +=  (partes[i].charAt(0).toUpperCase()).concat(partes[i].substring(1,partes[i].length)+" ")
  }
  return finalSentence
}

console.log(ponerMayus("hola me llamo hugo"))