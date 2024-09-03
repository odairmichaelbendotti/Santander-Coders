// 4) Escreva um programa que use um laço for para imprimir os números de 1 a 100 
//no console, mas substitua os números divisíveis por 3 por "Fizz" 
// e os números divisíveis por 5 por "Buzz". 
// Para números divisíveis por ambos 3 e 5, exiba "FizzBuzz".


for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
