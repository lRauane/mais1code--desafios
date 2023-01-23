function trimestreMes(mes) {
  const meses = {
      1: "Janeiro",
      2: "Fevereiro",
      3: "Março",
      4: "Abril",
      5: "Maio",
      6: "Junho",
      7: "Julho",
      8: "Agosto",
      9: "Setembro",
      10: "Outubro",
      11: "Novembro",
      12: "Dezembro",
    }

  const trimestre = 0;

  switch(mes){
    case 1:
      console.log(`${mes} --> ${meses[1]} (${mes}) eh do ${trimestre + 1} trimestre`)
    break;
    case 2:
      console.log(`${mes} --> ${meses[2]} (${mes}) eh do ${trimestre + 1} trimestre`)
    break;
    case 3:
      console.log(`${mes} --> ${meses[3]} (${mes}) eh do ${trimestre + 1} trimestre`)
    break;
    case 4:
      console.log(`${mes} --> ${meses[4]} (${mes}) eh do ${trimestre + 2} trimestre`)
    break;
    case 5:
      console.log(`${mes} --> ${meses[5]} (${mes}) eh do ${trimestre + 2} trimestre`)
    break;
    case 6:
      console.log(`${mes} --> ${meses[6]} (${mes}) eh do ${trimestre + 2} trimestre`)
    break;
    case 7:
      console.log(`${mes} --> ${meses[7]} (${mes}) eh do ${trimestre + 3} trimestre`)
    break;
    case 8:
      console.log(`${mes} --> ${meses[8]} (${mes}) eh do ${trimestre + 3} trimestre`)
    break;
    case 9:
      console.log(`${mes} --> ${meses[9]} (${mes}) eh do ${trimestre + 3} trimestre`)
    break;
    case 10:
      console.log(`${mes} --> ${meses[10]} (${mes}) eh do ${trimestre + 4} trimestre`)
    break;
    case 11:
      console.log(`${mes} --> ${meses[11]} (${mes}) eh do ${trimestre + 4} trimestre`)
    break;
    case 12:
      console.log(`${mes} --> ${meses[12]} (${mes}) eh do ${trimestre + 4} trimestre`)
    break;
  }
}

trimestreMes(1)
trimestreMes(5)
trimestreMes(7)
trimestreMes(12)
