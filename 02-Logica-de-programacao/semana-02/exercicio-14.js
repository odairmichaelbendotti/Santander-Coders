const readlineSync = require('readline-sync');

let password;
do {
    password = readlineSync.question('Digite a senha: ');
} while (password !== '12345');

console.log('Senha correta!');