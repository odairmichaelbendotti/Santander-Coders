let vetor = [1, 2, 8, 9, 6]

function maxVetor() {
    let max = vetor[0]
    for (let i = 1; i < vetor.length; i++) {
        if (max < vetor[i]) {
            max = vetor[i]
        }
    }
    return max
}

let resultado = maxVetor()
console.log(resultado)