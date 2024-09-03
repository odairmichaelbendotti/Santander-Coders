// 2) Crie uma função que calcule a média de um array de números.

let numeros = [1, 5, 6, 7, 9, 11]

function calcularMedia() {
    let media = 0
    for (let i = 0; i < numeros.length; i++) {
        media += numeros[i]
    }

    return (media / numeros.length).toFixed(2)
}

let resultado = calcularMedia()
console.log(resultado)