lista = document.getElementById("lista")
img = document.getElementById("img")

lista.addEventListener("change", function () {
  rutaImg = "images/"

  if (lista.value === "Atardecer") rutaImg += "atardecer.jpeg"
  else if (lista.value === "Bosque") rutaImg += "bosque.jpg"
  else if (lista.value === "Lago") rutaImg += "lago.jpeg"

  img.src = rutaImg
  img.hidden = false
})
