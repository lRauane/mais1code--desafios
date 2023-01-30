function OrdemAlfabetica(lista) {
  for (let i = 0; i < lista.length - 1; i++) {
    for (let j = i + 1; j < lista.length; j++) {
      if (lista[i].localeCompare(lista[j] > 0)) {
        let temp = lista[i];
        lista[i] = lista[j];
        lista[j] = temp;
      }
    }
  }
  return lista;
}

console.log(OrdemAlfabetica(["Zebra", "Lontra", "Peixe", "Gato"]));
