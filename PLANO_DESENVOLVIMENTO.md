# Plano de desenvolvimento — uso do professor

## Missão da cobertura

Ensinar desenvolvimento mobile por meio de um PWA real, instalável e feito com JavaScript puro. Estes quatro dias são uma cobertura dentro de uma UC em andamento: o professor titular continuará o curso. Não há capstone, banca ou avaliação formal de conclusão.

Meta concreta: na quinta-feira, cada aluno terá um app próprio instalado na tela inicial do celular e capaz de abrir offline.

## Antes do código: reconhecimento e diagnóstico

O Dia 1 começa com cerca de 15 minutos de reconhecimento: qual é o PI de cada aluno ou equipe, se já existe uma tela, o que ela deveria fazer e se o trabalho é individual ou em grupo. O roteiro completo está na folha separada `dia-01-recon-diagnostico` fornecida ao professor.

Depois, aplique um diagnóstico de aproximadamente 10 minutos: entregar o HTML pronto de um contador e pedir que o botão aumente o número em 1. Não ajudar durante a medição. O objetivo é decidir o ritmo, não dar nota.

## Cronograma dos quatro dias

### Dia 1 — Primeiros movimentos

- **Objetivo:** reconhecer a estrutura da página e produzir a primeira interação.
- **Movimentos novos:** 1 — MUDAR A TELA; 2 — REAGIR.
- **Atividade:** explorar o layout completo e fazer cada opção de tamanho escrever a escolha na tela.
- **Frase repetida:** ACHAR → ESCUTAR → FAZER.
- **Entregável:** tela visual completa com tamanho reagindo ao clique, ainda sem cálculos.

### Dia 2 — Lógica e preço ao vivo

- **Objetivo:** ler o formulário e calcular o total conforme as escolhas.
- **Movimentos novos:** 3 — LER; 4 — DECIDIR.
- **Atividade:** construir `atualizarTotal`, ler cada `.checked` e somar cada adicional com seu próprio `if`.
- **Entregável:** página completa e funcional, com preço ao vivo.
- **Cuidado:** este é o dia mais pesado de JavaScript. Não comprimir nem acelerar a explicação.

### Dia 3 — A virada mobile

- **Objetivo:** perceber que a página pode virar um app instalado.
- **Movimentos novos:** nenhum; consolidar os quatro anteriores.
- **Atividade:** conferir viewport e alvos de toque, conhecer o manifesto, publicar no GitHub Pages por HTTPS e instalar no celular.
- **Entregável:** app instalado na tela inicial.
- **Prioridade:** este é o clímax da cobertura e deve ser protegido no cronograma.

### Dia 4 — Memória, offline e acabamento

- **Objetivo:** fazer o app lembrar e abrir sem conexão.
- **Movimento novo:** 5 — LEMBRAR.
- **Atividade:** salvar e recuperar o último pedido com `localStorage`, conhecer o service worker já fornecido e personalizar marca ou cores se houver tempo.
- **Entregável:** app com último pedido, abertura offline e acabamento pessoal.
- **Fechamento:** alunos abrem o app no próprio celular e mostram a um colega, sem apresentação formal avaliada.

## Movimento por dia

| Movimento | Dia 1 | Dia 2 | Dia 3 | Dia 4 |
|---|:---:|:---:|:---:|:---:|
| 1 — Mudar a tela | Novo | Prática | Consolidação | Consolidação |
| 2 — Reagir | Novo (`click`) | `change` | Consolidação | Consolidação |
| 3 — Ler | — | Novo | Consolidação | Consolidação |
| 4 — Decidir | — | Novo | Consolidação | Consolidação |
| 5 — Lembrar | — | — | — | Novo |

## Contingência e decisão de ritmo

- Se muitos resolverem o diagnóstico sozinhos, encurte a revisão do Dia 1 e ofereça mais tempo de prática no Dia 2 e de instalação no Dia 3.
- Se travarem, mas acompanharem a demonstração, mantenha o ritmo normal e repita ACHAR → ESCUTAR → FAZER.
- Se a maioria estiver realmente começando do zero, desacelere o Dia 1 e proteja o Dia 2. Nunca acelere o Dia 2 para “recuperar” tempo.
- O primeiro corte é o offline/service worker do Dia 4. A instalação do Dia 3 permanece prioridade porque materializa o objetivo mobile.
- Se os PIs já tiverem HTML/CSS, use o ciclo “demo → seu PI”. Se não tiverem tela, concentre a prática no app. Se o PI não pedir mobile, não force uma funcionalidade artificial.

## Troca opcional de tema

O esqueleto pode virar uma loja de roupa: X-Burguer → Camiseta; adicionais → Estampa (+5), Cor especial (+3), Gola V (+4), Manga longa (+6) e Bordado (+8); Finalizar Pedido → Adicionar à Sacola. Preserve os mesmos IDs e a mesma progressão pedagógica ao adaptar.

## Critério de sucesso

Sucesso não é cobrir mais sintaxe. É o aluno reconhecer os cinco movimentos, explicar a receita e abrir no próprio celular algo que ele modificou e entende.
