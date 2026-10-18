# Micael Vasconcelos — currículo e portfólio

Página pessoal em React e Vite com identidade visual em preto e cinza, apresentação profissional, projetos, trajetória, formação e competências.

## Desenvolvimento

Requer Node.js 20.19+ ou 22.12+ e pnpm.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm lint
pnpm build
pnpm preview
```

O `pnpm-lock.yaml` registra as versões utilizadas na validação desta reformulação. O build estático fica em `dist/`.

## Conteúdo e manutenção

- `src/App.jsx`: dados de projetos, experiências, competências e contatos. Atualize período e previsão de conclusão ao evoluir a formação.
- `src/App.css`: layout, estados interativos, adaptação para celulares e impressão.
- `src/index.css`: estilos globais e tipografia, com fontes alternativas locais caso o Google Fonts não esteja disponível.
- `index.html`: idioma, título e descrição para busca.

O conteúdo foi atualizado a partir do currículo fornecido pelo titular e dos projetos Auto Sales Bot e Cadastro de Produtos e Clientes. As vivências em IntenseGP, Accenture e Move-Up são apresentadas no contexto da Residência Tecnológica do Porto Digital. O Autobot tem código privado; a página apresenta apenas uma descrição profissional, sem expor código ou dados operacionais. As ilustrações dos projetos são composições visuais em CSS, não capturas dos sistemas.

## Interações

Filtros de projetos, detalhes expansíveis acessíveis pelo teclado, navegação para seções, menu mobile, links de contato e cópia de e-mail com retorno de sucesso ou falha. O botão Imprimir / salvar PDF abre a impressão do navegador, com estilos próprios e todos os projetos incluídos mesmo quando um filtro está ativo. A preferência do sistema por movimento reduzido é respeitada.

## Validação

Build de produção e ESLint. Verificação no navegador em 320, 390, 768 e 1440 px, incluindo filtros, detalhes, menu, cópia de e-mail (sucesso e falha), acionamento da impressão, conteúdo em modo de impressão, movimento reduzido e ausência de erros JavaScript.
