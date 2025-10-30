let val1 = prompt("Introduce la cadena del usuario 1:")
let val2 = prompt("Introduce la cadena del usuario 2:")
let val3 = prompt("Introduce la cadena del usuario 3:")

let pass = "L4ultimavezKtelod1go"
pass = pass.split("")

let values = [val1, val2, val3]
let valoresJugadores = new Map()

for (let i = 0; i < values.length; i++) {
  let mapa = new Map()
  let contador = 0
  let actual = values[i].split("")

  console.log("Usuario " + (i + 1))

  for (let l = 0; l < pass.length; l++) {
    for (let x = 0; x < actual.length; x++) {
      let valor = actual[x]
      if (valor === pass[l]) {
        let puntos = 0

        if (!isNaN(parseFloat(valor))) {
          puntos = 3
        } else if (
          ["a", "e", "i", "o", "u"].includes(valor.toLowerCase())
        ) {
          puntos = 1
        } else {
          puntos = 2
        }

        if (mapa.has(valor)) {
          mapa.set(valor, mapa.get(valor) + puntos)
        } else {
          mapa.set(valor, puntos)
        }

        contador += puntos
      }
    }
  }

  mapa.forEach((value, key) => {
    console.log(`${key} = ${value}p`)
  })

  console.log(contador)
  console.log("--------------")

  valoresJugadores.set("Usuario " + (i + 1), contador)
}

let max = 0
let nombre = ""
valoresJugadores.forEach((value, key) => {
  if (value > max) {
    max = value
    nombre = key
  }
})

alert("Ha ganado " + nombre)
console.log("Ha ganado " + nombre)
//Vezt1a