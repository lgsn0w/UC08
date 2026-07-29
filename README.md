# UC08: JavaScript para aplicação mobile

Material das aulas da UC08. O projeto usado durante toda a unidade é o
**Lanche do Código**, um aplicativo de montar pedido, feito com HTML, CSS e
JavaScript puro, sem framework.

A cada aula o mesmo projeto ganha uma camada nova, até virar um aplicativo
instalável no celular.

## Registro das aulas

Cada pasta tem um arquivo `AULA.md` com o resumo do que foi trabalhado.

| Aula | Tema | Registro |
|---|---|---|
| Dia 1 | Primeiros movimentos do JavaScript | [`dia-01/AULA.md`](dia-01/AULA.md) |
| Dia 2 | Escolhas, decisões e atualização da tela | [`dia-02/AULA.md`](dia-02/AULA.md) |
| Dia 3 | Consolidação de JavaScript | [`dia-03/AULA.md`](dia-03/AULA.md) |
| Publicação | O aplicativo vira PWA | [`Publicar/AULA.md`](Publicar/AULA.md) |

Os Dias 2 e 3 e a Publicação têm também um `README.md` próprio, com o material
completo de estudo.

## A receita do JavaScript

A mesma sequência se repete a aula inteira:

**ACHAR, ESCUTAR, FAZER**

1. **ACHAR:** encontrar um elemento com `getElementById`.
2. **ESCUTAR:** perceber o clique com `addEventListener('click')`.
3. **FAZER:** mudar o texto com `.textContent`.

```js
const botao = document.getElementById('botao');
const mensagem = document.getElementById('mensagem');

botao.addEventListener('click', function () {
  mensagem.textContent = 'Você clicou!';
});
```

## Estrutura do repositório

```text
UC08/
├── README.md
├── slide.pptx
├── dia-01/                 o projeto em si, e a pasta que vai para o ar
│   ├── AULA.md
│   ├── index.html
│   ├── estilo.css
│   ├── script.js
│   ├── slide/
│   └── exercicio/
├── dia-02/
│   ├── AULA.md
│   ├── README.md           guia completo da aula
│   └── slide-dia-2.pptx
├── dia-03/
│   ├── AULA.md
│   ├── README.md           referência em 30 tópicos
│   └── JS.pdf
├── Publicar/
│   ├── AULA.md
│   ├── README.md           passo a passo da PWA
│   ├── manifest.webmanifest
│   └── sw.js
└── .github/workflows/
    └── publicar-dia-01.yml
```

O código do projeto mora em `dia-01` do começo ao fim. As outras pastas trazem
material de aula, e não uma cópia nova do aplicativo.

## Como abrir no computador

1. Abra a pasta `UC08` no Visual Studio Code.
2. Instale a extensão **Live Server**, se ainda não tiver.
3. Abra `dia-01/index.html`.
4. Clique em **Go Live**.

Nos Dias 1 e 2 também dá para abrir o `index.html` direto no navegador. A partir
da publicação como PWA o Live Server passa a ser necessário, porque service
worker não funciona em arquivo aberto direto do disco.

## Publicação

O repositório tem um workflow do GitHub Actions que publica **a pasta `dia-01`**
no GitHub Pages a cada envio para a branch principal.

Para ligar pela primeira vez:

1. Abra **Settings, Pages** no repositório.
2. Em **Build and deployment**, escolha **GitHub Actions**.
3. Abra a aba **Actions** e acompanhe a execução.
4. Quando terminar, abra o endereço que o GitHub Pages informar.
