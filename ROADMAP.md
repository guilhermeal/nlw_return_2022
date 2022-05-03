# Roadmap by class

## First steps

#### 1. Create project with Vite / React - TS

`npm create vite@latest`

#### 2. Instalar as dependencias

`npm install` ou `yarn`

#### 3. Limpar estrutura

Remove:

- \*.css
- \*.svg

_Não esquecer de remover as importações dentro dos \*.tsx_

- Remover o conteúdo de dentro do Return no arquivo `src\App.tsx` e colocar algum Html simples so pra exibir se esta funcionando;

#### 4. Instalar lib Tailwind CSS

`yarn add -D tailwindcss postcss autoprefix`
ou
`npm install -D tailwindcss postcss autoprefixer `
em seguida executa:
`npx tailwindcss init -p`

_Ver documentação oficial!_
https://tailwindcss.com/docs

- Ajusta `tailwindcss.config.js`:

De:

```
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Para:

```
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- Criar arquivo: `src\global.css` e adiciona:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Importa o `global.css` ao `main.tsx`:

```
import "./global.css";
```

#### 5. Instalar lib de Icons Phosporicon,

`yarn add phosphor-react`

#### 6. Instalar lib para acessibilidade Headless UI,

`yarn add @headlessui/react`

_Ver documentação oficial!_
https://headlessui.dev/

## Tips & Tricks

- <React.StrictMode> : Serve para...
