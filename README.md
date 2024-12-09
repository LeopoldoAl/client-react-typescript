# Client React Typescript
## Description

This project worked in connection to a REST API, from where it fetches data what show in an interface that has been created with React. It allows to the users display products and can do manipulation, such as adding, updating and deleting.
## The following screenshots display how this app works:

* Getting products from the server
![Getting products from the server](../media/client1.png?raw=true)
* Adding products to the server
![Adding products to the server](../media/adding.png?raw=true)
* Editting products to the server
![Editting products to the server](../media/editing.png?raw=true)
* Updating product availability to the server
![Updating products to the server](../media/updating.png?raw=true)
* Deleting products to the server
![Deleting products to the server](../media/deleting.png)
### In this project, we worked with dependencies such as:
* axios
* react
* react-dom
* react-router-dom
* valibot
### Also we worked with development depenncies such as:
- @eslint/js
- @types/react
- @types/react-dom
- @vitejs/plugin-react-swc
- eslint
- eslint-plugin-react-hooks
- eslint-plugin-react-refresh
- globals
- postcss
- tailwindcss
- typescript
- typescript-eslint
- vite
## About the deployment
As this project had been created using **Vite**, the most appropriately would be to use a server that works with **Vite**, these servers could be for example **[Netlify](https://www.netlify.com/)**, **[Vercel](https://vercel.com/)** and so on.
In order to build this project, we use the next command combination:
```
npm install
```
Our output directory is:
```
dist
```
Installation command:
```
npm install
```
Something very important are the environment variables, the environment variable used by this project is the following:
- **VITE_API_URL**: this is the url that provides our hosting services and should be for example ```https://example.com``` or ```http://localhost:3000``` but in both cases can never be for example ~~```https://example.com/```~~ or ~~```http://localhost:3000/```~~, it means the url without '/' to the end of the url.

This project was built using Vite, React and Typescript technologies. And the commands used for running this application in dev mode is:
```
npm run dev
```

While to compile this project, we use this:
```
npm run build
```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
