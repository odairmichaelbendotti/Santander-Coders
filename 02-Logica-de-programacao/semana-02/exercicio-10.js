const readline = require('readline-sync');

let numero = parseInt(readline.question("Insira um numero: "), 10);

if (numero % 2 === 0) {
    console.log("O número " + numero + " é par.");
} else {
    console.log("O número " + numero + " é ímpar.");
}
