// MOVIMENTOS 1 e 2: MUDAR A TELA e REAGIR.
// Nossa receita sempre será: ACHAR -> ESCUTAR -> FAZER.

// ACHAR: encontramos na página os três tamanhos e o texto que vai mudar.
const tamanhoSimples = document.getElementById('tamanhoSimples');
const tamanhoDuplo = document.getElementById('tamanhoDuplo');
const tamanhoTriplo = document.getElementById('tamanhoTriplo');
const escolhaAtual = document.getElementById('escolhaAtual');

// ESCUTAR: esperamos um clique no tamanho simples.
// FAZER: mudamos o texto que aparece na tela.
tamanhoSimples.addEventListener('click', function () {
  escolhaAtual.textContent = 'Tamanho: Simples';
});
// ESCUTAR: esperamos um clique no tamanho duplo.
// FAZER: mudamos o texto que aparece na tela.
tamanhoDuplo.addEventListener('click', function () {
  escolhaAtual.textContent = 'Tamanho: Duplo';
});

// ESCUTAR: esperamos um clique no tamanho triplo.
// FAZER: mudamos o texto que aparece na tela.
tamanhoTriplo.addEventListener('click', function () {
  escolhaAtual.textContent = 'Tamanho: Triplo';
});
