// 3) Escreva um programa que, dada uma string, conte o número de vogais nela.

function contarVogal(string) {
    let contador = 0

    for (let i = 0; i < string.length; i++) {
        let char = string[i].toLowerCase()

        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            contador++
        }
    }
    return `Total de ${contador} vogais`
}

let vogais = contarVogal('ola')
console.log(vogais)