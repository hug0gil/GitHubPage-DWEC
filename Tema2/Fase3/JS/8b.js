/*
8b. Escriba un programa JavaScript para encontrar el elemento más frecuente de
una matriz.
*/

function numeroMasFrecuente(arr) {
    const contador = new Map();
    let maxFrecuencia = 0;
    let numeroFrecuente = null;

    for (num of arr) {
        const count = (contador.get(num) || 0) + 1;
        contador.set(num, count);
        if (count > maxFrecuencia) {
            maxFrecuencia = count;
            numeroFrecuente = num;
        }
    }

    return numeroFrecuente;
}

console.log(numeroMasFrecuente([1, 2, 2, 3, 3, 3, 4])); 
