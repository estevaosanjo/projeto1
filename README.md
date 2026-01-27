## Mini Jogo Ping-Pong

Mini jogo criado com API Canvas, JavaScript e HTML.  
Este é meu primeiro projeto utilizando GIT e GIT HUB*.

Descrição
 Um mini jogo interativo de Ping-Pong: você controla uma raquete com o mouse e compete contra o computador.

## Detalhes do Projeto

1. Campo de jogo
  - Criado com `<canvas>`
  - Tamanho: 600x500 pixels

2. Raquetes
  Jogador 1 (Humano):
    - Movimentação controlada pelo mouse.
    - Utiliza `addEventListener('mousemove', function(e){ ... })` para ler a posição do mouse (`e.clientX` e `e.clientY`).

  Jogador 2 (Computador):
    - Movimento automático baseado na posição da bola.
    - Simples verificação com `if` para rebater a bola.

3. Regras principais
    - A bola rebate nas laterais do campo, invertendo a direção.
    - Ao bater nas raquetes, a bola é rebatida com efeito, indo para o sentido oposto.
    - Quando a bola ultrapassa a linha do adversário:
    - O jogador adversário ganha 1 ponto.
    - A bola é centralizada novamente, indo para o jogador que marcou o ponto.
