function mostrarRegras() {
  console.log(
    "Velocidade do Computador: " +
      velojg2 +
      " | Velocidade da Bola: " +
      velocidadeBolaX,
  );
}

document
  .getElementById("botao-regras")
  .addEventListener("click", mostrarRegras);
