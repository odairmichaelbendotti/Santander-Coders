let vetor = [1, 2, 8, 9, 6]
let soma = 0

function somaVetor() {
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i]
    }
}

somaVetor()
console.log("A soma é " + soma)