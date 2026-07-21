# Dia 02: escolhas, decisões e atualização da tela

## Tema da aula

Nesta aula, a página deixa de apenas responder a um clique e passa a tomar decisões com base nas escolhas do usuário.

O projeto deve ler opções de formulário, guardar valores, fazer um cálculo ou uma decisão e mostrar o resultado na tela. Cada aluno pode continuar usando o tema escolhido no primeiro dia.

O exemplo de sanduíche serve como referência, mas a mesma lógica pode ser usada em jogos, planos de assinatura, eventos, lojas, viagens, cursos e outros temas.

## Objetivo principal

Ao final da aula, o projeto deve:

- Ler uma escolha exclusiva feita com botões de opção
- Ler opções extras feitas com caixas de seleção
- Usar condições para decidir o que fazer
- Calcular um valor, pontuação, tempo, nível ou outro resultado
- Atualizar o resumo da página sempre que uma escolha mudar
- Mostrar o estado inicial da página corretamente
- Funcionar sem erros no Console do navegador

## Conteúdos trabalhados

- `id`
- `value`
- `checked`
- `radio`
- `checkbox`
- Evento `change`
- `if`
- `else if`
- Variáveis com `let`
- Funções
- `return`
- `textContent`
- `toFixed(2)`
- Console do navegador

## Ideia central da aula

O funcionamento pode ser dividido em seis passos:

1. Achar os elementos do HTML
2. Escutar mudanças nos controles
3. Ler as escolhas do usuário
4. Guardar as informações em variáveis
5. Calcular ou decidir um resultado
6. Mostrar o resultado atualizado na tela

Quando o usuário muda uma opção, o programa executa novamente o cálculo e atualiza o resumo.

## Do Dia 1 para o Dia 2

No Dia 1, a página respondia ao clique e trocava um texto. No Dia 2, o JavaScript precisa observar várias opções e combinar as escolhas.

Exemplo simples do Dia 1:

```javascript
botao.addEventListener('click', function () {
  texto.textContent = 'Tamanho: Duplo';
});
```

Exemplo da lógica do Dia 2:

```javascript
if (temBacon.checked) {
  total = total + 4;
}

textoTotal.textContent = 'Total: R$ ' + total.toFixed(2);
```

## Estrutura mínima do projeto

Cada projeto deve ter três partes.

### 1. Uma escolha exclusiva

Somente uma opção pode ser marcada por vez.

Exemplos:

- Plano Básico, Plus ou Premium
- Personagem Mago, Guerreiro ou Arqueiro
- Ingresso Meia, Inteira ou VIP
- Tamanho Pequeno, Médio ou Grande
- Dificuldade Fácil, Normal ou Difícil

### 2. Duas ou mais opções extras

As opções são independentes. O usuário pode marcar nenhuma, uma ou várias.

Exemplos:

- Bacon, ovo e queijo
- Backup e suporte
- Escudo e cura
- Entrega e embalagem
- Seguro e bagagem

### 3. Um resultado

O resultado deve mudar conforme as escolhas.

Exemplos:

- Preço total
- Pontos de poder
- Tempo estimado
- Nível de risco
- Recomendação final
- Resumo do pedido

## `id`, `value` e `checked`

Essas três informações têm funções diferentes.

### `id`

É o nome usado pelo JavaScript para encontrar um elemento do HTML.

```html
<input id="planoPremium" type="radio" name="plano" value="Premium">
```

```javascript
const planoPremium = document.getElementById('planoPremium');
```

O texto do `id` deve ser igual no HTML e no JavaScript.

### `value`

É a informação representada pela opção.

```javascript
console.log(planoPremium.value);
```

Nesse exemplo, o resultado será `Premium`.

### `checked`

Informa se um `radio` ou `checkbox` está marcado.

```javascript
console.log(planoPremium.checked);
```

O resultado será `true` quando a opção estiver marcada e `false` quando não estiver.

Resumo:

- `id` encontra o elemento
- `value` informa o valor da opção
- `checked` confirma se a opção está marcada

## Escolha exclusiva com `radio`

O `radio` deve ser usado quando apenas uma opção pode valer. Todos os controles do mesmo grupo precisam ter o mesmo atributo `name`.

```html
<label>
  <input id="classeMago" type="radio" name="classe" value="Mago">
  Mago
</label>

<label>
  <input id="classeGuerreiro" type="radio" name="classe" value="Guerreiro">
  Guerreiro
</label>
```

Como os dois controles usam `name="classe"`, o navegador permite marcar apenas um deles.

## Opções independentes com `checkbox`

O `checkbox` deve ser usado quando mais de uma opção pode ser escolhida.

