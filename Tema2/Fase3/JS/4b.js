/*
4b. Escriba una función de JavaScript para obtener el nombre del mes a partir de
una fecha en particular.
Funcion( mes,año) Devuelve 30 o 31 dias
*/

function diaMes(mes,anyo){
    return new Date(anyo,mes,0).getDate()
}

console.log(diaMes(2, 2024)); 
console.log(diaMes(2, 2023)); 
console.log(diaMes(1, 2023)); 
console.log(diaMes(4, 2023)); 
