function EncontrarNumero(lista, numero){
  for (let i = 0; i < lista.length; i++) {
    if(lista[i] === numero){
      return numero
    }
  }

  return -1
}

console.log(EncontrarNumero([1, 2, 3, 5, 7], 5)) // 5
console.log(EncontrarNumero([1, 2, 3, 5, 7], 10)) // -1