# Publicação do aplicativo como PWA

Este guia mostra como transformar o projeto **Monte seu Lanche** em uma Progressive Web App, publicar o resultado no GitHub Pages e conferir se a instalação e o funcionamento offline estão corretos.

O projeto já possui HTML, CSS e JavaScript. A próxima etapa consiste em acrescentar os arquivos e configurações próprios de uma PWA.

## O que será acrescentado

Ao terminar a atividade, a pasta deverá ter esta estrutura:

```text
dia-01/
├── index.html
├── estilo.css
├── script.js
├── manifest.webmanifest
├── sw.js
└── icons/
    ├── icon-192.png
    ├── icon-512.png
    ├── icon-maskable-192.png
    └── icon-maskable-512.png
```

Cada item tem uma responsabilidade:

| Arquivo | Responsabilidade |
|---|---|
| `index.html` | Exibe a interface e referencia o manifesto |
| `estilo.css` | Define a aparência da página |
| `script.js` | Controla a interação e registra o service worker |
| `manifest.webmanifest` | Informa nome, cores, ícones e modo de abertura do aplicativo |
| `sw.js` | Controla o cache e permite abrir o aplicativo sem conexão |
| `icons/` | Guarda os ícones usados na instalação |

Os arquivos `manifest.webmanifest` e `sw.js` estão na pasta `Publicar` como modelos. Eles ainda precisam ser estudados, completados e copiados para `dia-01` durante a aula.

Antes de começar, copie os dois modelos:

```text
Publicar/manifest.webmanifest  ->  dia-01/manifest.webmanifest
Publicar/sw.js                 ->  dia-01/sw.js
```

Não altere somente os arquivos dentro de `Publicar`. O workflow do GitHub Pages publica o conteúdo de `dia-01`, portanto as versões prontas precisam estar nessa pasta.

## 1. Preparar os ícones

Crie a pasta `icons` dentro de `dia-01`.

O aplicativo precisa, no mínimo, de dois ícones PNG:

```text
icons/icon-192.png
icons/icon-512.png
```

Os números indicam a largura e a altura da imagem em pixels:

- `icon-192.png` deve medir 192 por 192 pixels;
- `icon-512.png` deve medir 512 por 512 pixels.

Também é recomendado criar versões `maskable`:

```text
icons/icon-maskable-192.png
icons/icon-maskable-512.png
```

Ícones `maskable` possuem uma margem de segurança. Isso evita que partes importantes do desenho sejam cortadas quando o celular aplica um formato circular ou arredondado.

Use nomes de arquivo simples, sem espaços e sem acentos. Confira se a extensão real é `.png`.

## 2. Completar o manifesto

Copie `Publicar/manifest.webmanifest` para `dia-01/manifest.webmanifest` e abra a cópia.

O manifesto descreve como o site aparecerá depois de instalado. Os campos principais são:

| Campo | Função |
|---|---|
| `name` | Nome completo do aplicativo |
| `short_name` | Nome curto exibido abaixo do ícone |
| `description` | Pequena descrição do aplicativo |
| `start_url` | Página aberta ao iniciar o aplicativo |
| `scope` | Limite de navegação controlado pela PWA |
| `display` | Define se o aplicativo abre com ou sem a interface do navegador |
| `background_color` | Cor usada durante a inicialização |
| `theme_color` | Cor usada pelo navegador e pelo sistema operacional |
| `icons` | Lista de ícones disponíveis |

Para este repositório, mantenha `start_url` e `scope` como `./`:

```json
"start_url": "./",
"scope": "./"
```

O GitHub Pages publica o projeto em um endereço semelhante a:

```text
https://lgsn0w.github.io/UC08/
```

O caminho relativo `./` funciona tanto no computador quanto no endereço publicado. Um caminho absoluto como `/` apontaria para `https://lgsn0w.github.io/`, fora da pasta do projeto.

### Cuidados com JSON

O formato JSON possui regras rígidas:

- use aspas duplas;
- separe os campos com vírgulas;
- não deixe uma vírgula depois do último item;
- não escreva comentários com `//`;
- mantenha os pares de chaves e colchetes completos.

Um erro de pontuação pode fazer o navegador ignorar todo o manifesto.

## 3. Referenciar o manifesto no HTML

Abra `index.html` e acrescente estas linhas dentro de `<head>`:

