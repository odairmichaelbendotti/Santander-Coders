const readlineSync = require('readline-sync');

let valor = Number(readlineSync.question('Digite o primeiro numero da serie: '))

for ( let i = 0; i <= valor; i++ ) {
    a = 0 + i
    b = 1 + i 
    c = a + b
    console.log(c)
}