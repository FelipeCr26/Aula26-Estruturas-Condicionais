//if / else if
//se /senão se

const numeromes = Number(prompt('Informe o número do mês'))

//verifica se numeromes for 1, então o mês é janeiro
//senão, verifica se numeromes for 2, então o mês é fevereiro.
//senão, verifica se numeromes for 3, então o mês é março.

let nomemes

// if (numeromes === 1) {
//     nomemes = "Janeiro"
// }
// else if (numeromes === 2) {
//     nomemes = "Fevereiro"
// }
// else if (numeromes === 3) {
//     nomemes = "Março"
// }
// else if (numeromes === 4) {
//     nomemes = "Abril"
// }
// else if (numeromes === 5) {
//     nomemes = "Maio"
// }
// else if (numeromes === 6) {
//     nomemes = "Junho"
// }
// else if (numeromes === 7) {
//     nomemes = "Julho"
// }
// else if (numeromes === 8) {
//     nomemes = "Agosto"
// }
// else if (numeromes === 9) {
//     nomemes = "Setembro"
// }
// else if (numeromes === 10) {
//     nomemes = "Outubro"
// }
// else if (numeromes === 11) {
//     nomemes = "Novembro"
// }
// else if (numeromes === 12) {
//     nomemes = "Dezembro"
// }
// else {
//     nomemes = "Inválido"
// }


//switch case

switch (numeromes) {
    case 1:
        nomemes = "Janeiro"
        break;
    case 2:
        nomemes = "Fevereiro"
        break;
    case 3:
        nomemes = "Março"
        break;
    case 4:
        nomemes = "Abril"
        break;
    case 5:
        nomemes = "Maio"
        break;
    case 6:
        nomemes = "Junho"
        break;
    case 7:
        nomemes = "Julho"
        break;
    case 8:
        nomemes = "Agosto"
        break;
    case 9:
        nomemes = "Setembro"
        break;
    case 10:
        nomemes = "Outubro"
        break;
    case 11:
        nomemes = "Novembro"
        break;
    case 12:
        nomemes = "Dezembro"
        break;

    default:
        nomemes = "Mês Inválido"
        break;
}

document.body.appendChild(document.createTextNode(nomemes))