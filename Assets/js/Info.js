function mostrarRegras() {
  console.log(
    "REGRAS:\n\n",
    " 1. A bola rebate nas laterais do campo, invertendo a direção.\n\n",
    " 2. Ao bater nas raquetes, a bola é rebatida com efeito, indo para o sentido oposto.\n\n",
    " 3. Quando a bola ultrapassa a linha do adversário:\n\n",
     "  3.1 O jogador adversário ganha 1 ponto.\n\n",
     "  3.2 A bola é centralizada novamente, indo para o jogador que marcou o ponto.\n\n",
    " 4. Quando um jogador atingir 5 de vantagem, o jogo é reiniciado\n\n",
     "  4.1 Se o jogador com a vantagem for o computador, sua velocidade é diminuida em -0,5 da sua velocidade atual (ele inicia em velocidade: 3)\n\n",
     "  4.2 Se o jogador com a vantagem for o jogador 1(Você), a velocidade do jogador 2 (computador) é aumentada em +0,5 da sua velocidade inicial (sendo 20 sua velocidade limite)\n\n",

  );
}


document
  .getElementById("botao-regras")
  .addEventListener("click", mostrarRegras);


