# Dia 03: introdução ao JavaScript

## Material principal

- [Guia de introdução ao JavaScript](JS.pdf)

O PDF tem 31 páginas.

O guia apresenta os fundamentos do JavaScript.

O guia usa exemplos de lanche, roupa e viagem.

O estudante pode adaptar a lógica para outro tema.

## Objetivo do Dia 3

O estudante deve usar JavaScript para controlar uma página HTML.

Ao final do estudo, o estudante deve conseguir:

- explicar a função do JavaScript em uma página;
- ligar um arquivo `script.js` ao HTML;
- abrir e usar o Console;
- criar variáveis com `const` e `let`;
- reconhecer `string`, `number` e `boolean`;
- fazer contas com valores numéricos;
- comparar valores com operadores;
- encontrar um elemento pelo `id`;
- alterar um texto com `textContent`;
- reagir a um evento com `addEventListener`;
- ler `value` e `checked`;
- converter texto com `Number()`;
- usar `if`, `else if` e `else`;
- criar funções;
- usar `return`;
- separar cálculo e exibição;
- localizar erros no Console.

## Resultado esperado

A página deve ler escolhas do usuário.

A página deve calcular um resultado.

A página deve mostrar o resultado atualizado.

O código deve usar nomes claros.

O Console não deve mostrar erro vermelho.

## Como estudar o material

Use esta sequência:

1. Abra o PDF.
2. Abra o projeto no editor.
3. Abra a página no navegador.
4. Abra o Console com `F12`.
5. Leia uma seção do PDF.
6. Digite o exemplo no projeto.
7. Salve o arquivo.
8. Atualize a página.
9. Confira o Console.
10. Teste uma mudança.
11. Corrija o erro antes de continuar.

Digite os exemplos.

Evite copiar blocos grandes.

Um bloco digitado ajuda a identificar cada símbolo.

## Arquivos do projeto

Um projeto simples usa estes arquivos:

```text
dia-03/
├── index.html
├── estilo.css
├── script.js
└── JS.pdf
```

O arquivo `index.html` contém a estrutura.

O arquivo `estilo.css` contém a aparência.

O arquivo `script.js` contém o comportamento.

O arquivo `JS.pdf` contém o guia de estudo.

## 1. Função do JavaScript

O HTML cria os elementos da página.

O CSS define a aparência dos elementos.

O JavaScript controla o comportamento dos elementos.

O JavaScript pode:

- ler uma escolha;
- responder a um clique;
- fazer uma conta;
- alterar um texto;
- mostrar uma mensagem;
- validar um campo.

## 2. Ligação entre HTML e JavaScript

Use uma tag `script` perto do fim do `body`.

```html
<body>
  <h1>Monte seu lanche</h1>

  <script src="script.js"></script>
</body>
```

O navegador lê o HTML de cima para baixo.

O navegador deve criar os elementos antes de executar o JavaScript.

Esta ordem reduz erros com elementos que ainda não existem.

## 3. Console do navegador

O Console mostra mensagens e erros.

Abra as ferramentas de desenvolvimento com `F12`.

Selecione a aba Console.

Use `console.log()` para observar um valor.

```javascript
console.log('O script começou');
console.log(precoTotal);
```

Use mensagens curtas.

Mostre o nome do valor quando necessário.

```javascript
console.log('precoTotal:', precoTotal);
```

## 4. Variáveis

Uma variável guarda um valor.

Use `const` quando a variável não receber outro valor.

Use `let` quando a variável receber outro valor.

```javascript
const nomeDaLoja = 'Lanche do Código';
let precoTotal = 0;
```

Comece com `const`.

Troque para `let` quando o código precisar mudar o valor.

### Nomes de variável

Use um nome que descreva o valor.

```javascript
let precoTotal = 0;
let nomeTamanho = 'Simples';
const textoResultado = document.getElementById('textoResultado');
```

Não comece o nome com um número.

Não use espaço no nome.

Não use acento no nome.

Use letra maiúscula no início da segunda palavra.

Exemplos:

- `precoTotal`;
- `nomeProduto`;
- `extraBacon`;
- `classeEscolhida`.

## 5. Tipos de dado

O material usa três tipos principais.

### `string`

Uma `string` contém texto.

Use aspas para criar uma `string`.

```javascript
const nomeProduto = 'Camiseta';
const corEscolhida = 'Azul';
```

### `number`

Um `number` contém um número.

Não use aspas em um número usado em conta.

```javascript
const precoBase = 39;
const quantidade = 3;
```

### `boolean`

Um `boolean` contém `true` ou `false`.

Não use aspas.

```javascript
const temDesconto = false;
const aceitouTermos = true;
```

### Conferência do tipo

Use `typeof` durante o teste.

```javascript
console.log(typeof 39);
console.log(typeof '39');
console.log(typeof true);
```

