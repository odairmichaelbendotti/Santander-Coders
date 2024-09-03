const prompt = require('readline-sync')

let num1 = parseFloat(prompt.question("Insira o primeiro numero:"))
let num2 = parseFloat(prompt.question("Insira o segundo numero:"))
let num3 = parseFloat(prompt.question("Insira o terceiro numero:"))

let maior;

if (num1 >= num2 && num1 >= num3) {
    maior = num1;
} else if (num2 >= num1 && num2 >= num3) {
    maior = num2;
} else {
    maior = num3;
}

console.log("O maior número é: " + maior);
