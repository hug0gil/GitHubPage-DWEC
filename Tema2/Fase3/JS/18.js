/*
18. Escriba una función de JavaScript para calcular el producto de valores en una
matriz.
*/

let array = [1, 2, 3, 4, 5, 6]

let producto = 0
array.forEach((n => {
producto *= n
}))

console.log(producto)