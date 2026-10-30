# Requisitos: Chuva de Bugs

## Introdução
Chuva de Bugs é um jogo de navegador em que o jogador controla um dev para coletar cafés e desviar de bugs que caem do céu. O objetivo é manter a partida viva o maior tempo possível, acumulando pontos e evitando perder todas as vidas.

## Glossário
- **Dev**: personagem controlado pelo jogador na parte inferior da tela.
- **Café**: item que soma 1 ponto quando coletado.
- **Bug**: item que reduz 1 vida ao entrar em contato com o dev.
- **Recorde**: maior pontuação alcançada e salva no navegador.

## Requisitos

### Requisito 1: Início da partida
**História de usuário:** Como jogador, quero iniciar uma partida com facilidade, para começar a ação rapidamente.

**Critérios de aceitação**
- **1.1** QUANDO a página for aberta, O SISTEMA DEVE mostrar a tela de início com o nome do jogo e a instrução "pressione Espaço para começar".
- **1.2** QUANDO o jogador pressionar a tecla Espaço na tela de início, O SISTEMA DEVE iniciar a partida.
- **1.3** ENQUANTO a tela de início estiver ativa, O SISTEMA DEVE manter pontos e vidas sem contar valores de uma partida em andamento.

### Requisito 2: Movimento do dev
**História de usuário:** Como jogador, quero mover o dev para os lados, para capturar itens e evitar obstáculos.

**Critérios de aceitação**
- **2.1** QUANDO o jogador pressionar a seta para a esquerda ou a tecla A, O SISTEMA DEVE mover o dev para a esquerda.
- **2.2** QUANDO o jogador pressionar a seta para a direita ou a tecla D, O SISTEMA DEVE mover o dev para a direita.
- **2.3** ENQUANTO o dev estiver dentro da área de jogo, O SISTEMA DEVE impedir que ele saia da tela pelos lados.

### Requisito 3: Geração e queda de itens
**História de usuário:** Como jogador, quero que os itens caiam em posições aleatórias, para manter a partida desafiadora e imprevisível.

**Critérios de aceitação**
- **3.1** QUANDO a partida iniciar, O SISTEMA DEVE gerar cafés e bugs em posições aleatórias na parte superior da tela.
- **3.2** ENQUANTO a partida estiver ativa, O SISTEMA DEVE fazer os itens descerem progressivamente pela tela.
- **3.3** QUANDO um item atingir o limite inferior da área de jogo, O SISTEMA DEVE removê-lo sem alterar pontuação nem vidas.
- **3.4** QUANDO um item entrar em contato com o dev, O SISTEMA DEVE identificar o tipo do item e aplicar a regra correspondente.

### Requisito 4: Pontuação e vidas
**História de usuário:** Como jogador, quero ver meu progresso em pontos e vidas, para saber se estou indo bem ou em risco de perder.

**Critérios de aceitação**
- **4.1** QUANDO o jogador coletar um café, O SISTEMA DEVE somar 1 ponto à pontuação atual.
- **4.2** QUANDO o jogador tocar em um bug, O SISTEMA DEVE reduzir a quantidade de vidas em 1.
- **4.3** QUANDO a partida começar, O SISTEMA DEVE iniciar com 3 vidas e pontuação zero.
- **4.4** SE a quantidade de vidas chegar a zero, O SISTEMA DEVE encerrar a partida.

### Requisito 5: Aumento da dificuldade
**História de usuário:** Como jogador, quero que o jogo fique mais desafiador ao longo do tempo, para manter o senso de progressão.

**Critérios de aceitação**
- **5.1** ENQUANTO a partida estiver ativa, O SISTEMA DEVE aumentar a velocidade de queda dos itens com o passar do tempo.
- **5.2** ENQUANTO a partida estiver ativa, O SISTEMA DEVE aumentar a frequência com que os itens aparecem.
- **5.3** QUANDO a dificuldade aumentar, O SISTEMA DEVE manter a regra de pontuação e perda de vidas sem alterar a mecânica principal.

### Requisito 6: Tela final e recorde
**História de usuário:** Como jogador, quero ver meu resultado final e o melhor recorde, para ter incentivo para tentar novamente.

**Critérios de aceitação**
- **6.1** QUANDO a partida terminar, O SISTEMA DEVE mostrar a tela final com a pontuação alcançada e o recorde atual.
- **6.2** QUANDO o jogador pressionar a tecla Espaço na tela final, O SISTEMA DEVE reiniciar a partida.
- **6.3** O SISTEMA DEVE manter o maior valor de pontos alcançado mesmo após o navegador ser fechado.

## Fora do escopo
- Som, música ou efeitos de áudio.
- Multiplayer ou competição online.
- Login de usuário ou autenticação.
- Ranking online ou compartilhamento de pontuação.
- Níveis, fases ou histórias com objetivos diferentes.

## Suposições
- O jogo será controlado apenas por teclado, sem toque ou mouse.
- A tela final não terá opções extras além de reiniciar com Espaço.
- O recorde será salvo localmente no navegador, sem sincronização entre dispositivos.
