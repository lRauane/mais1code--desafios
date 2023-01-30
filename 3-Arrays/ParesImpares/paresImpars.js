function paresImpares(lista){
  let resultado = [];
  for (let i = 0; i < lista.length; i++) {
    if(lista[i] %2 === 0){
      resultado.push(lista[i])
    }
  }
  for (let i = 0; i < lista.length; i++) {
    if(lista[i] % 2 !== 0){
      resultado.push(lista[i])
    }
  }

  return resultado
}

console.log(paresImpares([1,2,3,4,5]))
console.log(paresImpares([5,3,1,2,6,4]))