## 6. Operadores aritméticos

Use operadores aritméticos para fazer contas.

| Operador | Operação |
|---|---|
| `+` | soma |
| `-` | subtração |
| `*` | multiplicação |
| `/` | divisão |

Exemplo:

```javascript
let subtotal = 39 + 15;
let comDesconto = subtotal - 5;
let dobro = subtotal * 2;
```

O operador `+` também junta textos.

```javascript
const mensagem = 'Total: R$ ' + subtotal;
```

Tenha atenção ao tipo.

```javascript
console.log('15' + '20');
```

O resultado será `1520`.

Os dois valores são textos.

## 7. Formato de dinheiro

Use `toFixed(2)` para mostrar duas casas decimais.

```javascript
const total = 53.9;
const mensagem = 'Total: R$ ' + total.toFixed(2);
```

O texto final será `Total: R$ 53.90`.

Use o formato apenas na exibição.

Mantenha o cálculo como número.

## 8. Operadores de comparação

Uma comparação produz `true` ou `false`.

| Operador | Pergunta |
|---|---|
| `===` | os valores e os tipos são iguais? |
| `!==` | os valores são diferentes? |
| `>` | o primeiro valor é maior? |
| `<` | o primeiro valor é menor? |
| `>=` | o primeiro valor é maior ou igual? |
| `<=` | o primeiro valor é menor ou igual? |

Exemplo:

```javascript
console.log(10 === 10);
console.log(10 === '10');
console.log(precoTotal >= 100);
```

Use `=` para atribuir um valor.

Use `===` para comparar valores.

## 9. Operadores lógicos

Use `&&` quando duas condições devem ser verdadeiras.

Use `||` quando uma condição pode ser verdadeira.

```javascript
const dentroDaFaixa = total > 50 && total < 200;
const corValida = cor === 'Azul' || cor === 'Preto';
```

Leia a condição da esquerda para a direita.

Teste cada parte quando a condição for longa.

## 10. DOM

O DOM representa a estrutura da página.

O JavaScript usa o DOM para encontrar e controlar elementos.

O código deve encontrar um elemento antes de usar esse elemento.

## 11. `getElementById`

Crie um `id` no HTML.

```html
<p id="textoResultado">Escolha uma opção</p>
```

Encontre o elemento no JavaScript.

```javascript
const textoResultado = document.getElementById('textoResultado');
```

O texto do `id` deve ser igual nos dois arquivos.

JavaScript diferencia letra maiúscula de letra minúscula.

Cada `id` deve identificar um elemento.

### Erro com `null`

`getElementById()` devolve `null` quando não encontra o elemento.

Confira estes pontos:

1. O `id` existe no HTML.
2. O nome está correto.
3. As letras têm o mesmo formato.
4. O script executa depois do HTML.

## 12. `textContent`

Use `textContent` para ler ou alterar o texto de um elemento.

```javascript
textoResultado.textContent = 'Tamanho: Duplo';
```

Use um valor variável quando necessário.

```javascript
textoResultado.textContent = 'Total: R$ ' + total.toFixed(2);
```

O texto mostrado deve informar o resultado atual.

Evite mensagens sem contexto.

## 13. Eventos

Um evento informa que uma ação ocorreu.

Use `click` para um botão.

Use `change` para um campo de formulário.

```javascript
botaoFinalizar.addEventListener('click', finalizarPedido);
tamanhoDuplo.addEventListener('change', atualizarTela);
```

Passe o nome da função sem parênteses.

```javascript
botaoFinalizar.addEventListener('click', finalizarPedido);
```

Não execute a função dentro do segundo argumento.

```javascript
botaoFinalizar.addEventListener('click', finalizarPedido());
```

O segundo exemplo executa a função durante o carregamento.

Ele não espera o clique.

## 14. Teste de evento

Use um teste pequeno.

```javascript
extraBacon.addEventListener('change', function () {
  console.log('O campo mudou');
});
```

Altere o campo.

Confira o Console.

Se a mensagem não aparecer, confira o `id` e o evento.

## 15. `value`

`value` contém o valor de um campo.

```html
<input id="tamanhoGrande" type="radio" value="Grande">
```

```javascript
console.log(tamanhoGrande.value);
```

O resultado será o texto `Grande`.

O valor de `value` sempre chega como texto.

## 16. `checked`

`checked` informa se um `radio` ou `checkbox` está marcado.

O valor será `true` ou `false`.

```javascript
console.log(extraBacon.checked);
```

Use `checked` em uma condição.

```javascript
if (extraBacon.checked) {
  total = total + 4;
}
```

Não compare com o texto `'true'`.

`checked` já é um `boolean`.

## 17. `Number()`

Use `Number()` para converter texto em número.

```javascript
const quantidadeTexto = campoQuantidade.value;
const quantidade = Number(quantidadeTexto);
const total = precoBase * quantidade;
```

