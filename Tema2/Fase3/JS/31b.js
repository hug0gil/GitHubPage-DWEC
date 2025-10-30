/*
31. Escriba una función de JavaScript para eliminar un elemento específico de una
matriz.
Remueve ([2,4,5,9],5) Devuelve [2,4,9]
*/

function removerElemento(array, elemento) {
  return array.filter((e) => e !== elemento)
}

console.log(removerElemento([2, 4, 5, 9], 5)) 
