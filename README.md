# frint-css-poc

> PoC for CSS-in-JS with Frint

## Goals

* Themes with configuration values
* A functional component-based CSS Framework
* UI-Kit utilizing themed CSS Framework
* Frint Apps using CSS Framework and UI-Kit

And most importantly:

* Changes in Themes/CSS-Framework/UI-Kit should not require rebundling Frint Apps

## Structure

### Base:

* [themes](./themes): Theme values stored as YAML files
* [css-framework](./css-framework): A functional component-based CSS Framework
  * Uses Theme
* [ui-kit](./ui-kit): A UI-Kit of React components
  * Uses themed CSS Framework

### Frint Apps:

* [app-root](./app-root): A root app with Frint using UI-Kit components, AND custom CSS
* [app-child](./app-child): Widget using UI-Kit components, AND custom CSS

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
