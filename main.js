var dataAtual = new Date();

var mensagem = document.getElementById("mensagem");


if (dataAtual.getHours() >= 6 && dataAtual.getHours() < 12) {
  mensagem.textContent = "Bom dia!";
} else if (dataAtual.getHours() === 12) {
  mensagem.textContent = "Hora do Almoço!";
} else if (dataAtual.getHours() >= 13 && dataAtual.getHours() < 18) {
  mensagem.textContent = "Boa tarde!";
} else if (dataAtual.getHours() >= 18 && dataAtual.getHours() <= 23) {
  mensagem.textContent = "Boa noite!";
} else if (dataAtual.getHours() === 0) {
  mensagem.textContent = "Não disse que ia dormir mais cedo hoje?";
} else if (dataAtual.getHours() >= 1 && dataAtual.getHours() < 5) {
  mensagem.textContent = "Não está na Netflix, está?";
}
