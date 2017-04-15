import ReactCssModules from 'react-css-modules';

export default function stylize(styles) {
  return function stylizeComponent(Component) {
    return ReactCssModules(Component, styles);
  }
}
