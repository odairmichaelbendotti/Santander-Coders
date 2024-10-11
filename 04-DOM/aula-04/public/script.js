
const dados = []
const finalizados = []
const removidos = []

function verificarLimite() {
    if (dados.length === 6 || finalizados.length === 6 || removidos.length === 6) {
        alert('Para adicionar mais do que seis tarefas, compre a assinatura premium.')
        document.querySelector('#add').classList.add('hidden')
    } else {
        document.querySelector('#add').classList.remove('hidden')
    }
}


const addNewFeature = document.querySelector('#add').addEventListener('click', () => {
    const atividade = document.querySelector('#atividade').value
    const prioridade = document.querySelector('#selecionar').value

    if (!atividade) {
        alert('O campo de atividade está vazio')
        return
    }

    const novoItem = {
        "id": dados.length + 1,
        "atividade": atividade,
        "prioridade": prioridade
    }

    dados.push(novoItem)

    const novaAtividade = document.createElement('div')
    novaAtividade.classList.add('w-full', 'h-16', 'border-[1px]', 'rounded-lg', 'px-2', 'container-feature')
    novaAtividade.setAttribute('data-id', novoItem.id)

    let corPrioridade;
    switch (prioridade) {
        case 'normal':
            corPrioridade = 'bg-green-500'
            break
        case 'moderada':
            corPrioridade = 'bg-yellow-400'
            break
        case 'urgente':
            corPrioridade = 'bg-red-500'
            break
        default:
            corPrioridade = 'bg-gray-300'
    }

    novaAtividade.innerHTML = `
            <div class="w-20 h-2 ${corPrioridade} rounded-lg" style="margin-top: 5px;"></div>
            <div class="w-full h-10 mt-2 flex p-[2px]">
                <div class="flex flex-1 h-full w-full items-center text-sm container-feature">
                    <p>${atividade}</p>
                </div>
                <div class="h-full w-9 flex flex-col icons-class">
                    <i class="fa-solid fa-trash" onClick="removeFeature(${novoItem.id})"></i>
                    <i class="fa-solid fa-check" onClick="addFeature(${novoItem.id})"></i>
                </div>
            </div>
                `

    document.querySelector('#containerAtividades').appendChild(novaAtividade)
    document.querySelector('#atividade').value = ''
    document.querySelector('#selecionar').value = 'normal'

    verificarLimite()
})

function addFeature(id) {
    const info = dados.filter(item => {
        return item.id === id
    })

    const atividadeFinalizada = {
        "id": info[0].id,
        "atividade": info[0].atividade,
        "prioridade": info[0].prioridade
    }

    finalizados.push(atividadeFinalizada)


    const finished = document.createElement('div')
    finished.classList.add('w-full', 'h-16', 'border-[1px]', 'rounded-lg', 'px-2', 'container-feature')

    let corPrioridade;
    switch (info[0].prioridade) {
        case 'normal':
            corPrioridade = 'bg-green-500'
            break
        case 'moderada':
            corPrioridade = 'bg-yellow-400'
            break
        case 'urgente':
            corPrioridade = 'bg-red-500'
            break
        default:
            corPrioridade = 'bg-gray-300'
    }

    finished.innerHTML = `
    
            <div class="w-20 h-2 rounded-lg ${corPrioridade}" style="margin-top: 5px;"></div>
            <div class="w-full h-10 mt-2 flex p-[2px]">
                <div class="flex flex-1 h-full w-full items-center text-sm container-feature">
                    <p>${info[0].atividade}</p>
                </div>
                <div>
                    <i class="fa-solid fa-square-check"></i>
                </div>
            </div>
    `

    document.querySelector('#concluidas').appendChild(finished)

    const index = dados.findIndex(item => {
        return item.id === id
    })

    dados.splice(index, 1)

    const removerElemento = document.querySelector(`[data-id="${id}"]`)
    removerElemento.remove()
    verificarLimite()
}

function removeFeature(id) {

    const index = dados.findIndex(item => {
        return item.id === id
    })

    const removedItem = {
        "id": dados[index].id,
        "atividade": dados[index].atividade,
        "prioridade": dados[index].prioridade
    }

    let corPrioridade;
    switch (removedItem.prioridade) {
        case 'normal':
            corPrioridade = 'bg-green-500'
            break
        case 'moderada':
            corPrioridade = 'bg-yellow-400'
            break
        case 'urgente':
            corPrioridade = 'bg-red-500'
            break
        default:
            corPrioridade = 'bg-gray-300'
    }

    const itensRemovidos = document.querySelector('#removidos')
    const newItem = document.createElement('div')
    newItem.classList.add('w-full', 'h-16', 'border-[1px]', 'rounded-lg', 'px-2', 'container-feature')
    newItem.innerHTML = `
        <div class="w-20 h-2 rounded-lg ${corPrioridade}" style="margin-top: 5px;"></div>
        <div class="w-full h-10 mt-2 flex p-[2px]">
            <div class="flex flex-1 h-full w-full items-center text-sm container-feature">
                <p>${removedItem.atividade}</p>
            </div>
            <div>
                <i class="fa-solid fa-square-xmark"></i>
            </div>
        </div>
    `
    itensRemovidos.appendChild(newItem)

    dados.splice(index, 1)

    const removerElemento = document.querySelector(`[data-id = "${id}"]`)
    removerElemento.remove()
    verificarLimite()
}
