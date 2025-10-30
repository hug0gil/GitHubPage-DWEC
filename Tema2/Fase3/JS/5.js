/*
5. Escriba un programa JavaScript simple para unir todos los elementos de una
matriz en una cadena
*/

let array = ["hola","buenos","dias"]

frase = ""
array.forEach((n => {
frase += n+" "
}))

console.log(frase)