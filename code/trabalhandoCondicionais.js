console.log("Trabalhando com Condicionais");
var readlineSync = require('readline-sync');

const listaDestinos = new Array(
    `Goiânia`,
    `São paulo`,
    `Rio de janeiro`);
listaDestinos.push(`Iporá`); //adicionando um item na lista

let sairPrograma = false;

while (sairPrograma == false) {
    let idadeComprador = readlineSync.question('Qual a sua idade? ');
    if (idadeComprador > 18) {
        console.log("Comprador Maior de Idade, segue a lista de cidades.")
        listaDestinos.splice([listaDestinos.values - 1], 1); //retirar o primeiro item
        console.log(listaDestinos);
        listaDestinos.splice([listaDestinos.values - 2], 1); //retirar o segundo item
        console.log(listaDestinos);
        listaDestinos.splice([listaDestinos.values - 3], 1); //retirar o terneiro item
        console.log(listaDestinos);
    } else {
        console.log("Comprador é Menor de idade, não será apresentado a lista de cidades.")
    }
    sairPrograma = readlineSync.question('Deseja encerrar? 1-yes ou 0-No: ');
    if (sairPrograma == 1) {
        sairPrograma = true;
    } else {
        sairPrograma = false;
    }
}
