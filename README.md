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
- Filtro de ofertas por categoria, detalhes de pacote e formulário de contato controlados por estado React.

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

- organização de arquivos HTML, CSS e JavaScript;
- criação de layout responsivo;
- componentização visual com CSS separado por seções;
- manipulação do DOM;
- validação de formulários;
- melhoria progressiva sem remover a funcionalidade básica do HTML.

## Status

Use `npm run dev` para iniciar o ambiente local e `npm run build` para gerar a versão de produção.
