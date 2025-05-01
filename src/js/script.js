// Captura os elementos dos inputs
let numeros = document.getElementById("number");
let de = document.getElementById("de");
let ate = document.getElementById("ate");

// Captura o botão de sorteio
const button = document.querySelector(".sort");

button.addEventListener("click", () => {
  // Pega os valores dos inputs
  const quantity = numeros.value; // Agora sempre sorteamos 2 números
  const valorMinimo = parseInt(de.value);
  const valorMaximo = parseInt(ate.value);

  // Limpa os inputs após o clique
  numeros.value = "";
  de.value = "";
  ate.value = "";

  // Verifica se todos os campos foram preenchidos corretamente
  if (isNaN(valorMinimo) || isNaN(valorMaximo)) {
    alert("Por favor, preencha os campos corretamente.");
    return;
  }

  // Gerar números aleatórios dentro do intervalo
  let sorteados = [];
  for (let i = 0; i < quantity; i++) {
    sorteados.push(
      Math.floor(Math.random() * (valorMaximo - valorMinimo + 1)) + valorMinimo
    );
  }

  // Monta a URL com os números sorteados
  const params = new URLSearchParams({
    nums: sorteados.join(","),
  });

  // Redirecionar para sorteado.html passando os números sorteados na URL
  window.location.href = `sorteado.html?${params.toString()}`;
});
