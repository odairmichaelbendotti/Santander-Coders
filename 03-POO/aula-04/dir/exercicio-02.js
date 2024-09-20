"use strict";
class Produto {
    constructor(nome, preco, quantidade) {
        this._nome = nome;
        this._preco = preco;
        this._quantidade = quantidade;
    }
    reportEstoque(qtd) {
        if (qtd > 0) {
            this._quantidade += qtd;
            console.log(`${qtd} adicionado(s) ao estoque.`);
        }
        else {
            console.log(`A quantidade deve ser maior do que 0.`);
        }
    }
    baixarEstoque(qtd) {
        if (this._quantidade < qtd) {
            console.log(`Você possui ${this._quantidade} itens no estoque e não pode subtrair um valor maior do que esse.`);
        }
        else if (qtd < 0) {
            console.log('Informe um valor positivo.');
        }
        else {
            console.log(`${qtd} itens baixados do estoque.`);
            this._quantidade -= qtd;
        }
    }
    valorTotal() {
        console.log(`Você possui um montante de R$${this._quantidade * this._preco} em estoque`);
    }
    resumo() {
        console.log(`Produto: ${this._nome} - Valor unit: R$${this._preco} - Qtd: ${this._quantidade} Total: R$${this._preco * this._quantidade}`);
    }
}
const produto1 = new Produto('Limão', 1.5, 0);
produto1.reportEstoque(20);
produto1.baixarEstoque(19);
produto1.valorTotal();
produto1.resumo();
