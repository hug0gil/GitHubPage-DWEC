/*
6. Escriba una función de JavaScript para encontrar el valor más alto en una matriz.
funcion[11,3,16,90] Devuelve 90
*/


function valMax(array) {
  let max = 0
  array.forEach((n) => {
    if (max < n)
        max = n
  })

  return max
}

let array = [11, 3, 16, 90]

console.log(valMax(array))
