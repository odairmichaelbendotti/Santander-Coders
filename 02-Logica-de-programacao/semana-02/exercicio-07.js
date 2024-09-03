const readline = require('readline-sync');

let peso = parseFloat(readline.question("Insira seu peso (em kg): "));
let altura = parseFloat(readline.question("Insira sua altura (em metros): "));

let imc = peso / (altura * altura);
let classificacao;

if (imc < 18.5) {
    classificacao = "Abaixo do peso";
} else if (imc >= 18.5 && imc < 24.9) {
    classificacao = "Peso normal";
} else if (imc >= 25 && imc < 29.9) {
    classificacao = "Sobrepeso";
} else {
    classificacao = "Obesidade";
}

console.log("Seu IMC é " + imc.toFixed(2) + ". Classificação: " + classificacao);
