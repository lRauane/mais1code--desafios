function divisivel(x, y, z) {
  if(x % y === 0 && x % z === 0){
    return true
  } else{
     return false
  }
}

console.log(divisivel(3, 1, 3))
console.log(divisivel(12, 2, 6) )// true
console.log(divisivel(100, 5, 3)) // false
console.log(divisivel(12, 7, 2) )// false
console.log(divisivel(13, 4, 5) )// false