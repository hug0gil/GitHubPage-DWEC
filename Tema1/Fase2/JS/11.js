window.addEventListener("load", () => {
  n1 = prompt("Introduce una temperatura para pasar de ºC a ºF:")
  alert("La conversión de " + n1 + "ºC a Fahrenheit " + ((n1 * 9/5)+ 32) + "ºF")
  n2 = prompt("Introduce una temperatura para pasar de ºF a ºC:")
  alert("La conversión de " + n2 + "ºF a Celsius " + ((n2 - 32)* 5/9) + "ºC")
})

/*
11. Escriba un programa JavaScript para convertir temperaturas desde y hacia
Celsius, Fahrenheit.
*/