/*
31. Escriba una función de JavaScript para obtener el número más alto de tres
números diferentes.
*/


let array = [9, 89, 3]

let max = 0
array.forEach((n => {
if (n < max)
    max = n
}))

console.log(max)