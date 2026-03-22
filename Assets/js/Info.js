// ─────────────────────────────────────────────────────────────
//  info.js — Modal de regras e status dinâmico
// ─────────────────────────────────────────────────────────────

// Guarda a referência do setInterval para poder cancelar
// quando o modal fechar (evita atualizar o DOM desnecessariamente)
let intervaloModal = null;

// ── Abre o modal ──────────────────────────────────────────────
function mostrarRegras() {
  // Preenche o texto das regras apenas uma vez (conteúdo estático)
  document.getElementById("texto-regras").textContent = `
1. A bola rebate nas laterais do campo.

2. Ao bater nas raquetes, muda de direção.

3. Ao ultrapassar a linha:
   - Adversário ganha ponto
   - Bola reinicia no centro

4. Vantagem de 5 pontos reinicia o jogo

   4.1 Se computador vencer → velocidade diminui
   4.2 Se jogador vencer   → velocidade aumenta
`;

  // Atualiza os valores imediatamente ao abrir (sem esperar o intervalo)
  atualizarInfo();

  // Inicia polling de 500ms para manter os valores sincronizados
  // enquanto o modal estiver aberto e o jogo rodando
  intervaloModal = setInterval(atualizarInfo, 500);

  document.getElementById("modal-regras").style.display = "block";
}

// ── Fecha o modal ─────────────────────────────────────────────
function fecharModal() {
  // CORREÇÃO: cancela o setInterval ao fechar para não continuar
  // atualizando o DOM com o modal invisível (desperdício de ciclos)
  clearInterval(intervaloModal);
  intervaloModal = null;

  document.getElementById("modal-regras").style.display = "none";
}

// ── Atualiza apenas os valores dinâmicos ──────────────────────
// Lê as variáveis do index.js e escreve nos <span> do modal.
// Chamada na abertura e repetida pelo setInterval.
function atualizarInfo() {
  // typeof verifica se a variável existe antes de ler
  // evita o ReferenceError se index.js ainda não inicializou
  const bola = typeof velocidadeBola !== "undefined" ? velocidadeBola : "—";
  const cpu =
    typeof velocidadeJogador2 !== "undefined" ? velocidadeJogador2 : "—";

  document.getElementById("velBola").textContent = bola;
  document.getElementById("velCPU").textContent = cpu;
}
// ── Event listeners ───────────────────────────────────────────

// CORREÇÃO: botão agora de fato chama mostrarRegras()
// Antes o botão existia no HTML mas não tinha nenhum listener conectado.
document
  .getElementById("botao-regras")
  .addEventListener("click", mostrarRegras);

// Botão X dentro do modal
document.getElementById("fechar-modal").addEventListener("click", fecharModal);

// NOVO: fechar clicando fora do modal (no overlay escuro)
// Verifica se o clique foi direto no overlay, não em um filho dele
document.getElementById("modal-regras").addEventListener("click", function (e) {
  if (e.target === this) fecharModal();
});

// NOVO: fechar com a tecla Escape (comportamento padrão esperado)
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") fecharModal();
});
