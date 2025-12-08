const arr = [1, 2, 3, 4, 5, 6]
const filtro = n => n % 2 === 0
const transformation = n => n * n

function filtrarYTransformar(arr, filtro, transformation) {
    return arr.filter(filtro).map(transformation);
}

console.log(filtrarYTransformar(arr, filtro, transformation))