# Retomada e validação — 2026-10-05

Branch: `codex/vault-continuity-fixes`. Base: `b72eed591d3164474fa783517dce049f2aa3fe4c` (PR #24 já mesclada).

## Comparação e preservação

O HEAD inicial `a7290c8` e a main remota tinham a mesma árvore `be4865e42893723fe9c67fc9c009972b7f5d6a01`. A main local foi avançada somente por fast-forward, e a branch de trabalho foi criada antes das edições.

A branch histórica `feat/payment-conditions` continua em `3009ac9df3b13d8da4e77b8e6f56097cef36e2b7`; a remota está em `b2192df62d94528799a579abfe92472f2a4a0cd0`. O commit local altera CSS/HTML da base estática e não foi descartado nem reaplicado sobre o React. Nenhuma branch foi excluída ou reescrita.

## Divergências corrigidas

- O botão de contato tinha `type="button"` e não acionava o submit. Agora é submit, os campos são controlados e a confirmação descreve a demonstração sem alegar envio real.
- O README descrevia filtros, mas o CSS os ocultava para manter o Figma aprovado. Removidos controles e estado inacessíveis; documentação alinhada à interface sem filtro.
- Hiroshima e Kyoto abriam os detalhes de Tóquio. Cada card agora usa seus próprios dados demonstrativos.
- O modal passou a usar `dialog.showModal()`, Escape, fundo inerte, bloqueio de rolagem e retorno explícito do foco ao botão de origem.
- As rotas mudavam sem voltar ao topo; agora a mudança de pathname reinicia a posição.
- Botões e texto do banner respeitam a largura disponível em telas estreitas.
- Versões fixadas no conjunto já resolvido pelo lockfile. Ferramentas de build em devDependencies; Node mínimo 22.12.
- Adicionado fallback de SPA em `vercel.json`, conforme a [documentação da Vercel](https://vercel.com/docs/frameworks/frontend/vite#using-vite-to-make-spas).

## Validação executada

Ambiente: Windows, Node 24.14.0, npm 11.9.0. Build servido por `npm run preview -- --host 127.0.0.1 --port 5173`.

| Verificação | Resultado |
| --- | --- |
| `npm install --package-lock-only --ignore-scripts --offline` | Lockfile consistente; nenhuma versão de pacote substituída |
| `npm ls --depth=0` | React/React DOM 19.3.0, Router 7.18.4, Vite 8.3.0, plugin React 6.1.1 |
| `npm run build` | Sucesso; dois avisos de diretiva use client do Router já presentes na base |
| `git diff --check` | Sem erro |
| /, /pacotes, /blog, /contato × 320/360/768/1440 px | 16 combinações sem overflow horizontal nem imagem quebrada |
| Formulário vazio, nome apenas em branco, telefone com letras, e-mail inválido | Validação bloqueia; nenhuma confirmação de sucesso |
| Dados fictícios válidos | Confirmação demonstrativa aparece e campos são limpos |
| Hiroshima e Kyoto | Modal com o destino correspondente |
| Escape no modal de Hiroshima | Modal fecha, rolagem retorna e foco volta ao botão de Hiroshima |
| CTA do modal para contato | Navega para /contato, modal desmonta e scrollY = 0 |
| Menu em 360 px | Abre, navega para /pacotes e fecha |
| Console do navegador durante as verificações | Nenhum erro registrado |

## Hospedagem observada e pendências

A produção Vercel respondeu 200 na home e 404 em /contato antes desta correção. O fallback precisa de publicação para alterar a produção; o preview Vite local não reproduz as regras da plataforma.

O GitHub Pages está configurado como legacy, main, raiz /. A página responde 200 mas referencia /src/main.jsx sem build. “Deploy success” não comprova aplicação funcional. Decidir se o Pages legado será desativado ou receberá configuração própria; manter Vercel como endereço de referência, já informado no GitHub.

O formulário não tem API, armazenamento ou envio real. Redes sociais são placeholders. Não foi feita nova comparação visual integral com os frames Figma nesta retomada; o layout aprovado foi preservado.

Próximo passo: revisar o PR, mesclar quando aprovado e conferir acesso direto/reload nas quatro rotas da Vercel. Registrar a publicação e resolver o destino do Pages legado.
