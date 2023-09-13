# Installation
#
## Prérequis

* [Node.js](https://nodejs.org/en/) (version 16.20.1 ou supérieure)

#### Gestionnaire de packages (choisir l'un des deux) :

* [NPM](https://www.npmjs.com/) (version 8.19.4 ou supérieure)
* [PNPM](https://pnpm.io/) (version 6.14.11 ou supérieure)

## Installation

Installer le code source via git : 

```bash
git clone git@github.com:NeeZiaa/Interface-Builder.git
```

Ou sur [github.com](https://github.com/NeeZiaa/Interface-Builder) en téléchargeant le code source.

## Installation des dépendances

Avec NPM : 

```bash
npm install
```

Avec PNPM : 

```bash
pnpm install
```

## Lancement de l'application en mode développement

Avec NPM : 

```bash
npm run dev
```

Avec PNPM : 

```bash
pnpm run dev
```

## Build de l'application

Avec NPM : 

```bash
npm run build
```

Avec PNPM : 

```bash
pnpm run build
```

## Architecture du projet

```bash
├───.vscode
├───dist
├───node_modules
├───src
│   ├───assets
│   │   ├───fonts
│   │   ├───images
│   │   ├───sounds
│   ├───components
│   │   ├───containers
│   │   ├───display
│   │   ├───formsElements
│   │   ├───forms
│   ├───providers
│   ├───styles
│   ├───types
│   ├───utils
│   ├───App.tsx
│   ├───main.tsx
├───.env
├───.eslintrc.cjs
├───.gitignore
├───index.html
├───package.json
├───pnpm-lock.yaml
├───README.md
├───tsconfig.json
├───webpack.config.js
└───yarn.lock
```


## Un problème ?

Si vous rencontrez un problème, n'hésitez pas à ouvrir une [issue](https://github.com/NeeZiaa/Interface-Builder/issues/new) sur le dépôt GitHub du projet ou à me contacter sur [Discord](https://discord.com/users/535118744926683166).