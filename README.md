# Projet

Portfolio de Thibault VOLLET

## Attente du projet

Réalisation de mon portfolio personnel.

## Table des matières

- [Projet](#projet)
  - [Attente du projet](#attente-du-projet)
  - [Table des matières](#table-des-matières)
  - [Les outils](#les-outils)
    - [VS Code](#vs-code)
    - [Les navigateurs](#les-navigateurs)
      - [Extensions pour les navigateurs](#extensions-pour-les-navigateurs)
        - [SeoQuake](#seoquake)
        - [Wave](#wave)
    - [NodeJS](#nodejs)
      - [Extensions VS Code pour NodeJS](#extensions-vs-code-pour-nodejs)
    - [Git](#git)
      - [Extensions VS Code pour Git](#extensions-vs-code-pour-git)
  - [Les extensions non liées à un langage](#les-extensions-non-liées-à-un-langage)
    - [Pour le formatage](#pour-le-formatage)
      - [EditorConfig](#editorconfig)
      - [Prettier](#prettier)
    - [Pour la qualité du code](#pour-la-qualité-du-code)
      - [Webhint](#webhint)
        - [Extensions pour les navigateurs pour Webhint](#extensions-pour-les-navigateurs-pour-webhint)
      - [LightHouse](#lighthouse)
        - [Extensions pour les navigateurs pour LightHouse](#extensions-pour-les-navigateurs-pour-lighthouse)
      - [SonarLint](#sonarlint)
      - [Axe](#axe)
        - [Extensions pour les navigateurs pour Axe](#extensions-pour-les-navigateurs-pour-axe)
    - [Pour le développement](#pour-le-développement)
      - [Live server](#live-server)
        - [Extensions pour les navigateurs pour Live Server](#extensions-pour-les-navigateurs-pour-live-server)
      - [Todo Tree](#todo-tree)
      - [Code Spell Checker](#code-spell-checker)
      - [Gremlins tracker for Visual Studio Code](#gremlins-tracker-for-visual-studio-code)
      - [:emojisense](#emojisense)
      - [Browserslist](#browserslist)
    - [Autres](#autres)
  - [Les langages](#les-langages)
    - [Markdown](#markdown)
      - [Extensions VS Code pour Markdown](#extensions-vs-code-pour-markdown)
      - [Formatage pour Markdown](#formatage-pour-markdown)
      - [Linter pour Markdown](#linter-pour-markdown)
    - [JSON](#json)
      - [Extensions VS Code pour JSON](#extensions-vs-code-pour-json)
      - [Formatage pour JSON](#formatage-pour-json)
      - [Linter pour JSON](#linter-pour-json)
    - [HTML](#html)
      - [Extensions VS Code pour HTML](#extensions-vs-code-pour-html)
      - [Extensions pour les navigateurs pour HTML](#extensions-pour-les-navigateurs-pour-html)
      - [Formatage pour HTML](#formatage-pour-html)
      - [Linter pour HTML](#linter-pour-html)
    - [CSS](#css)
      - [Extensions VS Code pour CSS](#extensions-vs-code-pour-css)
      - [Formatage pour CSS](#formatage-pour-css)
      - [Linter pour CSS](#linter-pour-css)
      - [Documentation pour CSS](#documentation-pour-css)
    - [SASS](#sass)
      - [Extensions VS Code pour SASS](#extensions-vs-code-pour-sass)
      - [Formatage pour SASS](#formatage-pour-sass)
      - [Linter pour SASS](#linter-pour-sass)
      - [Automatisation pour SASS](#automatisation-pour-sass)
      - [Documentation pour SASS](#documentation-pour-sass)
    - [JS](#js)
      - [Extensions VS Code pour JS](#extensions-vs-code-pour-js)
      - [Formatage pour JS](#formatage-pour-js)
      - [Linter pour JS](#linter-pour-js)
      - [Documentation pour JS](#documentation-pour-js)
  - [Les frameworks CSS](#les-frameworks-css)
    - [Bootstrap](#bootstrap)
      - [Extensions VS Code pour Bootstrap](#extensions-vs-code-pour-bootstrap)

## Les outils

### VS Code

Installez-le depuis le [site officiel](https://code.visualstudio.com/).

Tapez `@recommended` dans le filtre des extensions ou
`Show recommended extensions` dans la palette pour voir la liste des extensions
recommandées. Une icône en forme de nuage permet des les installer.

### Les navigateurs

- [Firefox Developer Edition](https://www.mozilla.org/fr/firefox/developer/)
- [Chrome for developers](https://www.google.com/intl/fr/chrome/dev/)
- [Edge](https://developer.microsoft.com/fr-fr/microsoft-edge/)

#### Extensions pour les navigateurs

##### SeoQuake

- [Firefox](https://addons.mozilla.org/fr/firefox/addon/seoquake-seo-extension/)
- [Chrome](https://chrome.google.com/webstore/detail/seoquake/akdgnmcogleenhbclghghlkkdndkjdjc)

##### Wave

- [Firefox](https://addons.mozilla.org/fr/firefox/addon/wave-accessibility-tool/)
- [Chrome](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh)
- [Edge](https://microsoftedge.microsoft.com/addons/detail/wave-evaluation-tool/khapceneeednkiopkkbgkibbdoajpkoj?hl=fr)

### NodeJS

Installez-le depuis le [site officiel](https://nodejs.org) en choisissant de
préférence la version LTS et en évitant de cocher la case demandant d'installer
les outils supplémentaires pour compiler des sources (Chocolatey).

Vous pouvez simplement taper `npm i` dans le terminal pour installer tous les
packages et avoir un projet fonctionnel.

Sinon, renommer, déplacer ou supprimer les fichiers `package.json`,
`package_lock.json` et continuez la lecture.

Dans le terminal, tapez `npm init` et répondez aux questions ou `npm init -y`
pour accepter les réponses par défaut.

#### Extensions VS Code pour NodeJS

- npm intellisense
- Node.js Modules Intellisense
- Dependency Analytics

Dans le fichier `.vscode/settings.json`, ajoutez :

```json
{
  "redhat.telemetry.enabled": false
}
```

### Git

Installez-le depuis le [site officiel](https://git-scm.com/downloads).

Si c'est votre première installation de Git, dans le terminal, tapez :

```shell
git config --global core.editor "code --wait"
git config --global core.autocrlf input
git config --global user.name "Prénom NOM"
git config --global user.email prenom.nom@domain.ext
git config --global alias.br branch
git config --global alias.co checkout
git config --global alias.ci commit
git config --global alias.fe fetch
git config --global alias.lg "log --graph --date=relative --pretty=tformat:'%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%an %ad)%Creset'"
git config --global alias.me merge
git config --global alias.pl pull
git config --global alias.ps push
git config --global alias.st status
git config --global alias.sw switch
```

Dans le terminal, tapez `git init` pour initialiser le projet.

#### Extensions VS Code pour Git

- GitLens — Git supercharged
- GitHub Pull Requests and Issues
- Git Graph
- gitignore
- GitHub Repositories

## Les extensions non liées à un langage

### Pour le formatage

#### EditorConfig

Installez l'extension pour VS Code `EditorConfig for VS Code` puis faites un
clic droit à un endroit vide dans l'explorateur de fichiers et cliquez sur
`Generate .editorconfig` ou tapez `Generate .editorconfig` dans la palette.

Un exemple de configuration serait :

```ini
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.{css,js,json,scss}]
indent_size = 4
```

L'ensemble des options est disponible sur le
[site d'EditorConfig](https://spec.editorconfig.org/).

#### Prettier

Installez l'extension pour VS Code `Prettier - Code formatter` puis dans le
fichier `.vscode/settings.json`, ajoutez :

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

Installez le package `prettier` en tapant dans le terminal `npm i -D prettier`
ou `npm install --save-dev prettier`.

Le fichier de configuration doit se nommer `.prettierrc` et être à la racine du
projet. Un exemple de configuration serait :

```json
{
  "proseWrap": "always",
  "htmlWhitespaceSensitivity": "ignore"
}
```

L'ensemble des options est disponible sur le
[site de Prettier](https://prettier.io/docs/en/options.html).

Si des fichiers ou des dossiers doivent être ignorés, il faut créer un fichier
`.prettierignore` à la racine du projet. Un exemple de configuration serait :

```text
docs
node_modules
reports
```

Ajoutez dans le fichier `package.json` :

```json
{
  "scripts": {
    "format": "npx prettier --check --loglevel log .",
    "format-css": "npx prettier --check --loglevel log **/*.css",
    "format-html": "npx prettier --check --loglevel log **/*.html",
    "format-js": "npx prettier --check --loglevel log **/*.js",
    "format-json": "npx prettier --check --loglevel log **/*.json",
    "format-md": "npx prettier --check --loglevel log **/*.md",
    "format-scss": "npx prettier --check --loglevel log **/*.scss",
    "format-ts": "npx prettier --check --loglevel log src/ts/**/*.ts"
  }
}
```

Vous pourrez lancer depuis le terminal `npm run format` pour vérifier le
formatage des fichiers du projet ou `npm run format-css` pour limiter aux CSS
par exemple.

### Pour la qualité du code

#### Webhint

Installez l'extension pour VS Code `Webhint`.

Installez les packages `hint` et `open-cli` en tapant dans le terminal
`npm i -D hint open-cli` ou `npm install --save-dev hint open-cli`.

Le fichier de configuration doit se nommer `.hintrc` et être à la racine du
projet. Le plus simple est de tapez `npm init hintrc` et de choisir "predefined"
puis "web-recommended" dans les options pour avoir une configuration comme :

```json
{
  "extends": ["web-recommended"]
}
```

L'ensemble des options est disponible sur le
[site de Webhint](https://webhint.io/docs/user-guide/configuring-webhint/summary/).

Si des fichiers ou des dossiers doivent être ignorés, il faut ajouter une option
au fichier `.hintrc` à la racine du projet. Un exemple de configuration serait :

```json
{
  "extends": ["web-recommended"],
  "ignoredUrls": [
    {
      "domain": "cdn\\.jsdelivr\\.net/.*",
      "hints": ["*"]
    },
    {
      "domain": "fonts\\.googleapis\\.com/.*",
      "hints": ["*"]
    },
    {
      "domain": "fonts\\.gstatic\\.com/.*",
      "hints": ["*"]
    }
  ]
}
```

Ajoutez dans le fichier `package.json` :

```json
{
  "scripts": {
    "webhint": "npx mkdirp reports/webhint && npx hint http://localhost:5500/ --output ./reports/webhint && npx open-cli http://localhost:5500/reports/webhint/http-localhost-5500.html"
  }
}
```

Vous pourrez lancer depuis le terminal `npm run webhint` pour vérifier la
qualité des fichiers du projet.

##### Extensions pour les navigateurs pour Webhint

- [Firefox](https://addons.mozilla.org/fr/firefox/addon/webhint/)
- [Chrome](https://chrome.google.com/webstore/detail/webhint/gccemnpihkbgkdmoogenkbkckppadcag?hl=fr)
- [Edge](https://microsoftedge.microsoft.com/addons/detail/webhint/mlgfbihcfnkaenjpdcngdnhcpkdmcdee)

#### LightHouse

Installez le package `lighthouse` en tapant dans le terminal
`npm i -D lighthouse` ou `npm install --save-dev lighthouse`.

L'ensemble des options est disponible sur le
[site de LightHouse](https://github.com/GoogleChrome/lighthouse#cli-options).

Ajoutez dans le fichier `package.json` :

```json
{
  "scripts": {
    "lighthouse": "npx mkdirp reports/lighthouse && npx lighthouse http://localhost:5500/ --output-path ./reports/lighthouse/index.html --view"
  }
}
```

Vous pourrez lancer depuis le terminal `npm run lighthouse` pour vérifier la
qualité des fichiers du projet.

##### Extensions pour les navigateurs pour LightHouse

- [Firefox](https://addons.mozilla.org/fr/firefox/addon/google-lighthouse/)
- [Chrome](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk/related?hl=fr)

#### SonarLint

Installez l'extension pour VS Code `SonarLint` puis dans le fichier
`.vscode/settings.json`, ajoutez :

```json
{
  "sonarlint.disableTelemetry": true
}
```

#### Axe

Installez l'extension pour VS Code `axe Accessibility Linter`.

##### Extensions pour les navigateurs pour Axe

- [Firefox](https://addons.mozilla.org/fr/firefox/addon/axe-devtools/)
- [Chrome](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)
- [Edge](https://microsoftedge.microsoft.com/addons/detail/axe-web-accessibility-t/kcenlimkmjjkdfcaleembgmldmnnlfkn)

### Pour le développement

#### Live server

Installez l'extension pour VS Code `Live Server` puis dans le fichier
`.vscode/settings.json`, ajoutez :

```json
{
  "liveServer.settings.useWebExt": true
}
```

##### Extensions pour les navigateurs pour Live Server

- [Firefox](https://addons.mozilla.org/fr/firefox/addon/live-server-web-extension/)
- [Chrome](https://chrome.google.com/webstore/detail/live-server-web-extension/fiegdmejfepffgpnejdinekhfieaogmj?hl=fr)

#### Todo Tree

Installez l'extension pour VS Code `Todo Tree` puis dans le fichier
`.vscode/settings.json`, ajoutez :

```json
{
  "todo-tree.general.tags": ["BUG", "HACK", "FIXME", "TODO", "XXX", "[ ]"]
}
```

#### Code Spell Checker

Installez l'extension pour VS Code `Code Spell Checker`.

Installez les packages `cspell`, `@cspell/dict-fr-fr` et
`@cspell/dict-lorem-ipsum` en tapant dans le terminal
`npm i -D cspell @cspell/dict-fr-fr @cspell/dict-lorem-ipsum` ou
`npm install --save-dev cspell @cspell/dict-fr-fr @cspell/dict-lorem-ipsum`,
puis :

```shell
npx cspell link add @cspell/dict-fr-fr
npx cspell link add @cspell/dict-lorem-ipsum
```

Le fichier de configuration doit se nommer `.cspell.json` et être à la racine du
projet. Un exemple de configuration serait :

```json
{
  "ignorePaths": [
    "**/node_modules/**",
    "**/docs/**",
    "**/.git/**",
    "**/reports/**",
    ".vscode",
    "package.json",
    "package-lock.json"
  ],
  "language": "fr-fr,en,lorem-ipsum",
  "version": "0.2",
  "words": []
}
```

L'ensemble des options est disponible sur le
[site de cspell](https://cspell.org/configuration/).

#### Gremlins tracker for Visual Studio Code

Installez l'extension pour VS Code `Gremlins tracker for Visual Studio Code`
puis dans le fichier `.vscode/settings.json`, ajoutez :

```json
{
  "gremlins.showInProblemPane": true
}
```

#### :emojisense

Installez l'extension pour VS Code `:emojisense:` puis dans le fichier
`.vscode/settings.json`, ajoutez :

````json
{
  "emojisense.languages": {
    "git-commit": true,
    "html": true,
    "markdown": true,
    "plaintext": {
      "emojiDecoratorsEnabled": false,
      "markupCompletionsEnabled": false
    },
    "scminput": true
  }
}

#### Partial Diff

Installez l'extension pour VS Code `Partial Diff` puis dans le fichier
`.vscode/settings.json`, ajoutez :

```json
{
  "partialDiff.enableTelemetry": false
}
````

#### Browserslist

Installez l'extension pour VS Code `browserslist`.

Installez les packages `browserslist`, `update-browserslist-db`
`@github/browserslist-config` en tapant dans le terminal
`npm i -D browserslist update-browserslist-db @github/browserslist-config` ou
`npm install --save-dev browserslist update-browserslist-db @github/browserslist-config`.

Le fichier de configuration doit se nommer `.browserslistrc` et être à la racine
du projet. Un exemple de configuration serait :

```ini
defaults
maintained node versions

extends @github/browserslist-config
```

L'ensemble des options est disponible sur le
[site de browserslist](https://browsersl.ist/).

Vous pourrez lancer depuis le terminal `npx browserslist` pour vérifier la liste
des navigateurs supportés par le projet, ou bien `npx update-browserslist-db`
pour mettre à jour la liste des navigateurs supportés par le projet.

### Autres

- indent-rainbow
- IntelliCode
- Output Colorizer
- Path Intellisense
- SVG
- TabOut

Dans le fichier `.vscode/settings.json`, ajoutez :

```json
{
  "editor.codeActionsOnSave": {
    "source.addMissingImports": true,
    "source.fixAll": true,
    "source.organizeImports": true
  },
  "editor.formatOnSave": true,
  "editor.linkedEditing": true,
  "editor.stickyScroll.enabled": true,
  "editor.unicodeHighlight.invisibleCharacters": false,
  "editor.wordWrap": "wordWrapColumn",
  "editor.wordWrapColumn": 120,
  "telemetry.telemetryLevel": "off",
  "terminal.integrated.defaultProfile.windows": "Command Prompt",
  "window.commandCenter": true,
  "workbench.editor.wrapTabs": true
}
```

## Les langages

### Markdown

#### Extensions VS Code pour Markdown

- Markdown All in One
- markdownlint

Dans le fichier `.vscode/settings.json`, ajoutez :

```json
{
  "markdown.validate.enabled": true
}
```

#### Formatage pour Markdown

Prettier prend en charge Markdown.

#### Linter pour Markdown

Installez le package `markdownlint-cli` en tapant dans le terminal
`npm i -D markdownlint-cli` ou `npm install --save-dev markdownlint-cli`.

Le fichier de configuration doit se nommer `.markdownlintrc` et être à la racine
du projet. Un exemple de configuration serait :

```json
{
  "default": false
}
```

L'ensemble des options est disponible sur le
[site de markdownlint-cli](https://github.com/igorshubovych/markdownlint-cli#configuration).

Si des fichiers ou des dossiers doivent être ignorés, il faut créer un fichier
`.markdownlintignore` à la racine du projet. Un exemple de configuration serait
:

```text
docs
node_modules
reports
```

Ajoutez dans le fichier `package.json` :

```json
{
  "scripts": {
    "lint-md": "npx markdownlint-cli --fix **/*.md"
  }
}
```

Vous pourrez lancer depuis le terminal `npm run lint-md` pour vérifier le code
des fichiers Markdown du projet.

### JSON

#### Extensions VS Code pour JSON

- json (ZainChen.json)

#### Formatage pour JSON

Prettier prend en charge JSON.

#### Linter pour JSON

Installez le package `@prantlf/jsonlint` en tapant dans le terminal
`npm i -D @prantlf/jsonlint` ou `npm install --save-dev @prantlf/jsonlint`.

Le fichier de configuration doit se nommer `.jsonlintrc` et être à la racine du
projet. Un exemple de configuration serait :

```json
{
  "comments": true,
  "trailing-commas": false,
  "no-duplicate-keys": true,
  "log-files": true,
  "compact": true,
  "continue": true,
  "patterns": [
    "**/*.json",
    "**/.*rc",
    "!**/.browserlistrc",
    "!**/docs",
    "!**/node_modules",
    "!**/reports"
  ],
  "sort-keys": false,
  "trailing-newline": true,
  "trim-trailing-commas": true,
  "in-place": false,
  "diff": true,
  "check": true
}
```

L'ensemble des options est disponible sur le
[site de](https://github.com/prantlf/jsonlint#options)jsonlint.

Ajoutez dans le fichier `package.json` :

```json
{
  "scripts": {
    "lint-json": "npx jsonlint"
  }
}
```

Vous pourrez lancer depuis le terminal `npm run lint-json` pour vérifier le code
des fichiers JSON du projet.

### HTML

#### Extensions VS Code pour HTML

- HTML CSS Support
- HtmlHint

#### Extensions pour les navigateurs pour HTML

- [Firefox](https://addons.mozilla.org/fr/firefox/addon/html-validator/)
- [Chrome](https://chrome.google.com/webstore/detail/html-validator/mpbelhhnfhfjnaehkcnnaknldmnocglk?hl=fr)

#### Formatage pour HTML

Prettier prend en charge HTML.

#### Linter pour HTML

Installez le package `htmlhint` en tapant dans le terminal `npm i -D htmlhint`
ou `npm install --save-dev htmlhint`.

Le fichier de configuration doit se nommer `.htmlhintrc` et être à la racine du
projet. Un exemple de configuration serait :

```json
{
  "doctype-first": true,
  "doctype-html5": true,
  "html-lang-require": true,
  "head-script-disabled": true,
  "style-disabled": true,
  "script-disabled": false,
  "title-require": true,
  "attr-lowercase": true,
  "attr-no-duplication": true,
  "attr-no-unnecessary-whitespace": true,
  "attr-unsafe-chars": true,
  "attr-value-double-quotes": true,
  "attr-value-not-empty": true,
  "attr-sorted": true,
  "attr-whitespace": true,
  "alt-require": true,
  "input-requires-label": true,
  "tags-check": true,
  "tag-pair": true,
  "tag-self-close": true,
  "tagname-lowercase": true,
  "tagname-specialchars": true,
  "empty-tag-not-self-closed": false,
  "src-not-empty": true,
  "href-abs-or-rel": "abs",
  "id-class-ad-disabled": true,
  "id-class-value": "hump",
  "id-unique": true,
  "inline-script-disabled": true,
  "inline-style-disabled": true,
  "space-tab-mixed-disabled": "space",
  "spec-char-escape": true
}
```

L'ensemble des options est disponible
[sur le site de HtmlHint](https://htmlhint.com/docs/user-guide/list-rules).

Ajoutez dans le fichier `package.json` :

```json
{
  "scripts": {
    "lint-html": "npx htmlhint **/*.html --ignore docs/**/*.html reports/**/*.html"
  }
}
```

Vous pourrez lancer depuis le terminal `npm run lint-html` pour vérifier le code
des fichiers HTML du projet.

Installez les packages `html-w3c-validator` et `start-server-and-test` en tapant
dans le terminal `npm i -D html-w3c-validator start-server-and-test` ou
`npm install --save-dev html-w3c-validator start-server-and-test`.

Le fichier de configuration doit se nommer `.html-w3c-validatorrc.json` et être
à la racine du projet. Un exemple de configuration serait :

```json
{
  "urls": ["http://127.0.0.1:5500/"]
}
```

L'ensemble des options est disponible
[sur le site de html-w3c-validator](https://github.com/Divlo/html-w3c-validator#%EF%B8%8F-configuration).

Ajoutez dans le fichier `package.json` :

```json
{
  "scripts": {
    "start": "serve \"./index.html\"",
    "validate-html": "start-server-and-test \"start\" \"http://127.0.0.1:5500\" \"html-w3c-validator\""
  }
}
```

Vous pourrez lancer depuis le terminal `npm run validate-html` pour vérifier la
conformité du code des fichiers HTML du projet.

### CSS

#### Extensions VS Code pour CSS

- IntelliSense for CSS class names in HTML
- Stylelint

Dans le fichier `.vscode/settings.json`, ajoutez :

```json
{
  "css.lint.compatibleVendorPrefixes": "warning",
  "css.lint.duplicateProperties": "warning",
  "css.lint.ieHack": "error",
  "css.lint.important": "warning",
  "css.lint.importStatement": "warning",
  "css.lint.universalSelector": "warning",
  "css.lint.unknownVendorSpecificProperties": "warning",
  "css.lint.zeroUnits": "warning",
  "css.validate": false,
  "html-css-class-completion.enableEmmetSupport": true,
  "scss.lint.compatibleVendorPrefixes": "warning",
  "scss.lint.duplicateProperties": "warning",
  "scss.lint.ieHack": "error",
  "scss.lint.important": "warning",
  "scss.lint.importStatement": "warning",
  "scss.lint.universalSelector": "warning",
  "scss.lint.unknownVendorSpecificProperties": "warning",
  "scss.lint.zeroUnits": "warning",
  "scss.validate": false,
  "stylelint.snippet": ["css", "less", "postcss", "sass"],
  "stylelint.validate": ["css", "less", "postcss", "sass"]
}
```

#### Formatage pour CSS

Prettier prend en charge CSS.

#### Linter pour CSS

Installez le package `stylelint` en tapant dans le terminal `npm i -D stylelint`
ou `npm install --save-dev stylelint`.

Le fichier de configuration doit se nommer `.stylelintrc` et être à la racine du
projet. Le plus simple est de tapez `npm init stylelint` pour avoir une
configuration comme :

```json
{
  "extends": ["stylelint-config-standard"]
}
```

L'ensemble des options est disponible sur le
[site de Stylelint](https://stylelint.io/user-guide/configure).

Si des fichiers ou des dossiers doivent être ignorés, il faut créer un fichier
`.stylelintignore` à la racine du projet. Un exemple de configuration serait :

```text
docs
node_modules
reports
```

Ajoutez dans le fichier `package.json` :

```json
{
  "scripts": {
    "lint-css": "npx stylelint **/*.css --formatter verbose"
  }
}
```

Vous pourrez lancer depuis le terminal `npm run lint-css` pour vérifier le code
des fichiers CSS du projet.

#### Documentation pour CSS

Installez les packages `styledown`, `mkdirp` et `foreach-cli` en tapant dans le
terminal `npm i -D styledown mkdirp foreach-cli` ou
`npm install --save-dev styledown mkdirp foreach-cli`.

Le fichier de configuration doit se nommer `config.md` et être à la racine du
projet. Le plus simple est de tapez `npx styledown --conf > config.md` puis
d'ajouter les CSS de votre projet pour avoir une configuration comme :

```markdown
# Styleguide options

### Head

    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <script src='https://cdn.rawgit.com/styledown/styledown/v1.0.7/data/styledown.js'></script>
    <link rel='stylesheet' href='https://cdn.rawgit.com/styledown/styledown/v1.0.7/data/styledown.css' />
    <link rel='stylesheet' href='/dist/css/desktop.css' />
    <link rel='stylesheet' href='/dist/css/mobile.css' />
    <link rel='stylesheet' href='/dist/css/print.css' />

### Body

    <div class='sg-container' sg-content></div>
```

Ajoutez dans le fichier `package.json` :

```json
{
  "scripts": {
    "document-css": "npx mkdirp docs/css && npx foreach --glob src/css/**/*.css --execute \"npx styledown #{path} config.md > docs/css/#{name}.html\""
  }
}
```

Vous pourrez lancer depuis le terminal `npm run document-css` pour documenter
les fichiers CSS du projet.

### SASS

#### Extensions VS Code pour SASS

- Live Sass Compiler
- SCSS IntelliSense
- vscode-sassdoc
- SCSS Formatter

Dans le fichier `.vscode/settings.json`, ajoutez :

```json
{
  "[scss]": {
    "editor.defaultFormatter": "sibiraj-s.vscode-scss-formatter"
  },
  "liveSassCompile.settings.autoprefix": true,
  "liveSassCompile.settings.formats": [
    {
      "extensionName": ".css",
      "format": "compressed",
      "savePath": "/dist/css/",
      "savePathReplacementPairs": null
    }
  ],
  "liveSassCompile.settings.showOutputWindowOn": "Warning",
  "liveSassCompile.settings.useNewCompiler": true,
  "liveSassCompile.settings.watchOnLaunch": true
}
```

#### Formatage pour SASS

Prettier prend en charge SASS.

#### Linter pour SASS

Stylelint prend en charge SASS.

Ajoutez dans le fichier `package.json` :

```json
{
  "scripts": {
    "lint-scss": "npx stylelint **/*.scss --formatter verbose"
  }
}
```

Vous pourrez lancer depuis le terminal `npm run lint-scss` pour vérifier le code
des fichiers SASS du projet.

#### Automatisation pour SASS

Installez le package `sass` en tapant dans le terminal `npm i -D sass` ou
`npm install --save-dev sass`.

Ajoutez dans le fichier `package.json` :

```json
{
  "scripts": {
    "compile-css": "npx sass --style=compressed --watch src/scss:dist/css"
  }
}
```

Vous pourrez lancer depuis le terminal `npm run compile-css` pour compiler le
code des fichiers SASS du projet en fichiers CSS. L'option `--watch` surveille
les modifications et recompile à la volée.

ATTENTION : il ne faut pas activer l'extension Live Sass Compiler et lancer
`npm run compile-css` en même temps.

#### Documentation pour SASS

Installez le package `sassdoc` en tapant dans le terminal `npm i -D sassdoc` ou
`npm install --save-dev sassdoc`.

Le fichier de configuration doit se nommer `.sassdocrc` et être à la racine du
projet. Un exemple de configuration serait :

```json
{
  "dest": "./docs/scss/",
  "strict": true,
  "verbose": true
}
```

L'ensemble des options est disponible sur le
[site de sassdoc](http://sassdoc.com/configuration/#options).

Ajoutez dans le fichier `package.json` :

```json
{
  "scripts": {
    "document-scss": "npx sassdoc src/scss"
  }
}
```

Vous pourrez lancer depuis le terminal `npm run document-scss` pour documenter
les fichiers SASS du projet.

### JS

#### Extensions VS Code pour JS

- JavaScript (ES6) code snippets
- ESLint
- CodeMetrics
- Document This
- DevSkim
- Import Cost

Dans le fichier `.vscode/settings.json`, ajoutez :

```json
{
  "MS-CST-E.vscode-devskim.rules.enableBestPracticeSeverityRules": true,
  "MS-CST-E.vscode-devskim.rules.enableManualReviewSeverityRules": true
}
```

#### Formatage pour JS

ESLint, installé juste après, prend en charge le formatage de JS. Dans le
fichier `.vscode/settings.json`, ajoutez :

```json
{
  "[javascript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "eslint.format.enable": true
}
```

#### Linter pour JS

Installez les packages `eslint`, `eslint-config-prettier` et
`eslint-plugin-compat` en tapant dans le terminal
`npm i -D eslint eslint-config-prettier eslint-plugin-compat` ou
`npm install --save-dev eslint eslint-config-prettier eslint-plugin-compat`.

Le fichier de configuration doit se nommer `.eslintrc` et être à la racine du
projet. Le plus simple est de tapez `nx eslint --init` et de choisir :

- To check syntax, find problems, and enforce code style
- JavaScript modules (import/export)
- None of these
- No
- Sélectionner Browser et désélectionner Node
- Use a popular style guide
- Standard
- JSON
- Yes
- Npm

dans les options pour avoir une configuration comme :

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "standard",
  "overrides": [],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {}
}
```

puis ajouter :

```json
{
  "plugins": ["compat"],
  "extends": ["standard", "plugin:compat/recommended", "prettier"]
}
```

L'ensemble des options est disponible sur le
[site de eslint](https://eslint.org/docs/latest/use/configure/).

Si des fichiers ou des dossiers doivent être ignorés, il faut créer un fichier
`.eslintignore` à la racine du projet. Un exemple de configuration serait :

```text
docs
node_modules
reports
```

Ajoutez dans le fichier `package.json` :

```json
{
  "scripts": {
    "lint-js": "npx eslint --fix **/*.js"
  }
}
```

Vous pourrez lancer depuis le terminal `npm run lint-js` pour vérifier le code
des fichiers JS du projet.

#### Documentation pour JS

Grâce à l'extension `Document This`, il suffit de taper `/**` au-dessus d'une
classe ou d'une fonction pour auto-générer une partie de la documentation.

Installez le package `jsdoc` en tapant dans le terminal `npm i -D jsdoc` ou
`npm install --save-dev jsdoc`.

Le fichier de configuration doit se nommer `.jsdocrc.json` et être à la racine
du projet. Un exemple de configuration serait :

```json
{
  "opts": {
    "destination": "docs/js",
    "template": "templates/default",
    "encoding": "utf8",
    "recurse": true,
    "verbose": true
  },
  "templates": {
    "monospaceLinks": true
  }
}
```

L'ensemble des options est disponible sur le
[site de jsdoc](https://jsdoc.app/about-configuring-jsdoc.html).

Ajoutez dans le fichier `package.json` :

```json
{
  "scripts": {
    "document-js": "npx jsdoc --configure .jsdocrc.json src/js/"
  }
}
```

Vous pourrez lancer depuis le terminal `npm run document-js` pour documenter les
fichiers JS du projet.

## Les frameworks CSS

### Bootstrap

#### Extensions VS Code pour Bootstrap

- Bootstrap 5 Icon Snippets
- Bootstrap 5 Quick Snippets

---

TODO ncu
