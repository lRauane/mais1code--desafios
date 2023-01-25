function VerificarString(parametroA, parametroB) {
 if(parametroA.substr(-parametroB.length) === parametroB){
  return true
 } else{
  return false
 }
}

console.log(solution('abc', 'bc'))
console.log(solution('abc', 'd'))