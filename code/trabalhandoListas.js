console.log("Trabalhando com Listas");
const listaDestinos = new Array(
    `Goiânia`,
    `São paulo`,
    `Rio de janeiro`);
listaDestinos.push(`Iporá`); //adicionando um item na lista
console.log(listaDestinos);

listaDestinos.splice([listaDestinos.values-1],1); //retirar o primeiro item
console.log(listaDestinos);
listaDestinos.splice([listaDestinos.values-2],1); //retirar o segundo item
console.log(listaDestinos);
listaDestinos.splice([listaDestinos.values-3],1); //retirar o terneiro item
console.log(listaDestinos);

