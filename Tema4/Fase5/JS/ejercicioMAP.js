function analizarTexto(texto) {
  const mapa = new Map()
  let palabras = texto.split(" ")
  console.log(palabras)

  for (let i = 0; i < palabras.length; i++) {
    palabras[i] = palabras[i]
      .split("")
      .filter(
        (letra) =>
          letra !== "." &&
          letra !== "," &&
          letra !== ";" &&
          letra !== ":" &&
          letra !== "!" &&
          letra !== "?"
      )
      .join("")
    console.log(palabras[i])
  }

  console.log(palabras)

  palabras.forEach((palabra) => {
    if (!mapa.has(palabra)) mapa.set(palabra, 1)
    else {
      mapa.set(palabra, mapa.get(palabra) + 1)
    }
  })

  mapa.keys().forEach((reg) => {
    console.log(reg + ":" + mapa.get(reg))
  })
}

analizarTexto("esto, es una prueb:a:A,oL esto esto")