Use a conversão antes da conta.

Não use `Number()` para uma comparação de texto.

```javascript
if (corEscolhida.value === 'Azul') {
  console.log('A cor é azul');
}
```

### Resultado `NaN`

`Number()` produz `NaN` quando não consegue converter o texto.

Exemplo:

```javascript
console.log(Number('três'));
```

Confira o valor digitado quando o cálculo mostrar `NaN`.

## 18. Decisão com `if`

Use `if` para executar um bloco quando a condição for verdadeira.

```javascript
if (extraBacon.checked) {
  total = total + 4;
}
```

Use chaves para marcar o bloco.

Mantenha a indentação.

## 19. Caminho alternativo com `else`

Use `else` para tratar a condição falsa.

```javascript
if (extraBacon.checked) {
  textoBacon.textContent = 'Com bacon';
} else {
  textoBacon.textContent = 'Sem bacon';
}
```

O código executa um dos dois blocos.

## 20. Escolha exclusiva com `else if`

Use `else if` quando somente uma opção pode valer.

```javascript
let precoBase = 0;

if (tamanhoSimples.checked) {
  precoBase = 15;
} else if (tamanhoDuplo.checked) {
  precoBase = 20;
} else if (tamanhoTriplo.checked) {
  precoBase = 25;
} else {
  precoBase = 0;
}
```

O primeiro bloco verdadeiro encerra a cadeia.

Use esta estrutura para um grupo de opções `radio`.

## 21. Opções independentes

Use um `if` para cada `checkbox`.

```javascript
if (extraBacon.checked) {
  total = total + 4;
}

if (extraOvo.checked) {
  total = total + 3;
}

if (extraQueijo.checked) {
  total = total + 5;
}
```

Não use `else if` entre opções independentes.

O usuário pode marcar mais de uma opção.

## 22. Funções

Uma função agrupa uma tarefa.

Use um nome que descreva a tarefa.

```javascript
function calcularTotal() {
  let total = 0;
  total = total + 15;
  return total;
}
```

Definir uma função não executa a função.

Use parênteses para chamar a função.

```javascript
const resultado = calcularTotal();
```

## 23. `return`

`return` devolve um valor.

O código que chamou a função pode guardar esse valor.

```javascript
function calcularDobro(valor) {
  return valor * 2;
}

const resultado = calcularDobro(10);
```

O valor de `resultado` será `20`.

## 24. Separação de responsabilidades

Uma função deve calcular o total.

Outra função deve mostrar o total.

```javascript
function calcularTotal() {
  let total = 0;

  if (tamanhoSimples.checked) {
    total = total + 15;
  } else if (tamanhoDuplo.checked) {
    total = total + 20;
  }

  if (extraBacon.checked) {
    total = total + 4;
  }

  return total;
}

function atualizarTela() {
  const total = calcularTotal();
  textoTotal.textContent = 'Total: R$ ' + total.toFixed(2);
}
```

Esta separação facilita o teste.

Esta separação reduz repetição.

## 25. Estrutura recomendada do `script.js`

Organize o arquivo em quatro partes.

```javascript
// 1. Elementos do HTML

// 2. Funções

// 3. Eventos

// 4. Primeira exibição
```

### Parte 1: elementos

Encontre os elementos com `getElementById()`.

### Parte 2: funções

Crie a função de cálculo.

Crie a função de exibição.

### Parte 3: eventos

Ligue os campos à função de exibição.

### Parte 4: primeira exibição

Chame a função uma vez.

```javascript
atualizarTela();
```

Esta chamada mostra o estado inicial.

## 26. Exemplo completo

O exemplo abaixo calcula o preço de um lanche.

```javascript
const simples = document.getElementById('simples');
const duplo = document.getElementById('duplo');
const bacon = document.getElementById('bacon');
const textoTotal = document.getElementById('textoTotal');

function calcularTotal() {
  let total = 0;

  if (simples.checked) {
    total = total + 15;
  } else if (duplo.checked) {
    total = total + 20;
  }

  if (bacon.checked) {
    total = total + 4;
  }

  return total;
}

function atualizarTela() {
  const total = calcularTotal();
  textoTotal.textContent = 'Total: R$ ' + total.toFixed(2);
}

simples.addEventListener('change', atualizarTela);
duplo.addEventListener('change', atualizarTela);
bacon.addEventListener('change', atualizarTela);

atualizarTela();
```

Teste uma escolha por vez.

Depois teste combinações.

## 27. Adaptação para outro tema

Mantenha a estrutura.

Troque os nomes e os valores.

Exemplo para roupa:

- escolha exclusiva: tamanho;
- opções independentes: estampa e embalagem;
- resultado: preço final.

Exemplo para viagem:

