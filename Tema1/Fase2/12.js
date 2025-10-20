/*
12. Escriba un programa JavaScript para obtener la URL del sitio web (página de
carga).
 */

window.addEventListener("load", () => {
  const urlActual = window.location.href;
  alert("La URL de esta página es: " + urlActual);
});
