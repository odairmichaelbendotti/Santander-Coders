const produtos = new Map()

produtos.set('Smartphone', 8900)
produtos.set('Cadeira', 1100)
produtos.set('Relógio', 3500)
produtos.set('Curso Inglês', 2335)

produtos.forEach((preco, produto) => {
    console.log(`console: ${produto} sendo ofertado/a por R$${preco}`)
    console.log(`get: ${produtos.get('Relógio')}`)
})

