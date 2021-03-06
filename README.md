# frint-css-poc

> PoC for CSS-in-JS with Frint

## Goals

* Themes with configuration values
* A functional CSS Framework
* UI-Kit utilizing themed CSS Framework
* [Frint](https://frint.js.org) Apps using CSS Framework and UI-Kit

And most importantly:

* Changes in Themes/CSS-Framework/UI-Kit should not require rebundling Frint Apps

## Structure

### Base:

* [themes](./themes): Theme values stored as YAML files.
* [css-framework](./css-framework): A functional CSS Framework.
  * Uses Theme
  * Exports these bundles: `build/css-framework.js` and `build/css-framework.css`
* [ui-kit](./ui-kit): A UI-Kit of React components.
  * Uses themed CSS Framework
  * Exports these bundles: `build/ui-kit.js` and `build/ui-kit.css`

And,

* [css-loader](./css-loader): Modified webpack loader for suiting our needs. PR is [here](https://github.com/webpack-contrib/css-loader/pull/496).
* [build](./build): Static builds.

### Frint Apps:

* [app-root](./app-root): A root app with Frint using UI-Kit components, AND custom CSS
  * Exports single `build/app-root.js` file, including styles.
* [app-child](./app-child): Widget using UI-Kit components, AND custom CSS
  * Exports single `build/app-child.js` file, including styles.

Custom CSS in Apps should be able to use theme variables.

## Usage

To build all and then serve:

```
$ make install
$ make serve --THEME_NAME="blue"
```

On a separate Terminal window, the `css-framework` and `ui-kit` can be rebundled with a different theme. And the styles will be applied in Frint Apps dynamically:

```
$ make bundle-css-framework THEME_NAME="green"
$ make bundle-ui-kit THEME_NAME="green"
```
