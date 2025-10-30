/*
14. Escriba una función de JavaScript para insertar una cadena dentro de una
cadena en una posición particular (el valor predeterminado es 1).
Ejemplo
(insert ('Estamos haciendo ejercicios.'));
(insert ('Estamos haciendo ejercicios.', 'JavaScript'));
(insert ('Estamos haciendo algunos ejercicios.', 'JavaScript', 18));
"Estamos haciendo ejercicios".
"JavaScript Estamos haciendo ejercicios".
"Estamos haciendo algunos ejercicios de JavaScript".
*/

function insertarCadena(cadena, cadenaInsertar = '', posicion = 1) {
    if (posicion < 1) posicion = 1;
    if (posicion > cadena.length + 1) posicion = cadena.length + 1;
    return cadena.slice(0, posicion - 1) + cadenaInsertar + cadena.slice(posicion - 1);
}

console.log(insertarCadena('Estamos haciendo ejercicios.'));
console.log(insertarCadena('Estamos haciendo ejercicios.', 'JavaScript '));
console.log(insertarCadena('Estamos haciendo algunos ejercicios.', ' de JavaScript', 18));
