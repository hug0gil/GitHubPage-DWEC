function sumarHasta(n) {
    if (n <= 0) return 0;      
    return n + sumarHasta(n - 1); 
}

console.log(sumarHasta(5)); 