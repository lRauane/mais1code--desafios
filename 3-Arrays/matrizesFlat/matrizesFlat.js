function matrizesFlat(lista){
  let arrayUnic = [ ]
  for (let i = 0; i < lista.length; i++) {
    arrayUnic = arrayUnic.concat(lista[i])
  }
  return arrayUnic
  
  
  // return [].concat(...lista)
}

console.log(matrizesFlat([[1, 2,3], [4,5,6], [7,8,9]]))