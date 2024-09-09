const readline = require("readline-sync");

let listaToDo = [
  { posicao: 0, atividade: "Comprar pão" },
  { posicao: 1, atividade: "Comprar carne" },
];

let acao;

function printInstructions() {
  console.log(`
        Digite "ajuda" para ver as instruções;
        Digite "add" para adicionar uma nova atividade;
        Digite "remover" para remover uma atividade;
        Digite "editar" para editar uma atividade;
        Digite "listar" para listar todas as atividades;
        Digite "atividade" para listar uma atividade específica;
        Digite "sair" para sair do programa.
        Digite "limpar" ou "clear" para limpar o console.
        `);
}

function printError(message) {
  // Deixa a mensagem de erro em vermelho
  console.error("\x1b[31m%s\x1b[0m", message);
}

// Lança erro caso o índice seja inválido
function checarIndice(indice) {
  if (indice < 0 || indice >= listaToDo.length || isNaN(indice)) {
    throw new Error("Posição inválida.");
  }
}

function atualizarPosicao() {
  for (i = 0; i < listaToDo.length; i++) {
    listaToDo[i].posicao = i;
  }
}

function listarAtividades() {
  if (!listaToDo.length) {
    printError("Nenhuma atividade foi adicionada ainda.");
  } else {
    console.table(listaToDo, ["atividade"]);
  }
}

function adicionarTarefa() {
  try {
    const add = readline.question(
      "Indique qual atividade voce deseja inserir: "
    );
    listaToDo.push({
      posicao: listaToDo.length,
      atividade: add,
    });
  } catch (error) {
    printError(error.message);
  }
}

function listaPorId() {
  try {
    const indice = Number(
      readline.question("Informe o id da atividade a ser apresentada: ")
    );
    checarIndice(indice);
    console.table([listaToDo[indice]], ["atividade"]);
  } catch (error) {
    printError("Posição inválida.");
  }
}

function editarTarefa() {
  try {
    const indice = Number(
      readline.question("Digite a posicao da tarefa que voce quer editar: ")
    );
    checarIndice(indice);
    const novaAtividade = readline.question(
      `Substituir "${listaToDo[indice].atividade}" por": `
    );
    listaToDo[indice].atividade = novaAtividade;
    console.log(listaToDo);
  } catch (error) {
    printError("Posição inválida.");
  }
}

function removerTarefa() {
  try {
    const indice = Number(
      readline.question("Informe a posicao da tarefa que sera deletada: ")
    );
    checarIndice(indice);
    listaToDo.splice(indice, 1);
    atualizarPosicao();
  } catch (error) {
    printError("Posição inválida.");
  }
}

function limparConsole() {
  console.clear();
}

printInstructions();

while (acao !== "sair") {
  acao = readline.question("Acao que sera executada: ").toLowerCase();

  switch (acao) {
    case "add":
      adicionarTarefa();
      listarAtividades();
      break;
    case "editar":
      listarAtividades();
      editarTarefa();
      break;
    case "remover":
      listarAtividades();
      removerTarefa();
      break;
    case "listar":
      listarAtividades();
      break;
    case "atividade":
      listarAtividades();
      listaPorId();
      break;
    case "sair":
      break;
    case "ajuda":
      printInstructions();
      break;
    case "limpar":
      limparConsole();
      break;
    case "clear":
      limparConsole();
      break;
    default:
      printError("Ação inválida");
  }
}