```html
<meta name="theme-color" content="#ea580c">
<link rel="manifest" href="./manifest.webmanifest">
<link rel="icon" href="./icons/icon-192.png">
<link rel="apple-touch-icon" href="./icons/icon-192.png">
```

O início do documento ficará parecido com este exemplo:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#ea580c">

  <title>Monte seu Lanche | Lanche do Código</title>

  <link rel="stylesheet" href="./estilo.css">
  <link rel="manifest" href="./manifest.webmanifest">
  <link rel="icon" href="./icons/icon-192.png">
  <link rel="apple-touch-icon" href="./icons/icon-192.png">
</head>
```

Os caminhos começam com `./` porque todos esses arquivos estão dentro da mesma pasta publicada.

## 4. Completar o service worker

Copie `Publicar/sw.js` para `dia-01/sw.js` e abra a cópia.

Um service worker executa separadamente da página. Ele pode guardar arquivos no cache e responder a solicitações mesmo quando não existe conexão com a internet.

As três etapas principais são:

1. `install`: cria o cache e salva os arquivos essenciais;
2. `activate`: remove caches antigos;
3. `fetch`: procura uma resposta no cache antes de acessar a rede.

O nome do cache funciona como uma versão:

```javascript
const NOME_DO_CACHE = 'lanche-do-codigo-v1';
```

Quando um arquivo importante mudar, altere o número:

```javascript
const NOME_DO_CACHE = 'lanche-do-codigo-v2';
```

Sem essa mudança, o navegador pode continuar exibindo arquivos antigos.

### Arquivos que devem entrar no cache

Use caminhos relativos ao local do service worker:

```javascript
const ARQUIVOS_DO_APP = [
  './',
  './index.html',
  './estilo.css',
  './script.js',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png'
];
```

Não adicione ao cache um arquivo que ainda não existe. Se um único caminho estiver errado, a instalação inicial do cache pode falhar.

## 5. Registrar o service worker

O navegador não executa `sw.js` apenas porque o arquivo existe. Ele precisa ser registrado pelo JavaScript da página.

Acrescente este código no final de `script.js`:

```javascript
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker
      .register('./sw.js')
      .then(function () {
        console.log('Service Worker registrado.');
      })
      .catch(function (erro) {
        console.error('Erro ao registrar Service Worker:', erro);
      });
  });
}
```

A verificação inicial impede erros em navegadores sem suporte a service workers.

## 6. Testar no computador

Não teste uma PWA abrindo o arquivo com um endereço iniciado por `file://`.

Use um servidor local. Uma opção simples é a extensão Live Server do Visual Studio Code:

1. abra a pasta do projeto no Visual Studio Code;
2. instale a extensão Live Server;
3. abra `dia-01/index.html`;
4. clique em **Go Live**;
5. abra o endereço `http://localhost` apresentado pela extensão.

`localhost` é aceito como ambiente seguro para desenvolvimento.

### Conferência no Chrome ou Edge

1. abra as ferramentas do desenvolvedor com `F12`;
2. acesse a aba **Application**;
3. abra a seção **Manifest**;
4. confira nome, cores e ícones;
5. abra a seção **Service Workers**;
6. verifique se o service worker está ativado;
7. abra **Cache Storage** e confira os arquivos salvos.

### Teste offline

1. carregue a página pelo menos uma vez;
2. abra as ferramentas do desenvolvedor;
3. acesse a aba **Network**;
4. selecione **Offline**;
5. atualize a página.

Se a página continuar abrindo, os arquivos essenciais foram armazenados corretamente.

Depois do teste, volte a rede para **No throttling**.

## 7. Salvar no Git

Antes de enviar, confira os arquivos:

```bash
git status
```

Adicione as alterações:

```bash
git add dia-01
```

Crie um commit:

```bash
git commit -m "Adiciona estrutura inicial da PWA"
```

Envie para o GitHub:

```bash
git push origin main
```

Não envie arquivos com senhas, tokens ou informações pessoais.

## 8. Publicar no GitHub Pages

O repositório já possui o workflow:

```text
.github/workflows/publicar-dia-01.yml
```

Ele executa quatro tarefas:

1. baixa os arquivos do repositório;
2. configura o GitHub Pages;
3. empacota o conteúdo de `dia-01`;
4. publica o pacote.

Toda vez que um commit chega à branch `main`, o workflow é executado automaticamente.

