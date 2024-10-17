async function sortearPokemon() {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=20&limit=200`)

        if (!response.ok) {
            throw new Error('Erro na requisição')
        }
        const data = await response.json()

        const infos = []

        data.results.forEach(item => {
            infos.push({ name: item.name, url: item.url })
        })

        const pokemon = (infos[Math.floor(Math.random() * (infos.length))])

        const pokemonResponse = await fetch(pokemon.url)
        const pokemonData = await pokemonResponse.json()

        const pokeData = {
            pokemonSorteado: pokemon.name,
            pokemonImg: pokemonData.sprites.other["dream_world"].front_default
        }

        return pokeData

    } catch (error) {
        console.log(error)
    }
}

async function selecionarDados () {
    const pokemon = await sortearPokemon()

    const imgPokemon = document.querySelector('#pokeImg')
    imgPokemon.src = pokemon.pokemonImg

    const pokeName = document.querySelector('#pokeName')
    pokeName.innerText = pokemon.pokemonSorteado

    const unders = pokemon.pokemonSorteado
    const letters = unders.split('')
    console.log(letters.length)

    const encontrar = document.querySelector('.encontrar')

    letters.forEach(item => {
        const novoCard = document.createElement('div')
        const letterElement = document.createElement('p')
        letterElement.innerText = item

        novoCard.appendChild(letterElement)

        novoCard.setAttribute('data-letra', item)
        novoCard.classList.add(`card-letter`,`${item}`)
        encontrar.appendChild(novoCard)

        novoCard.addEventListener('click', () => {
            handleShow(item)
            letterElement.style.opacity = 100
        })
    });
}

selecionarDados()

function handleShow(item){
    
}