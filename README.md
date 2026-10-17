# Currículo em React

Aplicação de currículo construída com React e Vite.

## Estrutura

```text
.
├── public/            # Arquivos servidos diretamente pelo Vite
├── src/               # Componentes, estilos e recursos importados pela aplicação
│   ├── assets/
│   ├── App.jsx
│   └── main.jsx
├── index.html          # Entrada da aplicação
├── package.json        # Dependências e scripts
├── package-lock.json
└── vite.config.js
```

Os arquivos de configuração do Vite e as dependências ficam na raiz, como esperado pelas ferramentas. Recursos importados pelo React ficam em `src/assets/`; arquivos acessados por URL ficam em `public/`.

## Executar

```bash
npm ci
npm run dev
```

Para gerar a versão de produção, execute `npm run build`. Para verificar o código, execute `npm run lint`.
