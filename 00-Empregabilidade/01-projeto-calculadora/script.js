let visor = document.getElementById('resultado');

// Função para limpar o visor
function limparVisor() {
  visor.value = '';
}

// Função para adicionar valor ao visor
function adicionarValor(valor) {
  if (valor === '0' && visor.value === '0') {
    // Evita múltiplos zeros à esquerda
    return;
  } else {
    visor.value += valor;
  }
}

// Função para adicionar operações (+, -, *, /)
function adicionarOperacao(operacao) {
  const ultimoCaractere = visor.value.slice(-1);

  // Verifica se o último caractere é um operador e substitui se for
  if (['+', '-', '*', '/'].includes(ultimoCaractere)) {
    visor.value = visor.value.slice(0, -1) + ` ${operacao} `;
  } else {
    visor.value += ` ${operacao} `;
  }
}

// Função para realizar o cálculo
function calcular() {
  // Verifica se o visor está vazio antes de calcular
  if (visor.value.trim() === '') {
    visor.value = 'Erro';
  } else {
    try {
      visor.value = eval(visor.value.replace(',', '.').replace('÷', '/').replace('×', '*'));
      visor.value = visor.value.replace('.', ',');
    } catch (e) {
      visor.value = 'Erro';
    }
  }
}

// Funções para executar testes e mostrá-los no console.

function executarTestes() {
  // Teste 1: Verificar se os operadores não são duplicados
  limparVisor();
  adicionarValor('5');
  adicionarOperacao('+');
  adicionarOperacao('*'); // Espera-se que substitua o '+'
  console.assert(visor.value === '5 * ', 'Teste 1 falhou: operadores duplicados não foram evitados');

  // Teste 2: Verificar múltiplos zeros à esquerda
  limparVisor();
  adicionarValor('0');
  adicionarValor('0'); // Espera-se que não adicione outro zero
  adicionarValor('1');
  console.assert(visor.value === '01', 'Teste 2 falhou: múltiplos zeros à esquerda foram permitidos');

  // Teste 3: Verificar cálculo correto
  limparVisor();
  adicionarValor('2');
  adicionarOperacao('+');
  adicionarValor('3');
  calcular();
  console.assert(visor.value === '5', 'Teste 3 falhou: o cálculo foi incorreto');

  // Teste 4: Verificar se o visor vazio exibe "Erro" ao tentar calcular
  limparVisor();
  calcular();
  console.assert(visor.value === 'Erro', 'Teste 4 falhou: cálculo em visor vazio não exibiu erro');
  
  console.log('Todos os testes foram concluídos.');
}

// Executar os testes
executarTestes();
