var alunos = [];
for (var i = 0; i < 10; i++) {
    var nome = prompt("Digite o nome do aluno " + (i + 1));
    var email = prompt("Digite o email do aluno " + (i + 1));
    var materiaFavorita = prompt("Digite a matéria favorita do aluno " + (i + 1));
    var aluno = {
        nome: nome,
        email: email,
        materiaFavorita: materiaFavorita
    }
    alunos.push(aluno);
}


var mainContainer = document.getElementById("alunos-container");
for (var j = 0; j < alunos.length; j++) {
    var alunoCard = document.createElement("div");
    alunoCard.classList.add("card");
    
    var nomeAluno = document.createElement("h2");
    nomeAluno.textContent = alunos[j].nome;

    var emailAluno = document.createElement("p");
    emailAluno.textContent = "Email: " + alunos[j].email;

    var materiaFavoritaAluno = document.createElement("p");
    materiaFavoritaAluno.textContent = "Matéria Favorita: " + alunos[j].materiaFavorita;

    alunoCard.appendChild(nomeAluno);
    alunoCard.appendChild(emailAluno);
    alunoCard.appendChild(materiaFavoritaAluno);

    mainContainer.appendChild(alunoCard);
}

