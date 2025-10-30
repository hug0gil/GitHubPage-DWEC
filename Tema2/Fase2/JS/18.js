function contarSubcadena(cadena, subcadena) {
    if (subcadena.length === 0) return 0;
    let contador = 0, posicion = 0;
    while ((posicion = cadena.indexOf(subcadena, posicion)) !== -1) {
        contador++;
        posicion += subcadena.length;
    }
    return contador;
}

console.log(contarSubcadena('aa, bb, aa', 'aa'));
console.log(contarSubcadena('El zorro marrón', 'zorro'));