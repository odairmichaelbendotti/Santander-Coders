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
