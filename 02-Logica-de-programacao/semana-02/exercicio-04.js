const estudantes = new Map()

estudantes.set('Alice', { idade: 20, nota: 8.5 });
estudantes.set('Bruno', { idade: 22, nota: 9.2 });
estudantes.set('Carla', { idade: 21, nota: 7.8 });
estudantes.set('Daniel', { idade: 23, nota: 8.8 });
estudantes.set('Eduarda', { idade: 20, nota: 9.1 });
estudantes.set('Fernando', { idade: 22, nota: 7.6 });
estudantes.set('Gabriela', { idade: 21, nota: 8.9 });
estudantes.set('Henrique', { idade: 24, nota: 9.4 });
estudantes.set('Isabela', { idade: 20, nota: 8.2 });
estudantes.set('João', { idade: 23, nota: 7.9 });

let maiorNota = 0
let aluno = ''

estudantes.forEach((info, nome) => {
    if (info.nota > maiorNota) {
        maiorNota = info.nota
        aluno = nome
    }
})

console.log(`${aluno} - Idade: ${estudantes.get(aluno).idade}, Nota: ${maiorNota}`)