### Ativar o GitHub Pages pela primeira vez

1. abra o repositório `UC08` no GitHub;
2. clique em **Settings**;
3. abra **Pages** no menu lateral;
4. em **Build and deployment**, selecione **GitHub Actions**;
5. volte para a página principal do repositório;
6. abra a aba **Actions**;
7. selecione o workflow **Publicar Dia 1 no GitHub Pages**;
8. aguarde a conclusão com o indicador verde.

O endereço esperado é:

```text
https://lgsn0w.github.io/UC08/
```

Uma publicação pode levar alguns minutos para aparecer.

### Executar o workflow manualmente

O workflow possui a opção `workflow_dispatch`. Para executá-lo sem criar outro commit:

1. abra **Actions**;
2. selecione **Publicar Dia 1 no GitHub Pages**;
3. clique em **Run workflow**;
4. escolha a branch `main`;
5. confirme em **Run workflow**.

## 9. Conferir a versão publicada

Abra o endereço do GitHub Pages e confira:

- a página carrega sem erro;
- CSS e JavaScript funcionam;
- o manifesto aparece na aba Application;
- os ícones aparecem corretamente;
- o service worker está ativado;
- a página abre sem conexão depois do primeiro acesso;
- a opção de instalar aparece no navegador compatível;
- o aplicativo instalado abre sem a barra normal do navegador.

O GitHub Pages já utiliza HTTPS. Isso permite o funcionamento do service worker no endereço publicado.

## 10. Erros comuns

### Manifesto não encontrado

Confira o HTML:

```html
<link rel="manifest" href="./manifest.webmanifest">
```

Confira também se o arquivo está dentro de `dia-01` e foi enviado ao GitHub.

### Ícone não aparece

Confira:

- nome do arquivo;
- uso correto de letras maiúsculas e minúsculas;
- extensão `.png`;
- dimensões da imagem;
- caminho informado no manifesto.

GitHub Pages diferencia letras maiúsculas de minúsculas. `Icon-192.png` e `icon-192.png` são nomes diferentes.

### Service worker não registra

Confira:

- se o site está em HTTPS ou localhost;
- se `sw.js` está dentro de `dia-01`;
- se o registro usa `./sw.js`;
- se existe erro de sintaxe no arquivo;
- se todos os caminhos usados durante a instalação existem.

### Página continua antiga

O cache pode estar preservando a versão anterior.

1. altere o nome do cache de `v1` para `v2`;
2. publique novamente;
3. abra Application, Service Workers;
4. clique em **Unregister**, se necessário;
5. limpe os dados do site;
6. atualize a página.

### Funciona localmente, mas não no GitHub Pages

Normalmente isso acontece por causa de caminhos absolutos.

Evite:

```text
/estilo.css
/script.js
/sw.js
```

Prefira:

```text
./estilo.css
./script.js
./sw.js
```

### O workflow falhou

1. abra a aba **Actions**;
2. selecione a execução com erro;
3. abra o trabalho chamado `publicar`;
4. encontre a primeira etapa marcada em vermelho;
5. leia a mensagem antes de executar novamente.

Também confira se o GitHub Pages está configurado para usar GitHub Actions.

## 11. Lista de verificação da entrega

- [ ] A pasta `icons` foi criada.
- [ ] Os ícones possuem as dimensões corretas.
- [ ] `manifest.webmanifest` contém nome, cores, caminhos e modo de exibição.
- [ ] O manifesto foi referenciado em `index.html`.
- [ ] A cor do tema foi declarada no HTML.
- [ ] `sw.js` armazena os arquivos essenciais.
- [ ] O service worker foi registrado em `script.js`.
- [ ] O projeto foi testado em localhost.
- [ ] O teste offline funcionou.
- [ ] As alterações foram enviadas para a branch `main`.
- [ ] O workflow terminou sem erros.
- [ ] A versão publicada foi testada em um celular ou navegador compatível.

## 12. Desafio adicional

Depois que a versão básica estiver funcionando:

1. crie uma página `offline.html`;
2. mostre essa página quando uma navegação falhar;
3. acrescente capturas de tela ao manifesto;
4. crie um botão próprio para iniciar a instalação;
5. salve o último pedido com `localStorage`;
6. teste a atualização automática do cache.

Faça uma melhoria por vez e teste antes de continuar.
