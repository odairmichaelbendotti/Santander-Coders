class Musica {
    private _titulos: string
    private _artista: string
    private _duracao: number

    constructor(titulos: string, artista: string, duracao: number) {
        this._titulos = titulos
        this._artista  = artista
        this._duracao = duracao
    }

    reproduzir(): void{
        console.log(`Reproduzindo ${this._titulos}`)
    }

    pausar(): void {
        console.log(`${this._titulos} pausada`)
    }

    obterDuracaoEmMinutos(): void {
        const minutos = ((Math.trunc(this._duracao / 60) < 10 ? `0${Math.trunc(this._duracao / 60)}` : Math.trunc(this._duracao / 60)))
        const segundos = ((this._duracao % 60) < 10 ? `0${this._duracao % 60}` : this._duracao % 60)
        console.log(`Duração: ${minutos}:${segundos}`)
    }
}

const musica1 = new Musica('Bola de fogo','Odair', 301)
musica1.reproduzir()
musica1.pausar()
musica1.obterDuracaoEmMinutos()