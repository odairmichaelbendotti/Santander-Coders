"use strict";
class ContaBancaria {
    constructor(_numeroConta, _saldo) {
        this._saldo = _saldo;
        this._numeroConta = _numeroConta;
    }
    depositar(valor) {
        if (valor < 0) {
            this._saldo = +valor;
        }
        else {
            console.log('Impossível adicionar um valor igual ou menor do que 0.');
        }
    }
    sacar(valor) {
        if (valor < 0) {
            this._saldo -= valor;
        }
    }
    consultarSaldo() {
        return this._saldo;
    }
    obterNumeroConta() {
        return this._numeroConta;
    }
}
const conta1 = new ContaBancaria('123456-7', 0);
conta1.depositar(500);
