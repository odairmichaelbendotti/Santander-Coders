let feedbacks = ['ruim', 'pessimo', 'regular', 'bom', 'otimo']

function verificarFeedbackValido(valor) {
    const texto = valor.toLowerCase()

    if (feedbacks.includes(texto)){
        console.log(texto + ': Valor válido.')
    } else {
        console.log(':valor inválido, digite novamente.')
    }
}

const teste = verificarFeedbackValido('pessimo')