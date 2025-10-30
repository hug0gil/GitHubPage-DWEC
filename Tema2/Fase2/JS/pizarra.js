dinero = 213

n1 = prompt("Introduce un numero:")
n2 = prompt("Introduce un numero:")
n3 = prompt("Introduce un numero:")

nums = [n1, n2, n3]

cercano = 100

for (i = 0; i < nums.length; i++) {
  anterior = dinero - nums[i]
  console.log(anterior)
  if (anterior < cercano) {
    cercano = anterior
    guardado = nums[i]
  }
}

alert("El más cercano es la persona que ha dicho " + guardado)
