let val1 = prompt("Introduce la cadena el usuario 1:")
let val2 = prompt("Introduce la cadena el usuario 2:")
let val3 = prompt("Introduce la cadena el usuario 3:")

let pass = "L4ultimavezKtelod1go"
pass = pass.split("")

let values = [val1, val2, val3]
let valoresJugadores = new Map()

for (let i = 0; i < values.length; i++) {
  let mapa = new Map()

  contador = 0
  let actual = values[i].split("")
  console.log("Usuario " + (i + 1))
  for (let l = 0; l < pass.length; l++) {
    for (let x = 0; x < actual.length; x++) {
      let valor = actual[x]
      if (valor === pass[l]) {
        if (!isNaN(parseFloat(valor))) {
          console.log(valor + "=3")
          contador += 3
        } else if (
          valor.toLowerCase() === "a" ||
          valor.toLowerCase() === "e" ||
          valor.toLowerCase() === "i" ||
          valor.toLowerCase() === "o" ||
          valor.toLowerCase() === "u"
        ) {
          console.log(valor + "=1")
          mapa.set(valor, 1)
          contador += 1
        } else {
          console.log(valor + "=2")
          contador += 2
        }
      }
      //console.log(pass[l])
      //console.log("Valor " + valor + " passVal " + pass[l])
    }
  }
  valoresJugadores.set("Usuario " + (i + 1), contador)
  console.log(contador)
}
max = 0
nombre = ""
valoresJugadores.forEach((value, key) => {
  if (max < value) {
    max = value
    nombre = key
  }
})
alert("Ha ganado el " + nombre)
console.log("Ha ganado el " + nombre)
