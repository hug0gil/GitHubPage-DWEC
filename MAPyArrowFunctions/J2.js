/*
2. Crear una calculadora con funciones flecha y las operaciones básicas (+ , * , - , / ). Utilizar dos
parámetros de entrada y 4 botones
*/

const input1 = document.getElementById("inputNumber1")
const input2 = document.getElementById("inputNumber2")

const bSumar = document.getElementById("buttonSumar")
const bMultiplicacion = document.getElementById("buttonMultiplicar")
const bResta = document.getElementById("buttonRestar")
const bDivision = document.getElementById("buttonDividir")

const suma = ((a,b) => a+b)
const multiplicacion = ((a,b) => a*b)
const resta = ((a,b) => a-b)
const division = ((a,b) => a/b)


bSumar.addEventListener("click", () => {
  alert(suma(parseInt(input1.value), parseInt(input2.value)))
})

bMultiplicacion.addEventListener("click", () => {
  alert(parseInt(input1.value) * parseInt(input2.value))
})

bResta.addEventListener("click", () => {
  alert(parseInt(input1.value) - parseInt(input2.value))
})

bDivision.addEventListener("click", () => {
  alert(parseInt(input1.value) / parseInt(input2.value))
})
