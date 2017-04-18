# frint-css-poc

> PoC for CSS-in-JS with Frint

## Goals

* Themes with configuration values
* A functional CSS Framework
* UI-Kit utilizing themed CSS Framework
* Frint Apps using CSS Framework and UI-Kit

And most importantly:

* Changes in Themes/CSS-Framework/UI-Kit should not require rebundling Frint Apps

## Structure

### Base:

* [themes](./themes): Theme values stored as YAML files.
* [css-framework](./css-framework): A functional CSS Framework.
  * Uses Theme
* [ui-kit](./ui-kit): A UI-Kit of React components.
  * Uses themed CSS Framework

And,

* [css-loader](./css-loader): Modified webpack loader for suiting our needs. PR is [here](https://github.com/webpack-contrib/css-loader/pull/496).
* [frint-react-styles](./frint-react-styles): New Frint package exposing `stylize` HoC for use in Apps using styles.
* [build](./build): Static builds.

### Frint Apps:

* [app-root](./app-root): A root app with Frint using UI-Kit components, AND custom CSS
  * Exports single `build/app-root.js` file, including styles.
* [app-child](./app-child): Widget using UI-Kit components, AND custom CSS
  * Exports single `build/app-child.js` file, including styles.

Custom CSS in Apps should be able to use theme variables.

## Future goals

Shipping CSS statically without requiring JS on first serve to the browser:

* [ ] Server-side rendering
* [ ] Extract CSS for Root Apps

## Usage

To build all and then serve:

```
$ make install
$ make serve --THEME_NAME="blue"
```
