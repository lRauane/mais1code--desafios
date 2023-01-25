function MenorNumero(x) {
  return Math.min(...x)
}

console.log(MenorNumero([35, 15, 1])) // 1 
console.log(MenorNumero([1, -10, 5, 6, 333]))