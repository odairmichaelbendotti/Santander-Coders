const contatos = [
    { nome: 'Odair Michael Bendotti', email: 'obendotti@gmail.com' },
    { nome: 'João Carlos Silva', email: 'jcarlos@gmail.com' },
    { nome: 'Renato Ruan', email: 'renator@hotmail.com' }
];

contatos.forEach(contato => {
    console.log(`console: ${contato.nome} (${contato.email})`);
    console.log(`get: ${contatos.find(c => c.nome === 'Odair Michael Bendotti').email}`);
});
