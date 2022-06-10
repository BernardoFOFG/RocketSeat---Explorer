const elementoResposta = document.querySelector("#resposta");
const inputPergunta = document.querySelector("#input-question");
const buttonPergunta = document.querySelector("#btn-question");
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minha fontes dizem que não.",
  "Provavelmente.",
  "Não é possivel prever isso agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
  "Não.",
];

/* for (i = 0; i < resposta.length; i++) {
  console.log(resposta[i]);
}*/

function fazerPergunta() {
  if (inputPergunta == null || undefined || "") {
    alert("Digite sua pergunta");
    return;
  }
  buttonPergunta.setAttribute("disabled", true);
  const pergunta = "<div>" + inputPergunta.value + "</div>";
  const numeroAleatorio = Math.floor(Math.random() * respostas.length);
  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio];
  elementoResposta.style.opacity = 1;
  // sumir a resposta
  setTimeout(function () {
    buttonPergunta.removeAttribute("disabled");
    elementoResposta.style.opacity = 0;
  }, 1000);
}
