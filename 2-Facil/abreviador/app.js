function abreviarNome(nome){
  var index = nome.length - 1;

  var listaIndex = [nome[0]];
  for(var i = 0; i <= index; i++){
      if (nome[i] == " "){
          listaIndex.push(nome[i+1]);
      }
  }
  return listaIndex.map((e)=>e.toUpperCase()).join(".");
};

console.log(abreviarNome("Matheus Messora"))
console.log(abreviarNome("joao da silva"))
console.log(abreviarNome("AMANDA COSTA MEDEIROS"))
console.log(abreviarNome("paulo"))