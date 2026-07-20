# Lanche do Código — Dia 1

Primeira etapa do app mobile **Monte seu Lanche**, desenvolvido com HTML, CSS e JavaScript puro na UC08 — Introdução e execução de JavaScript para aplicação mobile.

Neste ponto do projeto, a interface visual já está pronta e o JavaScript pratica somente os dois primeiros movimentos: mudar a tela e reagir a cliques. Os cálculos, a instalação como PWA e o modo offline entram nos próximos dias da UC.

## Meta do Dia 1

Ao tocar em Simples, Duplo ou Triplo, o tamanho escolhido aparece no resumo do pedido.

## A receita do JavaScript

Repetimos sempre:

**ACHAR → ESCUTAR → FAZER**

1. **ACHAR:** encontrar um elemento com `getElementById`.
2. **ESCUTAR:** perceber o clique com `addEventListener('click')`.
3. **FAZER:** mudar o texto com `.textContent`.

Exemplo curto:

```js
const botao = document.getElementById('botao');
const mensagem = document.getElementById('mensagem');

botao.addEventListener('click', function () {
  mensagem.textContent = 'Você clicou!';
});
```

## Conteúdo do repositório

```text
UC08/
├── README.md
├── PLANO_DESENVOLVIMENTO.md
├── dia-01/
│   ├── index.html
│   ├── estilo.css
│   └── script.js
└── slides/
    └── introducao.pptx
```

## Como abrir no computador

1. Abra a pasta `UC08` no Visual Studio Code.
2. Instale a extensão **Live Server**, caso ainda não tenha.
3. Abra `dia-01/index.html`.
4. Clique em **Go Live**.

Também é possível abrir `dia-01/index.html` diretamente no navegador durante o Dia 1.

## Publicação automática

O repositório inclui uma GitHub Action que publica a pasta `dia-01` no GitHub Pages sempre que houver um envio para a branch `main`.

Depois de enviar o projeto:

1. Abra **Settings → Pages** no repositório.
2. Em **Build and deployment**, escolha **GitHub Actions**.
3. Abra a aba **Actions** e acompanhe a publicação.
4. Quando a execução terminar, abra o endereço informado pelo GitHub Pages.

## Movimentos que virão depois

- Movimento 3 — LER: `.value`, `.checked` e `Number()`.
- Movimento 4 — DECIDIR: `if`, `else if` e `else`.
- Movimento 5 — LEMBRAR: `localStorage`.

Este repositório representa somente a entrega do Dia 1. O curso continua com as próximas etapas.
