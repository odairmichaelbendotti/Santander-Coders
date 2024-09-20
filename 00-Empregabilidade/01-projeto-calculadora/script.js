let visor = document.getElementById('resultado');

function limparVisor() {
  visor.value = '';
}

function adicionarValor(valor) {
  visor.value += valor;
}

function adicionarOperacao(operacao) {
  visor.value += ` ${operacao} `;
}

function calcular() {
  try {
    visor.value = eval(visor.value.replace(',', '.').replace('÷', '/').replace('×', '*'));
    visor.value = visor.value.replace('.', ',');
  } catch (e) {
    visor.value = 'Erro';
  }
}