```html
<label>
  <input id="extraSuporte" type="checkbox" value="Suporte">
  Suporte técnico
</label>

<label>
  <input id="extraBackup" type="checkbox" value="Backup">
  Backup automático
</label>
```

Cada caixa deve ser verificada separadamente:

```javascript
if (extraBackup.checked) {
  total = total + 10;
}
```

## Evento `change`

O evento `change` é indicado para controles de formulário. Ele acontece quando o valor ou a marcação do elemento muda.

```javascript
planoPremium.addEventListener('change', function () {
  console.log('O plano mudou');
});

extraBackup.addEventListener('change', function () {
  console.log(extraBackup.checked);
});
```

O evento `click` continua sendo útil para botões comuns, como finalizar, abrir, fechar ou limpar. Para `radio`, `checkbox` e `select`, o evento `change` deixa a intenção do código mais clara.

## Decisão com `if` e `else if`

Uma escolha exclusiva pode ser tratada com uma cadeia de condições.

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

O `else if` é adequado neste caso porque somente um tamanho pode ser escolhido.

## Vários `if` para opções extras

As caixas de seleção são independentes. Por isso, cada uma precisa de seu próprio `if`.

```javascript
let extras = 0;

if (extraBacon.checked) {
  extras = extras + 4;
}

if (extraOvo.checked) {
  extras = extras + 3;
}

if (extraQueijo.checked) {
  extras = extras + 5;
}
```

Não use `else if` para essa situação. Se bacon e ovo estiverem marcados, os dois devem entrar no cálculo.

Regra prática:

- Escolha exclusiva com `radio`: `if` e `else if`
- Opções independentes com `checkbox`: vários `if` separados

## Função de cálculo

Uma função pode ficar responsável apenas por calcular e devolver o resultado.

```javascript
function calcularTotal() {
  let total = 0;

  if (tamanhoSimples.checked) {
    total = total + 15;
  } else if (tamanhoDuplo.checked) {
    total = total + 20;
  } else if (tamanhoTriplo.checked) {
    total = total + 25;
  }

  if (extraBacon.checked) {
    total = total + 4;
  }

  if (extraOvo.checked) {
    total = total + 3;
  }

  return total;
}
```

A função começa com zero, verifica a escolha principal, soma os extras e devolve o total com `return`.

## Função de atualização da tela

Outra função pode mostrar as escolhas e o resultado.

```javascript
function atualizarTela() {
  const total = calcularTotal();

  if (tamanhoSimples.checked) {
    textoTamanho.textContent = 'Tamanho: Simples';
  } else if (tamanhoDuplo.checked) {
    textoTamanho.textContent = 'Tamanho: Duplo';
  } else if (tamanhoTriplo.checked) {
    textoTamanho.textContent = 'Tamanho: Triplo';
  } else {
    textoTamanho.textContent = 'Tamanho: nenhum';
  }

  textoTotal.textContent = 'Total: R$ ' + total.toFixed(2);
}
```

Separar o cálculo da atualização ajuda a organizar o código e facilita a correção de erros.

## Ligação dos eventos

Todos os controles podem chamar a mesma função quando houver uma mudança.

```javascript
tamanhoSimples.addEventListener('change', atualizarTela);
tamanhoDuplo.addEventListener('change', atualizarTela);
tamanhoTriplo.addEventListener('change', atualizarTela);
extraBacon.addEventListener('change', atualizarTela);
extraOvo.addEventListener('change', atualizarTela);
extraQueijo.addEventListener('change', atualizarTela);

atualizarTela();
```

A última linha mostra o estado inicial da página antes de qualquer interação.

## Organização recomendada do `script.js`

O arquivo pode seguir esta ordem:

```javascript
// 1. Elementos do HTML
const planoBasico = document.getElementById('planoBasico');
const extraBackup = document.getElementById('extraBackup');
const textoResultado = document.getElementById('textoResultado');

// 2. Funções
function calcularResultado() {
  // Faz o cálculo e devolve o resultado
}

function atualizarTela() {
  // Atualiza os textos da página
}

// 3. Eventos
planoBasico.addEventListener('change', atualizarTela);
extraBackup.addEventListener('change', atualizarTela);

// 4. Primeira exibição
atualizarTela();
```

Essa separação ajuda a localizar elementos, funções e eventos com rapidez.

## Como adaptar para outros temas

### Personagem de jogo

- Escolha principal: Mago, Guerreiro ou Arqueiro
- Extras: Cura, Escudo e Ataque extra
- Resultado: Poder total
- Decisão adicional: Mostrar uma recomendação quando o poder chegar a 50

```javascript
if (poder >= 50) {
  textoRecomendacao.textContent = 'Pronto para batalha';
}
```

### Plano de assinatura

