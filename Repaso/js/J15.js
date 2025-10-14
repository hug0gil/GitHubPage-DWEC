texto = document.getElementById("texto")
selectCursiva = document.getElementById("selectCursiva")
selectNegrita = document.getElementById("selectNegrita")

selectCursiva.addEventListener("change", function () {
  texto.style.fontStyle = selectCursiva.value 
})

selectNegrita.addEventListener("change", function () {
  texto.style.fontWeight = selectNegrita.value 
})
