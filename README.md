## Mini Jogo Ping-Pong

Mini jogo criado com API Canvas, JavaScript, HTML e CSS.  
Este é meu primeiro projeto utilizando GIT e GIT HUB*.

Descrição
 Um mini jogo interativo de Ping-Pong: você controla uma raquete com o mouse e compete contra o computador. 

## Detalhes do Projeto

1. Campo de jogo:
  - Criado com `<canvas>`
  - Tamanho: 600x500 pixels

2. Raquetes:
    Jogador 1 (Humano):
     - Movimentação controlada pelo mouse.
     - Utiliza `addEventListener('mousemove', function(e){ ... })` para ler a posição do mouse (`e.clientX` e `e.clientY`).

    Jogador 2 (Computador):
     - Movimento automático baseado na posição da bola.
     - Simples verificação com `if` para rebater a bola.

4. Regras principais:
    - A bola rebate nas laterais do campo, invertendo a direção.
    - Ao bater nas raquetes, a bola é rebatida com efeito, indo para o sentido oposto.
    - Quando a bola ultrapassa a linha do adversário:
    - O jogador adversário ganha 1 ponto.
    - A bola é centralizada novamente, indo para o jogador que marcou o ponto.
    - Quando um jogador atingir 5 de vantagem, o jogo é reiniciado
      - Se o jogador com a vantagem for o computador, sua velocidade é diminuida em -0,5 da sua velocidade atual (ele inicia em velocidade: 3)
      - Se o jogador com a vantagem for o jogador 1(Você), a velocidade do jogador 2 (computador) é aumentada em +0,5 da sua velocidade inicial (sendo 20 sua velocidade limite)
      
