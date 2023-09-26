var h1 = document.createElement("h1");
h1.id = "mensagem";
h1.textContent = "msg base";


document.body.appendChild(h1);

var horaAtual = new Date().getHours();
if (horaAtual >= 6 && horaAtual <= 11) {
  document.getElementById("mensagem").textContent = "Bom dia!";
} else if (horaAtual === 12) {
  document.getElementById("mensagem").textContent = "Hora do Almoço!";
} else if (horaAtual >= 13 && horaAtual <= 17) {
  document.getElementById("mensagem").textContent = "Boa tarde!";
} else if (horaAtual >= 18 && horaAtual <= 23) {
  document.getElementById("mensagem").textContent = "Boa noite!";
} else if (horaAtual === 0) {
  document.getElementById("mensagem").textContent = "Não disse que ia dormir mais cedo hoje?";
} else if (horaAtual >= 1 && horaAtual <= 5) {
  document.getElementById("mensagem").textContent = "Não está na Netflix, está?";
}