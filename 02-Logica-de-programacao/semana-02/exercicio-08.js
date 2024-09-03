const readline = require('readline-sync');

let temperatura = parseFloat(readline.question("Insira a temperatura: "));
console.log("Escolha a conversão:");
console.log("1: Celsius para Fahrenheit");
console.log("2: Fahrenheit para Celsius");

let escolha = readline.question("Digite o numero da sua escolha: ");

let temperaturaConvertida;

if (escolha === "1") {
    temperaturaConvertida = (temperatura * 9/5) + 32;
    console.log(temperatura + "°C é igual a " + temperaturaConvertida.toFixed(2) + "°F");
} else if (escolha === "2") {
    temperaturaConvertida = (temperatura - 32) * 5/9;
    console.log(temperatura + "°F é igual a " + temperaturaConvertida.toFixed(2) + "°C");
} else {
    console.log("Escolha inválida!");
}
