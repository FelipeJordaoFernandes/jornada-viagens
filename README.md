# Jornada Viagens

Projeto de site responsivo para uma agência de viagens fictícia. A interface foi migrada para React e ajustada a partir dos frames de desktop, tablet e mobile disponíveis no Figma.

## Preview

O projeto possui quatro páginas principais:

- `/`: página inicial com ofertas, categorias, destinos populares, condições de pagamento e depoimentos.
- `/pacotes`: página de pacote de viagem para o Japão.
- `/blog`: post de blog com roteiro de viagem para Tóquio.
- `/contato`: página de contato com formulário.

## Funcionalidades

- Layout responsivo para mobile, tablet e desktop, alinhado ao Figma.
- Navegação entre páginas com React Router.
- Componentes reutilizáveis para cabeçalho, rodapé, títulos, botões, cartões e modal.
- Ofertas e categorias do layout Figma, sem filtro interativo.
- Detalhes de cada destino em modal, com foco contido, fechamento por Escape e retorno do foco ao botão de origem.
- Formulário com campos controlados por estado React e validação nativa. O botão Enviar! valida e limpa os campos; não há API, envio de mensagem nem armazenamento.
- Navegação que abre cada página no topo.

## Tecnologias utilizadas

- React
- React Router
- Vite
- CSS responsivo com media queries

## Estrutura do projeto

```text
jornada-viagens/
|-- src/
|   |-- App.jsx
|   |-- main.jsx
|   `-- styles.css
|-- fonts/
|-- img/
|-- index.html
|-- package.json
`-- README.md
```

## Aprendizados

Este projeto reforça conceitos importantes de desenvolvimento front-end:

- migração de HTML/CSS/JavaScript para React;
- criação de layout responsivo;
- componentes reutilizáveis e gerenciamento de estado;
- rotas no cliente e modais acessíveis;
- validação de formulários;
- integração do build Vite com a hospedagem.

## Status

Requer Node.js 22.12 ou superior. Use `npm ci` para instalar o conjunto do lockfile, `npm run dev` para iniciar o ambiente local e `npm run build` para gerar a versão de produção em `dist/`. `npm run preview` serve esse build localmente. As versões declaradas estão fixadas no conjunto já utilizado, sem atualização automática por `latest`.

## Hospedagem e limites

O endereço de referência é [Jornada Viagens na Vercel](https://jornada-viagens-smoky.vercel.app). `vercel.json` configura o build e o fallback para `index.html`, necessário para abrir ou recarregar `/pacotes`, `/blog` e `/contato` diretamente. Referência: [SPAs Vite na Vercel](https://vercel.com/docs/frameworks/frontend/vite#using-vite-to-make-spas).

Em 2026-10-05, a home da produção respondeu 200 e `/contato` respondeu 404 antes desta correção. A correção precisa ser mesclada e publicada para valer na produção.

O GitHub Pages legado ainda publica a raiz da branch main, que contém JSX-fonte e não o build. O status “success” desse deploy não comprova funcionamento da aplicação. Esse canal requer uma decisão de hospedagem (desativar o legado ou configurar build/base/rotas específicos); não é o preview de referência desta aplicação React.

O formulário é uma demonstração local. Os links de redes sociais são placeholders, e os valores e roteiros são fictícios. Nenhuma reserva ou mensagem é enviada.
