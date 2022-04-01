var name = prompt("Qual o seu nome?");
var age = prompt("Quantos anos você tem?");
var code = prompt("Qual linguagem de programação você está estudando?");
const msg = `Olá ${name}, você tem ${age} anos e já está aprendendo ${code}!`;
alert(msg);

var like = prompt(`Você gosta de estudadr ${code}? Responda com o número 1 para SIM ou 2 para NÃO`);
if (like == 1) {
  alert("1 > Muito Bom! Continue estudando e você terá muito sucesso.")
} else if (like == 2) {
  alert("2 > Ahh que pena... Já tentou aprender outras linguagens?")
} else {
  alert("Opção inválida!")
};
