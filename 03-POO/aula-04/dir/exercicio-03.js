"use strict";
class Musica {
    constructor(titulos, artista, duracao) {
        this._titulos = titulos;
        this._artista = artista;
        this._duracao = duracao;
    }
    reproduzir() {
        console.log(`Reproduzindo ${this._titulos}`);
    }
    pausar() {
        console.log(`${this._titulos} pausada`);
    }
    obterDuracaoEmMinutos() {
        const minutos = ((Math.trunc(this._duracao / 60) < 10 ? `0${Math.trunc(this._duracao / 60)}` : Math.trunc(this._duracao / 60)));
        const segundos = ((this._duracao % 60) < 10 ? `0${this._duracao % 60}` : this._duracao % 60);
        console.log(`Duração: ${minutos}:${segundos}`);
    }
}
const musica1 = new Musica('Bola de fogo', 'Odair', 301);
musica1.reproduzir();
musica1.pausar();
musica1.obterDuracaoEmMinutos();