- Escolha principal: Básico, Plus ou Premium
- Extras: Backup e Suporte
- Resultado: Mensalidade

### Evento

- Escolha principal: Meia, Inteira ou VIP
- Extras: Estacionamento, camiseta e certificado
- Resultado: Valor do ingresso

### Viagem

- Escolha principal: Ônibus, carro ou avião
- Extras: Seguro, bagagem e embarque prioritário
- Resultado: Preço ou tempo estimado

## Sequência sugerida para a aula

### Parte 1: revisão

- Relembrar `getElementById`
- Relembrar `addEventListener`
- Relembrar `textContent`
- Comparar a proposta do Dia 1 com a proposta do Dia 2

### Parte 2: controles de formulário

- Criar um grupo com três opções `radio`
- Criar pelo menos duas opções `checkbox`
- Explicar `id`, `value`, `checked` e `name`
- Testar os valores no Console

### Parte 3: condições e cálculo

- Usar `if` e `else if` na escolha exclusiva
- Usar vários `if` nos extras
- Guardar o resultado em uma variável com `let`
- Criar uma função que devolve o resultado

### Parte 4: atualização da página

- Criar a função `atualizarTela`
- Mostrar a escolha principal
- Mostrar o resultado
- Ligar todos os controles ao evento `change`
- Chamar a função uma vez no final do arquivo

### Parte 5: prática individual

- Adaptar a lógica ao tema de cada aluno
- Testar uma opção por vez
- Conferir o Console
- Comparar o resultado esperado com o resultado mostrado

## Atividade prática

Cada aluno deve continuar o projeto iniciado no Dia 1.

### Entrega mínima

- Uma escolha exclusiva com pelo menos três opções
- Duas opções extras com `checkbox`
- Um resultado calculado ou decidido por condições
- Um resumo atualizado na tela
- Eventos usando `change`
- Código organizado em funções
- Nenhum erro vermelho no Console

### Desafios adicionais

- Desabilitar o botão Finalizar até uma opção principal ser escolhida
- Mostrar uma recomendação com base no resultado
- Adicionar mais uma caixa de seleção
- Mostrar um aviso quando nada estiver escolhido
- Criar frases completas no resumo
- Adicionar um botão para limpar as escolhas

## Erros comuns

### O Console mostra `null`

Confira se o `id` usado no JavaScript é igual ao `id` do HTML. Também confira se o arquivo JavaScript foi carregado depois dos elementos da página.

### O total fica sempre em zero

Confira se alguma opção está marcada, se a condição usa `.checked` e se a função de cálculo está sendo chamada.

### Somente uma caixa de seleção entra no cálculo

Confira se foi usado `else if` onde deveriam existir vários `if` separados.

### O total não muda

Confira se todos os elementos têm um `addEventListener` e se o evento chama a função correta.

### O valor aparece com muitas casas decimais

Para dinheiro, use:

```javascript
total.toFixed(2)
```

### A página só mostra o resultado depois da primeira mudança

Chame `atualizarTela()` no final do arquivo JavaScript.

### O texto e o número ficam juntos de forma errada

Primeiro faça o cálculo usando números. Depois monte a frase exibida na tela.

## Forma de testar

1. Abra o projeto no navegador
2. Abra as ferramentas de desenvolvedor
3. Entre na aba Console
4. Escolha cada opção principal separadamente
5. Marque e desmarque cada opção extra
6. Marque várias opções extras ao mesmo tempo
7. Confira se o resumo muda a cada ação
8. Confira se o cálculo está correto
9. Recarregue a página e confira o estado inicial
10. Corrija qualquer erro vermelho antes da entrega

Faça uma mudança pequena por vez. Teste logo depois de cada alteração para encontrar erros com mais facilidade.

## Checklist final

- [ ] Sei explicar a diferença entre `id`, `value` e `checked`
- [ ] Sei criar um grupo de opções com `radio`
- [ ] Sei criar opções independentes com `checkbox`
- [ ] Sei usar o evento `change`
- [ ] Sei usar `if` e `else if` para uma escolha exclusiva
- [ ] Sei usar vários `if` para opções extras
- [ ] Sei guardar e alterar um resultado com `let`
- [ ] Sei criar uma função de cálculo
- [ ] Sei devolver um valor com `return`
- [ ] Sei atualizar a página com `textContent`
- [ ] Sei chamar a atualização no início da página
- [ ] Sei usar o Console para procurar erros
- [ ] Meu projeto funciona sem erro vermelho

## Arquivo da aula

A apresentação está disponível em [slide-dia-2.pptx](./slide-dia-2.pptx).

## Próxima aula

No próximo encontro, a página será preparada para funcionar como aplicativo instalável, com manifesto, ícone e visual de aplicativo.
