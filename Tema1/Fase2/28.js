/*
28. Escriba un programa JavaScript para verificar si dos valores enteros dados están
en el rango 50..99 (inclusive). Devuelve verdadero si alguno de ellos está en dicho
rango
*/

n1 = prompt("Introduce un número: ")
n2 = prompt("Introduce otro número: ")

rango = false;

if (( n1 >= 50 && n1 <= 99)||( n2 >= 50 && n2 <= 99))
    rango = true

alert(rango)

