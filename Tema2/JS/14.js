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

function insert(palabra1,palabra2,pos = 1) {
    let palabras = {palabra1}
        
    //console.log(palabras)

    return palabras
}

console.log(insert("Estamos haciendo ejercicios."))
console.log(insert("Estamos haciendo ejercicios.", "JavaScript"))
