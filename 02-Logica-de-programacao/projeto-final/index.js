

const readline = require('readline-sync')

let listaToDo = [
    { posicao: 0, atividade: 'Comprar pão' },
    { posicao: 1, atividade: 'Comprar carne' }
]
let acao

console.log(`
    Digite "add" para adicionar uma nova atividade;
    Digite "remover" para remover uma atividade;
    Digite "editar" para editar uma atividade;
    Digite "listar" para listar todas as atividades;
    Digite "atividade" para listar uma atividade específica;
    Digite "sair" para sair do programa.
    `)

    function atualizarPosicao() {
        for (i = 0; i < listaToDo.length; i++) {
            listaToDo[i].posicao = i
        }
    }

while (acao !== "sair") {
    acao = readline.question('Acao que sera executada: ')

    //Adicionar novas atividades
    if (acao === "add") {
        const add = readline.question('Indique qual atividade voce deseja inserir: ')
        listaToDo.push({
            posicao: listaToDo.length,
            atividade: add
        })

    //Listar atividades do array
    } else if (acao === "listar") {
        console.log(listaToDo)

    //Mostrar uma atividade específica, solicitada pelo ID
    } else if (acao === "atividade") {
        console.log(listaToDo)
        const indice = readline.question("Informe o id da atividade a ser apresentada: ")
        const atividadePelaPosicao = listaToDo.findIndex(tarefa => {
            return tarefa.posicao == indice
        })
        console.log(listaToDo[Number(atividadePelaPosicao)].atividade)

    //Remover atividade    
    } else if (acao === "remover") {
        const indice = Number(readline.question('Informe a posicao da tarefa que sera deletada: '))
        if (indice >= 0 && indice < listaToDo.length ){
            listaToDo.splice(indice, 1)
            atualizarPosicao()
        }
    } else if (acao === "editar") {

        if (listaToDo.length === 0) {
            console.log('Sua lista está vazia.')
        } else {
            const indice = Number(readline.question('Digite a posicao da tarefa que voce quer editar: '))
            if (indice >= 0 && indice < listaToDo.length) {
                const novaAtividade = readline.question(`Substiruir "${listaToDo[indice].atividade}" por": `)
                listaToDo[indice].atividade = novaAtividade
                console.log(listaToDo)
            } else {
                console.log('Posição inválida.')
            }
        }
        }
    }