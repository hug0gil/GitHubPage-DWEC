function palabraBusqueda(cadena, palabra) {
    const veces = contarSubcadena(cadena, palabra);
    return `'${palabra}' se encontró ${veces} ${veces === 1 ? 'vez' : 'veces'}.`;
}

console.log(palabraBusqueda('El zorro marrón', 'zorro'));
console.log(palabraBusqueda('aa, bb, aa', 'aa'));