/*
4a. Escriba un programa JavaScript para calcular la suma de una matriz de números
enteros.
Ejemplo: var array = [1, 2, 3, 4, 5, 6] Resultado esperado: 21
*/

let array = [1, 2, 3, 4, 5, 6]

let sumatorio = 0
array.forEach((n => {
sumatorio += n
}))

console.log(sumatorio)