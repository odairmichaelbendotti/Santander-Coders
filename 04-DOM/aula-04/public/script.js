
const dados = []

const addNewFeature = document.querySelector('#add').addEventListener('click', () => {
    const atividade = document.querySelector('#atividade').value
    const prioridade = document.querySelector('#selecionar').value

    if (!atividade) {
        alert('O campo de atividade está vazio')
        return
    }

    dados.push({
        "id": dados.length + 1,
        "atividade": atividade,
        "prioridade": prioridade,
        "status": "iniciada"
    })

        const novaAtividade = document.createElement('div')
        novaAtividade.classList.add('w-full', 'h-16', 'border-[1px]', 'rounded-lg', 'px-2', 'container-feature')

        let corPrioridade;
        switch(prioridade) {
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
        <div class="w-20 h-2 ${corPrioridade} style="margin-top: 5px;"></div>
        <div class="w-full h-10 mt-2 flex p-[2px]">
            <div class="flex flex-1 h-full w-full items-center text-sm container-feature">
                <p>${atividade}</p>
            </div>
            <div class="h-full w-9 flex flex-col icons-class">
                <i class="fa-solid fa-trash"></i>
                <i class="fa-solid fa-check"></i>
            </div>
        </div>
            `

    document.querySelector('#containerAtividades').appendChild(novaAtividade)
    document.querySelector('#atividade').value = ''
    document.querySelector('#selecionar').value = 'normal'
})

