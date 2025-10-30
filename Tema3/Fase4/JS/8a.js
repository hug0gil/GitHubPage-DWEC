/*
8a. Escriba una función de JavaScript para obtener la diferencia entre dos fechas en
días.
Funcion(fecha1, fecha2) Devuelve la diferencia de dias
*/

function diferenciaDias(fecha1, fecha2) {
    const unDia = 1000 * 60 * 60 * 24;
    const f1 = new Date(fecha1);
    const f2 = new Date(fecha2);
    return Math.abs(Math.floor((f2 - f1) / unDia));
}

console.log(diferenciaDias('2025-10-01', '2025-10-10')); 
console.log(diferenciaDias('2025-12-25', '2025-12-01')); 
