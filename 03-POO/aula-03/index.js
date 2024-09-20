var Livro = /** @class */ (function () {
    function Livro() {
        // Definindo os tipos para os atributos
        this.titulo = "";
        this.autor = "";
        this.categoria = "";
        this.numeroPaginas = 0;
        this.disponivel = true;
        this.ativo = true;
    }
    Livro.prototype.definirPropriedades = function (titulo, autor, categoria, numeroPaginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.categoria = categoria;
        this.numeroPaginas = numeroPaginas;
    };
    // Método para exibir os detalhes do livro
    Livro.prototype.exibirDetalhes = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo, ", Autor: ").concat(this.autor, ", Categoria: ").concat(this.categoria, ", P\u00E1ginas: ").concat(this.numeroPaginas));
    };
    // Método para emprestar o livro
    Livro.prototype.emprestarLivro = function () {
        if (this.disponivel) {
            this.disponivel = false;
            console.log("O livro '".concat(this.titulo, "' foi emprestado."));
        }
        else {
            console.log("O livro '".concat(this.titulo, "' n\u00E3o est\u00E1 dispon\u00EDvel."));
        }
    };
    // Método para verificar disponibilidade
    Livro.prototype.consultarDisponibilidade = function () {
        return this.disponivel ? "Disponível" : "Indisponível";
    };
    // Método para remover o livro (desativá-lo)
    Livro.prototype.removerLivro = function () {
        this.ativo = false;
        console.log("O livro '".concat(this.titulo, "' foi removido do sistema."));
    };
    // Método para devolver o livro e torná-lo disponível novamente
    Livro.prototype.removerEmprestimo = function () {
        if (!this.disponivel) {
            this.disponivel = true;
            console.log("O livro '".concat(this.titulo, "' est\u00E1 novamente dispon\u00EDvel."));
        }
        else {
            console.log("O livro '".concat(this.titulo, "' n\u00E3o estava emprestado."));
        }
    };
    return Livro;
}());
// Exemplo de uso
var livro1 = new Livro();
livro1.definirPropriedades("O Senhor dos Anéis", "J.R.R. Tolkien", "Fantasia", 1178); // Definindo as propriedades do livro
livro1.exibirDetalhes(); // Exibe os detalhes do livro
livro1.emprestarLivro(); // Realiza o empréstimo
console.log(livro1.consultarDisponibilidade()); // Verifica disponibilidade
livro1.removerEmprestimo(); // Devolve o livro
