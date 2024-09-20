

class ContaBancaria {
    private _saldo: number
    private _numeroConta: string

    constructor(_numeroConta: string, _saldo: number){
        this._saldo = _saldo
        this._numeroConta = _numeroConta
    }

    depositar(valor: number ): void {
        if ( valor < 0 ) {
            this._saldo =+ valor
        } else {
            console.log('Impossível adicionar um valor igual ou menor do que 0.')
        }
    }

    sacar(valor: number): void{
        if (valor < 0 ) {
            this._saldo -= valor
        }
    }

    consultarSaldo(): number{
        return this._saldo
    }

    obterNumeroConta(): string{
        return this._numeroConta
    }
}

const conta1 = new ContaBancaria ('123456-7', 0)
conta1.depositar(500)