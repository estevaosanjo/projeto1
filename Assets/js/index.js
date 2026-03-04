window.onload = function () {
  VariaveisJogo(); // Inicializar variáveis do jogo
  setInterval(Principal, 1000 / 60); // 60 quadros por segundo
  informacoesJogo();
};

// Função para mostrar regras do jogo
function informacoesJogo() {
  console.log(
    "Velocidade do Computador: " +
      velojg2 +
      "Velocidade da Bola: " +
      velocidadeBolaX,
  );
}
// Função para centralizar a bola após ponto
function BolaCentro() {
  posicaoBolaX = larguraCampo / 2;
  posicaoBolaY = alturaCampo / 2;
  velocidadeBolaX = -velocidadeBolaX;
  velocidadeBolaY = 3;
}
// Função para desenhar os elementos do jogo
function DesenhoJogo() {

  aread.fillStyle = "#00643e"; // Cor verde campo

  // Campo de jogo
  aread.fillRect(0, 0, larguraCampo, alturaCampo);

  aread.fillStyle = "#ffffff"; // Cor branca p/ elementos

  // Linha central
  aread.fillRect(
    larguraCampo / 2 - larguraLinha / 2,
    0,
    larguraLinha,
    alturaCampo,
  );

  // Raquete 1
  aread.fillStyle = "#ffffff"; // Cor vermelha raquete 1
  aread.fillRect(0, posicaoJogador1, espessuraRaquete, AlturaRaquete);

  // Raquete 2
  aread.fillStyle = "#b30000"; // Cor azul raquete 2
  aread.fillRect(
    larguraCampo - espessuraRaquete,
    posicaoJogador2,
    espessuraRaquete,
    AlturaRaquete,
  );

  // Bola
  aread.fillStyle = "#ffdd00"; // Cor amarela bola
  aread.fillRect(
    posicaoBolaX - tamanhoBola / 2,
    posicaoBolaY - tamanhoBola / 2,
    tamanhoBola,
    tamanhoBola,
  );

  // Pontuação dos jogadores
  aread.fillStyle = "#ffffff";
  aread.font = "12px Sans-Serif";
  aread.fillText("Você -  " + pontuacaoJg1 + " pontos", 90, 50);
  aread.fillText(
    "Computador -  " + pontuacaoJg2 + " pontos   ",
    larguraCampo - 210,
    50,
  );
  
}
// Função para inicializar as variáveis do jogo
function VariaveisJogo() {
  folhad = document.getElementById("folha");
  aread = folhad.getContext("2d");

  larguraCampo = 600;
  alturaCampo = 500;
  larguraLinha = 5;
  AlturaRaquete = 75;
  espessuraRaquete = 8;
  tamanhoBola = 10;
  efeitoRaq = 0.4;
  velojg2 = 5;

  posicaoBolaX = posicaoBolaY = 30;
  velocidadeBolaX = velocidadeBolaY = 8;
  posicaoJogador1 = posicaoJogador2 = 400;
  pontuacaoJg1 = pontuacaoJg2 = 0;

  // Movimento do jogador 1 (Humano)
  folhad.addEventListener("mousemove", function (e) {
    const rect = folhad.getBoundingClientRect();
    posicaoJogador1 = e.clientY - rect.top - AlturaRaquete / 2;
  });
}
// Função para calcular as regras do jogo
function CalculosJogo() {
  // Movimento da bola
  posicaoBolaX = posicaoBolaX + velocidadeBolaX;
  posicaoBolaY = posicaoBolaY + velocidadeBolaY;

  // Regras de colisão - Superior e Inferior
  if (posicaoBolaY < 0 && velocidadeBolaY < 0) {
    // Aqui após a posição ultrapassar o valor 0, inverte o valor
    velocidadeBolaY = -velocidadeBolaY;
  }
  if (posicaoBolaY > alturaCampo && velocidadeBolaY > 0) {
    // Aqui após a posição ultrapassar a alturaCampo, inverte o valor
    velocidadeBolaY = -velocidadeBolaY;
  }
  // Regras de colisão com as raquetes
  // Verificar se o jogador 2 fez ponto
  if (posicaoBolaX < espessuraRaquete) {
    if (
      posicaoBolaY > posicaoJogador1 &&
      posicaoBolaY < posicaoJogador1 + AlturaRaquete
    ) {
      velocidadeBolaX = -velocidadeBolaX;
      var difY = posicaoBolaY - (posicaoJogador1 + AlturaRaquete / 2);
      velocidadeBolaY = difY * efeitoRaq;
    } else {
      pontuacaoJg2 = pontuacaoJg2 + 1;
      // Resetar a posição da bola
      BolaCentro();
    }
  }
  // Verficar se o jogador 1 fez ponto
  if (posicaoBolaX > larguraCampo - espessuraRaquete) {
    if (
      posicaoBolaY > posicaoJogador2 &&
      posicaoBolaY < posicaoJogador2 + AlturaRaquete
    ) {
      velocidadeBolaX = -velocidadeBolaX;
      var difY = posicaoBolaY - (posicaoJogador2 + AlturaRaquete / 2);
      velocidadeBolaY = difY * efeitoRaq;
    } else {
      pontuacaoJg1 = pontuacaoJg1 + 1;
      // Resetar a posição da bola
      BolaCentro();
    }
  }
  // Movimento do jogador 2 (Computador)
  if (posicaoJogador2 + AlturaRaquete / 2 < posicaoBolaY) {
    posicaoJogador2 = posicaoJogador2 + velojg2;
  } else {
    posicaoJogador2 = posicaoJogador2 - velojg2;
  }

  if (pontuacaoJg1 >= pontuacaoJg2 + 5) {
    alert("Parabéns! Você venceu a máquina!");
    pontuacaoJg1 = 0;
    pontuacaoJg2 = 0;
    velojg2 = velojg2 + 0.5;
    BolaCentro();
    if (velojg2 >= 20) {
      alert("UAU! Você derrotou a máquina no nível máximo de dificuldade!");
      pontuacaoJg1 = 0;
      pontuacaoJg2 = 0;
      velojg2 = 4;
      BolaCentro();
    }
  }
  if (pontuacaoJg2 >= pontuacaoJg1 + 5) {
    alert("Que pena! A máquina venceu você!");
    pontuacaoJg1 = 0;
    pontuacaoJg2 = 0;
    velojg2 = velojg2 - 0.5;
    BolaCentro();
  }
}
// Função principal do jogo
function Principal() {
  CalculosJogo();
  DesenhoJogo();

}
