# volto-google-analytics

A widget for [Volto](https://github.com/plone/volto) to insert values for any language enabled

To be used with mrs-developer, see [Volto docs](https://docs.voltocms.com/customizing/add-ons/) for further usage informations.

Created with [voltocli](https://github.com/nzambello/voltocli).

## Setup with voltocli

```bash
voltocli
```

and insert `volto-google-analytics` as addon name and `git@github.com:collective/volto-google-analytics.git` as addon URL.

## Manual setup

In your Volto project:

```bash
yarn add mrs-developer collective/volto-google-analytics
```

and in `package.json`:

```json
  "scripts": {
    "develop:npx": "npx -p mrs-developer missdev --config=jsconfig.json --output=addons",
    "develop": "missdev --config=jsconfig.json --output=addons",
    "preinstall": "if [ -f $(pwd)/node_modules/.bin/missdev ]; then yarn develop; else yarn develop:npx; fi",
    "postinstall": "rm -rf ./node_modules/volto-* && yarn omelette",
    ...
  }
```

Create a `mrs.developer.json` file:

```json
{
  "volto-google-analytics": {
    "url": "git@github.com:collective/volto-google-analytics.git"
  }
}
```

In `jsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "volto-google-analytics": ["addons/volto-google-analytics"]
    },
    "baseUrl": "src"
  }
}
```

Fix tests, in `package.json`:

```json
"jest": {
    ...
    "moduleNameMapper": {
      "@plone/volto/(.*)$": "<rootDir>/node_modules/@plone/volto/src/$1",
      "@package/(.*)$": "<rootDir>/src/$1",
      "volto-google-analytics/(.*)$": "<rootDir>/src/addons/volto-google-analytics/src/$1",
      "~/(.*)$": "<rootDir>/src/$1"
    },
    "testMatch": [
      "**/__tests__/**/*.[jt]s?(x)",
      "**/?(*.)+(spec|test).[jt]s?(x)",
      "!**/src/addons/volto/**/*"
    ],
    ...
```

Edit `.eslintrc`:

```json
{
  "extends": "./node_modules/@plone/volto/.eslintrc",
  "settings": {
    "import/resolver": {
      "alias": {
        "map": [
          ["@plone/volto", "@plone/volto/src"],
          ["@package", "./src"],
          ["volto-google-analytics", "./src/addons/volto-google-analytics/src"]
        ],
        "extensions": [".js", ".jsx", ".json"]
      },
      "babel-plugin-root-import": {
        "rootPathSuffix": "src"
      }
    }
  }
}
```

Add `src/addons` in `.gitignore`:

```
# .gitignore
src/addons
```

Then, run `yarn` and install dependencies:

```bash
yarn
```

## Usage

Add in your `.env` file of choice a variable:

```
RAZZLE_GA_CODE=UA-XXXXXXXX-X
```

and include `useGoogleAnalytics` in your project, like:

```jsx
import { useGoogleAnalytics } from 'volto-google-analytics'

const Footer = () => {
  useGoogleAnalytics()

  return (
    ...
  )
}
```
