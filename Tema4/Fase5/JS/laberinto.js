


const laberinto = [
    ["S", " ", "X", " "],
    ["X", " ", "X", " "],
    [" ", " ", " ", " "],
    ["X", "X", " ", "F"]
];

function resolverLaberinto(lab, x = 0, y = 0, visitado = null) {
    if (!visitado) visitado = Array.from({ length: lab.length }, () => Array(lab[0].length).fill(false));

    if (x < 0 || y < 0 || x >= lab.length || y >= lab[0].length) return false;
    if (lab[x][y] === 'X' || visitado[x][y]) return false;

    visitado[x][y] = true;
    console.log(`Estoy en [${(x + 1)},${(y + 1)}]`);

    if (lab[x][y] === 'F') return true;

    return resolverLaberinto(lab, x, y + 1, visitado) || //Se mueve hacia derecha
        resolverLaberinto(lab, x, y - 1, visitado) || //Se mueve hacia izquierda
        resolverLaberinto(lab, x + 1, y, visitado) || //Se mueve hacia abajo
        resolverLaberinto(lab, x - 1, y, visitado);   //Se mueve hacia arriba
}

console.log(resolverLaberinto(laberinto))


function recursividad(i) {
    console.log(i)

    if (i === 3) {
        console.log("llego a 3 mediante recursividad")
        return true
    }
    return recursividad(i + 1)
}

//console.log(recursividad(0))