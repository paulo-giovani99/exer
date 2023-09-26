function gerarDiv() {
    var livro = document.getElementById("livro").value;
    var autor = document.getElementById("autor").value;
    var paginas = document.getElementById("paginas").value;
    var pais = document.getElementById("pais").value;

    var divLivro = document.createElement("div");

    var titulo = document.createElement("h2");
    titulo.textContent = livro;
    divLivro.appendChild(titulo);

    var nomeAutor = document.createElement("h3");
    nomeAutor.textContent = autor;
    divLivro.appendChild(nomeAutor);

    var numPaginas = document.createElement("p");
    numPaginas.textContent = "Número de Páginas: " + paginas;
    divLivro.appendChild(numPaginas);

    var paisLancamento = document.createElement("p");
    paisLancamento.textContent = "País de Lançamento: " + pais;
    divLivro.appendChild(paisLancamento);

    document.getElementById("livroDiv").appendChild(divLivro);
  }