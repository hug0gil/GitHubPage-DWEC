const palabrasOld = ["hola", "mUndo", "árbol", "PIrrAmiDe"];

// palabrasOld.forEach(p => { console.log(p) })

function capitalizarYContarVocales(palabras) {
    const vocales = "aeiou";
    let totalVocales = 0;

    const palabrasCapitalizadas = palabras.map(p => {
        for (const letra of p.toLowerCase()) {
            if (vocales.includes(letra)) totalVocales++;
        }
        return p.charAt(0).toUpperCase() + p.slice(1).toLowerCase();
    });

    return { palabras: palabrasCapitalizadas, totalVocales };
}

console.log(capitalizarYContarVocales(palabrasOld));
