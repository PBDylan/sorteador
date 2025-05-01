// Função para pegar parâmetros da URL
function getURLParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Pega os números sorteados da URL
let sorteados = getURLParameter("nums");

// Se houver números na URL, exibe eles
if (sorteados) {
  let numerosSorteados = sorteados.split(",");
  document.querySelector(".number h1").textContent = numerosSorteados.join(" ");
} else {
  // Caso não haja números, exibe uma mensagem de erro
  document.querySelector(".number h1").textContent =
    "Erro ao carregar o sorteio.";
}

/////////Voltando a página principal////////////
const returnButton = document.getElementById("return");

returnButton.addEventListener("click", () => {
  window.history.back();
});
