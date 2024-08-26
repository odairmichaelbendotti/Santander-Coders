let pacientes = [
    'Bento Raimundo Cavalcantio',
    'Oliver Samuel Cardoso',
    'Geraldo Ryan Danilo Carvalho',
    'Isis Tatiane Sophie Santos',
    'Clarice Esther Moraes',
]

function retornarPosicao (paciente) {
    let resultado = pacientes.indexOf(paciente)

    if ( resultado > 0 ) {
        return `${paciente} é o/a n ${resultado + 1} da lista.`
    } else { 
        return 'Registro não encontrado.'
    }
}

console.log(retornarPosicao('Clarice Esther Moraes'))