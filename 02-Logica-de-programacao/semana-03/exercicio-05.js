// 5) Crie um array de objetos, onde cada objeto representa um aluno com 
// propriedades como nome e notas (um array de notas). 
// Use um laço for...of para iterar sobre o array de alunos e, para cada aluno,
// use um laço for para calcular a média de suas notas. 
// Exiba o nome do aluno e sua média no console.

let alunos = [
    { nome: "Mariana", notas: { nota1: 9, nota2: 8, nota3: 10 }},
    { nome: "Carlos", notas: { nota1: 7, nota2: 6, nota3: 8 }},
    { nome: "Ana", notas: { nota1: 8, nota2: 9, nota3: 7 }},
    { nome: "João", notas: { nota1: 5, nota2: 6, nota3: 6 }},
    { nome: "Fernanda", notas: { nota1: 9, nota2: 10, nota3: 8 }},
    { nome: "Lucas", notas: { nota1: 7, nota2: 7, nota3: 9 }},
    { nome: "Bianca", notas: { nota1: 6, nota2: 8, nota3: 7 }},
    { nome: "Mateus", notas: { nota1: 5, nota2: 5, nota3: 6 }},
    { nome: "Clara", notas: { nota1: 10, nota2: 9, nota3: 10 }},
    { nome: "Gabriel", notas: { nota1: 6, nota2: 7, nota3: 8 }}
];

for (let iteracao of alunos) {
    console.log(`${iteracao.nome} | Média: (${((iteracao.notas.nota1 + iteracao.notas.nota2 + iteracao.notas.nota3) / Object.keys(iteracao.notas).length).toFixed(2)})`)
}