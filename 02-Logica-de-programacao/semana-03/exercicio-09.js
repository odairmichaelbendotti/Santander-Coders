//1) Implemente uma função encadeamentoFuncoes que aceita um número como entrada 
//e encadeia as seguintes operações: dobrar, subtrair 5 e então elevar ao quadrado.
// A função deve retornar o resultado final.

const dobrar = (numero) => numero * 2
const subtrair = (numero) => numero - 5
const quadrado = (numero) => numero * numero

const encadeamentoFuncoes = (numero) => {
    return quadrado(subtrair(dobrar(numero)))
}

console.log(encadeamentoFuncoes(10))