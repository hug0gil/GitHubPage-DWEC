texto = document.getElementById("inputText")
button = document.getElementById("buttonMostrar")
capa = document.getElementById("capa")

button.addEventListener('click',function (){
    capa.hidden = false
    capa.textContent = texto.value
})