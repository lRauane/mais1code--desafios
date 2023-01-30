function MenorNumero(x) {
  let menor = x[0]

  for (let i = 1; i < x.length; i++) {
    if(x[i] < menor){
      menor = x[i]
    }
  }
  return menor
}

console.log(MenorNumero([35, 15, 1])) // 1 
console.log(MenorNumero([1, -10, 5, 6, 333]))