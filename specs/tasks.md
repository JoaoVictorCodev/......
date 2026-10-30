# Plano de implementação: Chuva de Bugs

> Como usar: rode `/4-implementar N` para cada tarefa, teste no navegador e faça commit.

- [ ] 1. Estruturar a tela e o loop principal
  - Criar a estrutura da página, o canvas central e o CSS de fundo; adicionar o objeto `CONFIG` com valores base; iniciar o loop com `requestAnimationFrame` e mostrar a tela inicial.
  - **Arquivos:** `index.html`, `style.css`, `src/config.js`, `src/main.js`
  - **Como verificar:** abrir a página no navegador → a tela deve mostrar o nome do jogo e a instrução "pressione Espaço para começar" e o canvas deve ficar visível com o loop em execução.
  - _Requisitos: 1.1, 1.3_

- [ ] 2. Implementar o controle do dev e a partida
  - Adicionar listeners de teclado para esquerda, direita e Espaço; criar o estado do jogador e o início da partida; impedir que o dev saia da tela e mostrar o jogo em movimento.
  - **Arquivos:** `src/input.js`, `src/game.js`, `src/main.js`
  - **Como verificar:** carregar a página, pressionar Espaço e depois as setas ou A/D → o dev deve se mover só horizontalmente e não fugir da área de jogo.
  - _Requisitos: 1.2, 2.1, 2.2, 2.3_

- [ ] 3. Gerar itens, pontuação e desafio crescente
  - Criar a fila de itens, gerar cafés e bugs em posições aleatórias no topo, mover tudo com velocidade conforme o tempo, remover itens que saem da tela e aplicar as regras de colisão; iniciar pontuação e vidas com 3 vidas e zero pontos; aumentar a dificuldade com o tempo.
  - **Arquivos:** `src/game.js`, `src/config.js`
  - **Como verificar:** iniciar a partida e observar os itens caindo → cafés somam 1 ponto, bugs diminuem 1 vida, itens fora da tela desaparecem e a queda fica mais rápida com o passar do tempo.
  - _Requisitos: 3.1, 3.2, 3.3, 3.4, 4.1, 4.2, 4.3, 4.4, 5.1, 5.2, 5.3_

- [ ] 4. Finalizar tela de fim, recorde e revisão geral
  - Encerrar a partida ao zerar as vidas, mostrar a tela final com pontuação e recorde, reiniciar com Espaço e salvar o melhor valor no navegador; revisar todos os critérios e ajustar casos limite de input e reinicialização.
  - **Arquivos:** `src/game.js`, `src/main.js`, `src/input.js`, `index.html`, `style.css`
  - **Como verificar:** perder todas as vidas e depois pressionar Espaço → a partida deve reiniciar; recarregar a página após terminar com uma pontuação grande → o recorde deve permanecer salvo.
  - _Requisitos: 6.1, 6.2, 6.3_

## Correções

<vazio por enquanto; o comando /corrigir-bug escreve aqui>
