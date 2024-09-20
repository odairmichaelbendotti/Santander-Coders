class Livro {
    // Definindo os tipos para os atributos
    titulo: string = "";
    autor: string = "";
    categoria: string = "";
    numeroPaginas: number = 0;
    disponivel: boolean = true;
    ativo: boolean = true;
  
    definirPropriedades(titulo: string, autor: string, categoria: string, numeroPaginas: number): void {
      this.titulo = titulo;
      this.autor = autor;
      this.categoria = categoria;
      this.numeroPaginas = numeroPaginas;
    }
  
    // Método para exibir os detalhes do livro
    exibirDetalhes(): void {
      console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Categoria: ${this.categoria}, Páginas: ${this.numeroPaginas}`);
    }
  
    // Método para emprestar o livro
    emprestarLivro(): void {
      if (this.disponivel) {
        this.disponivel = false;
        console.log(`O livro '${this.titulo}' foi emprestado.`);
      } else {
        console.log(`O livro '${this.titulo}' não está disponível.`);
      }
    }
  
    // Método para verificar disponibilidade
    consultarDisponibilidade(): string {
      return this.disponivel ? "Disponível" : "Indisponível";
    }
  
    // Método para remover o livro (desativá-lo)
    removerLivro(): void {
      this.ativo = false;
      console.log(`O livro '${this.titulo}' foi removido do sistema.`);
    }
  
    // Método para devolver o livro e torná-lo disponível novamente
    removerEmprestimo(): void {
      if (!this.disponivel) {
        this.disponivel = true;
        console.log(`O livro '${this.titulo}' está novamente disponível.`);
      } else {
        console.log(`O livro '${this.titulo}' não estava emprestado.`);
      }
    }
  }
  
  // Exemplo de uso
  const livro1 = new Livro();
  livro1.definirPropriedades("O Senhor dos Anéis", "J.R.R. Tolkien", "Fantasia", 1178); // Definindo as propriedades do livro
  livro1.exibirDetalhes();  // Exibe os detalhes do livro
  livro1.emprestarLivro();  // Realiza o empréstimo
  console.log(livro1.consultarDisponibilidade());  // Verifica disponibilidade
  livro1.removerEmprestimo();  // Devolve o livro
  