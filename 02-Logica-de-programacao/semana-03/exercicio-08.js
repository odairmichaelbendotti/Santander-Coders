// 8) Escreva um loop para calcular o fatorial de um número fornecido.

console.time('time: ')

let numero = 6
let fatorial = 1

for (let i = numero; i > 0; i--){
    fatorial *= i
}

console.log(`O fatorial é ${fatorial}`)

console.timeEnd('time: ')