- escolha exclusiva: classe;
- opções independentes: seguro e bagagem;
- resultado: preço final.

Não use nomes de lanche em um projeto de viagem.

Use nomes que correspondam ao tema.

## 28. Erros comuns

### `Cannot set properties of null`

O JavaScript não encontrou o elemento.

Confira o `id` no HTML e no JavaScript.

### O total mostra `NaN`

Um valor não foi convertido.

Use `Number()` antes da conta.

### Os números ficam juntos

Um valor ainda é texto.

Confira o tipo com `typeof`.

### A tela não muda

Confira o `addEventListener`.

Confira o nome da função.

Confira se existe um erro anterior no Console.

### A função executa durante o carregamento

Remova os parênteses no `addEventListener`.

### Somente um `checkbox` entra no cálculo

Use vários blocos `if`.

Não use uma cadeia de `else if`.

### `is not a function`

Confira o nome do método.

JavaScript diferencia letras maiúsculas e minúsculas.

### `Unexpected token`

Confira chaves, parênteses e aspas.

Comece pela linha indicada no Console.

Confira também a linha anterior.

## 29. Processo de depuração

Use este processo:

1. Leia a mensagem completa.
2. Anote o número da linha.
3. Abra a linha no editor.
4. Confira a linha anterior.
5. Mostre os valores com `console.log()`.
6. Confira os tipos com `typeof`.
7. Faça uma correção.
8. Salve o arquivo.
9. Atualize a página.
10. Teste novamente.

Não altere várias partes ao mesmo tempo.

Uma alteração por teste facilita a localização do problema.

## 30. Atividade prática

Use o tema do seu projeto.

Crie estes elementos:

- um grupo com três opções `radio`;
- duas opções `checkbox`;
- um texto para o resumo;
- um texto para o resultado.

Crie este comportamento:

- encontrar todos os elementos;
- calcular um valor base;
- somar opções independentes;
- mostrar a escolha principal;
- mostrar o resultado;
- atualizar a tela após uma mudança.

## Entrega mínima

- [ ] O HTML possui identificadores únicos.
- [ ] O `script.js` carrega no fim do `body`.
- [ ] O JavaScript encontra todos os elementos.
- [ ] O código usa `const` e `let` de forma correta.
- [ ] O código converte valores antes das contas.
- [ ] A escolha exclusiva usa `if` e `else if`.
- [ ] Cada opção independente usa um `if`.
- [ ] Uma função calcula o resultado.
- [ ] Uma função atualiza a tela.
- [ ] Os campos usam o evento `change`.
- [ ] A tela mostra o estado inicial.
- [ ] O Console não mostra erro vermelho.

## Testes obrigatórios

Faça estes testes:

1. Abra a página sem fazer uma escolha.
2. Marque a primeira opção principal.
3. Marque a segunda opção principal.
4. Marque uma opção independente.
5. Marque duas opções independentes.
6. Desmarque uma opção independente.
7. Confira o resultado após cada ação.
8. Atualize a página.
9. Confira o estado inicial.
10. Abra o Console.

Registre o resultado esperado e o resultado obtido.

## Perguntas para revisão

1. Qual é a função do JavaScript na página?
2. Quando deve ser usado `const`?
3. Quando deve ser usado `let`?
4. Qual é a diferença entre `'15'` e `15`?
5. O que `getElementById()` devolve quando falha?
6. Qual é a função de `textContent`?
7. Qual é a diferença entre `click` e `change`?
8. Por que a função fica sem parênteses no `addEventListener`?
9. O que `value` devolve?
10. O que `checked` devolve?
11. Quando deve ser usado `Number()`?
12. Quando deve ser usado `else if`?
13. Por que cada `checkbox` usa um `if` separado?
14. Qual é a função de `return`?
15. Por que o cálculo fica separado da exibição?

## Glossário

### `boolean`

Tipo que contém `true` ou `false`.

### `checked`

Propriedade que informa se um campo está marcado.

### `const`

Palavra que cria uma variável sem nova atribuição.

### Console

Área do navegador que mostra mensagens e erros.

### DOM

Representação da estrutura HTML.

### evento

Ação que o JavaScript pode observar.

### função

Bloco de código com um nome.

### `getElementById()`

Método que encontra um elemento pelo `id`.

### `let`

Palavra que cria uma variável que pode receber outro valor.

### `NaN`

Resultado de uma conversão numérica inválida.

### `Number()`

Função que tenta converter um valor em número.

### `return`

Palavra que devolve um valor de uma função.

### `string`

Tipo que contém texto.

### `textContent`

Propriedade que lê ou altera o texto de um elemento.

### `value`

Propriedade que lê o valor atual de um campo.

## Comando para abrir o PDF

No Linux, use:

```bash
zathura "dia-03/JS.pdf"
```

Também é possível abrir o arquivo no navegador.
