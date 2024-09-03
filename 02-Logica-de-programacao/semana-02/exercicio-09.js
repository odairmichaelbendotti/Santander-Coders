const readline = require('readline-sync');

let usuarioCorreto = "admin";
let senhaCorreta = "12345";

let usuario = readline.question("Insira seu nome de usuário: ");
let senha = readline.question("Insira sua senha: ", { hideEchoBack: true });

if (usuario === usuarioCorreto && senha === senhaCorreta) {
    console.log("Login bem-sucedido!");
} else {
    console.log("Nome de usuário ou senha incorretos.");
}
