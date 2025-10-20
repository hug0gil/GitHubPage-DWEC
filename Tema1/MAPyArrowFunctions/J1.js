/*
1. Definir una función de flecha que reciba un valor entero y retorne otro valor entero aleatorio
comprendido entre 1 y el valor que llega como parámetro. Asignar dicha función de flecha a una
constante para permitir llamarla en sucesivas ocasiones.
*/

input = document.getElementById("inputNumber")
button = document.getElementById("buttonSubmit")

const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max) + 1
}

button.addEventListener("click", () => {
  alert(getRandomNumber(parseInt(input.value)))
})
