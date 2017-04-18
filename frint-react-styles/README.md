# frint-react-styles

> HoC for applying styles in React components

## Usage

CSS:

```css
// styles.css
.bold {
  font-weight: bold;
}
```

Component:

```js
// Root.js
import React from 'react';
import { stylize } from 'frint-react-styles';

import styles from './styles.css';

const Root = React.createClass({
  render() {
    return (
      <div>
        <p styleName="bold">Bold text</p>
      </div>
    );
  }
});

export default stylize(styles)(Root);
```
