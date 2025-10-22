const actual = new Date()
const navidad = new Date(actual.getFullYear(), 11, 25)

console.log(actual)
console.log(navidad)

const diferenciaMs = navidad - actual;

console.log(diferenciaMs)

const dias = Math.floor((diferenciaMs/1000)/3600/24)

alert("Quedan "+dias+" días para navidad")

/*
9. Escriba un programa JavaScript para calcular los días que quedan hasta la
próxima Navidad.
*/