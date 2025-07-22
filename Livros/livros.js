class Livro{
    constructor(id, titulo, autor){
        this.id = id
        this.titulo = titulo
        this.autor = autor
        this.disponivel = true
    }

    emprestar(){
        if (this.disponivel){
            this.disponivel = false;
            return false;
        }
        return true
    }

    devolver(){
        this.disponivel = true
    }
}

class Biblioteca{
    constructor(){
        this.livros = [];
        this.proximoId = 1;
    }

    cadastrarLivro(titulo, autor) {
        const livro = new Livro(this.proximoId++, titulo, autor);
        this.livros.push(livro)
    }

    listarLivrosDisponiveis() {
        return this.livros.filter(livro => livro.disponivel);
    }

    listarLivrosEmprestados(){
        return this.livros.filter(livro => !livro.disponivel)
    }

    emprestarLivro(id) {
        const livro = this.livros.find(livro => livro.id === id);
        return livro?.emprestar() ?? false;
    }

    devolverLivro(id){
        const livro = this.livros.find(livro => livro.id === id);
        livro?.devolver();
    }

}

const biblioteca = new Biblioteca();

biblioteca.cadastrarLivro("Dom casmurro", "Machado de Assis")
biblioteca.cadastrarLivro("Código limpo", "Robert C. Martin")

console.log("Disponiveis", biblioteca.listarLivrosDisponiveis());

biblioteca.emprestarLivro(1);

console.log("Emprestados: ", biblioteca.listarLivrosEmprestados());

biblioteca.devolverLivro(1);

console.log("Disponiveis", biblioteca.listarLivrosDisponiveis());








