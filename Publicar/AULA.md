# Publicação: o aplicativo vira PWA

**Data:** ___ / ___ / 2026

## Tema

O projeto sai do computador e vai para a internet. Depois passa a poder ser
instalado no celular e aberto sem conexão.

## Objetivo

Ao final da aula, o estudante deve ter o aplicativo publicado em um endereço
público, instalável na tela inicial do celular, e funcionando offline.

## Conteúdos trabalhados

- Ícones do aplicativo, incluindo os `maskable`
- `manifest.webmanifest`: nome, cores, ícones e modo de abertura
- Referência do manifesto no HTML
- Service worker e cache de arquivos
- Registro do service worker pelo `script.js`
- Teste offline pelo navegador
- Envio ao Git e publicação pelo GitHub Pages
- Leitura do resultado de um workflow do GitHub Actions

## Atividade

Copiar os dois modelos desta pasta para `dia-01`, completar o manifesto e o
service worker, e publicar.

## Resultado esperado

O endereço público abre o aplicativo. O navegador oferece instalar. Depois de
instalado, ele abre sem barra de navegador e continua funcionando com a
conexão desligada.

## Material desta aula

| Arquivo | O que é |
|---|---|
| `README.md` | Passo a passo completo, com a lista de verificação da entrega |
| `manifest.webmanifest` | Modelo a ser completado e copiado para `dia-01` |
| `sw.js` | Modelo do service worker, a ser completado e copiado |

## Atenção

O workflow publica **somente a pasta `dia-01`**. Os arquivos completados
precisam estar lá, não apenas em `Publicar`.
