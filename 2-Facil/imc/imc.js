function calcularImc(peso, altura) {
  const imc = parseFloat(peso / Math.pow(altura, 2))

  if (imc < 18.5) {
    console.log("Abaixo do peso")
  } else if (imc >= 18.5 && imc <= 25) {
    console.log("peso normal")
  } else if (imc >= 25 && imc <= 30) {
    console.log("Acima do peso")
  } else if (imc >= 30 && imc <= 40) {
    console.log("Obeso")
  } else {
    console.log("Obesidade grave")
  }
  
  return imc.toFixed(1)
}

console.log(calcularImc(90, 1.80))
console.log(calcularImc(78, 1.60))
console.log(calcularImc(62, 1.60))
console.log(calcularImc(120, 1.59))


