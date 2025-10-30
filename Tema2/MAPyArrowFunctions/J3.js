/* 
3.Almacenar en un Map los nombres de ciudades como clave y la cantidad de habitantes como
valores. Mostrar en una lista HTML que se debe crear en forma dinámica inmediatamente luego que
se carga la página.
Se debe implementar estas opciones:

1. El usuario puede ver todas las ciudades y sus habitantes
2. El usuario puede saber cuantas ciudades existen
3. Borrar ciudad
4. Añadir ciudad y habitantes
5. Si el usuario solicita saber la ciudad de mas habitantes que se muestre en un color rojo el tipo de
letra
6. Si el usuario solicita la ciudad de menos habitantes que se muestre en color verde.
*/

/* Interactuando con el DOM

const map = new Map([
  ["Jerez de la Frontera", 232000],
  ["Cádiz", 123000],
  ["Algeciras", 157000],
])

window.addEventListener("DOMContentLoaded", () => {
  const tabla = document.getElementById("tablaCiudades")

  //Primero valor luego clave
  map.forEach((habitantes, ciudad) => { 
    const fila = document.createElement("tr")

    const celdaCiudad = document.createElement("td")
    celdaCiudad.textContent = ciudad

    const celdaHabitantes = document.createElement("td")
    celdaHabitantes.textContent = habitantes

    fila.appendChild(celdaCiudad)
    fila.appendChild(celdaHabitantes)

    tabla.appendChild(fila)
  })
})
  */
