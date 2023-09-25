# Webpack 5 Boilerplate

## React 18, Typescript

### _ESLint, Jest, RTL, Storybook 7_

[![linting, testing, building](https://github.com/nikmihalevich/webpack5-boilerplate/actions/workflows/main.yml/badge.svg?branch=master)](https://github.com/nikmihalevich/webpack5-boilerplate/actions/workflows/main.yml)
![](https://camo.githubusercontent.com/5fab2edf3816ef9fb3ebcaf6e613fa7b40ff7652ec69e5f6e7f695aa24bf5ce6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d4d49542d626c75652e737667)

## Tech stack:

- [React 18](https://react.dev/blog/2022/03/29/react-v18)
- [Webpack 5](https://webpack.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Stylelint](https://stylelint.io//)
- [Babel](https://babeljs.io/)
- [Jest](https://jestjs.io/ru/)
- [RTL](https://testing-library.com/)
- [Storybook 7](https://storybook.js.org/)

## Config

The app uses absolute path with alias '@'

```ecmascript 6
import App from '@/app/App' // import App.tsx file
```

Also, strict mode is included. In order to initially monitor the high quality of the code.

## Installation

Requires [Node.js](https://nodejs.org/) v18+ to run.

Install the dependencies and devDependencies.

```sh
npm i
```

## Usage

### Development server

_webpack-dev-server_

```bash
npm run start
```

You can view the development server at `localhost:3000`.

### Development build

To make not minified compiled bundle with devs feature.

```bash
npm run build:dev
```

### Production build

To make minified compiled bundle without devs feature.

```bash
npm run build:prod
```

### Linting

_ESLint_

```bash
npm run lint:ts
npm run lint:ts:fix
```

_Stylelint_

```bash
npm run lint:scss
npm run lint:scss:fix
```

_Prettier_

```bash
npm run prettier
```

### Testing

_Unit test - Jest_

```bash
npm run test:unit
```

### Storybook

```bash
npm run storybook # to start storybook
npm run storybook:build # to compile in static
```

## Dependencies

### webpack

- [`webpack`](https://github.com/webpack/webpack) - Module and asset bundler.
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for webpack
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for webpack

### Babel

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ to backwards compatible JavaScript
- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - Smart defaults for Babel
- [`@babel/preset-typescript`](https://babeljs.io/docs/babel-preset-typescript) - Babel preset for TypeScript
  - - [`@babel/plugin-transform-typescript`](https://babeljs.io/docs/babel-plugin-transform-typescript) - Includes in `@babel/preset-typescript`
- [`@babel/plugin-transform-runtime`](https://babeljs.io/docs/babel-plugin-transform-runtime) - A plugin that enables the re-use of Babel's injected helper code to save on codesize.

### Loaders

- [`babel-loader`](https://webpack.js.org/loaders/babel-loader/) - Transpile files with Babel and webpack
- [`sass-loader`](https://webpack.js.org/loaders/sass-loader/) - Load SCSS and compile to CSS
    - [`sass`](https://www.npmjs.com/package/sass) - Node Sass
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolve CSS imports
- [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Inject CSS into the DOM

### Plugins

- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Generate HTML files from template
- [`react-refresh-webpack-plugin`](https://github.com/pmmmwh/react-refresh-webpack-plugin) - To enable "Fast Refresh" for React components.
- [`webpack-bundle-analyzer`](https://github.com/webpack-contrib/webpack-bundle-analyzer) - Visualize size of webpack output files with an interactive zoomable treemap
- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extract CSS into separate files

### Linters

- [`prettier`](https://github.com/prettier/prettier) - Formatting to support a consistent code style 
- [`eslint`](https://github.com/eslint/eslint) - Enforce styleguide across application
- [`eslint-plugin-unused-imports`](https://github.com/sweepline/eslint-plugin-unused-imports) - Find and remove unused ES6 module imports
- [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import) - Support linting of ES6+ import/export syntax
- [`eslint-plugin-jsx-a11y`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y) - Static AST checker for a11y rules on JSX elements
- [`eslint-plugin-promise`](https://github.com/eslint-community/eslint-plugin-promise) - Enforce best practices for JavaScript promises
- [`eslint-plugin-react`](https://github.com/jsx-eslint/eslint-plugin-react) - React-specific linting rules
- [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks) - Enforces the Rules of Hooks
- [`eslint-plugin-storybook`](https://github.com/storybookjs/eslint-plugin-storybook) - Best practice rules for Storybook

## Author

- [Nik Mihalevich](https://github.com/nikmihalevich)

## License

This project is open source and available under the [MIT License](LICENSE).